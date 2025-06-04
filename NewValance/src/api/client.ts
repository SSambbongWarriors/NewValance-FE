import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { postRefreshToken } from './auth';
import * as SecureStore from 'expo-secure-store';

export const client = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

client.interceptors.request.use(
  async (config) => {
    try {
      //const tokenString = await AsyncStorage.getItem('token');
      const tokenString = await SecureStore.getItemAsync('token');
      if (tokenString) {
        const token = JSON.parse(tokenString);
        config.headers['Authorization'] = `Bearer ${token.accessToken}`;
      }
    } catch (error) {
      console.error('🚨 토큰 가져오기 실패:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.request.use(
  (res) => res,
  async (error) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const newAccess = await postRefreshToken(); // refresh 함수
      if (newAccess) {
        const token = {
          accessToken: newAccess.access_token,
          refreshToken: newAccess.refresh_token,
        };

        console.log(token);
        //await AsyncStorage.setItem('token', JSON.stringify(token));
        await SecureStore.setItemAsync('token', JSON.stringify(token));
        console.log('토큰 저장');

        original.headers.Authorization = `Bearer ${newAccess.access_token}`;
        return client(original); // 요청 재시도
      }
    }
    return Promise.reject(error);
  }
);
