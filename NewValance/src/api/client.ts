import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

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
      const tokenString = await AsyncStorage.getItem('token');
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
