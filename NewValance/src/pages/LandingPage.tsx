import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import SplashLogo from '../assets/images/common/splash-icon.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { StackNavigationProp } from '@react-navigation/stack';

const LandingPage = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const parseJwt = (token: string) => {
    try {
      const base64Payload = token.split('.')[1];
      const decodedPayload = atob(base64Payload);
      return JSON.parse(decodedPayload);
    } catch (error) {
      console.error('JWT 디코딩 실패:', error);
      return null;
    }
  };

  const isTokenValid = (accessToken: string): boolean => {
    const payload = parseJwt(accessToken);
    if (!payload?.exp) return false;
    return payload.exp * 1000 > Date.now(); // 현재 시간보다 exp가 미래인지 확인
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        //const rawToken = await AsyncStorage.getItem('token');
        const rawToken = await SecureStore.getItemAsync('token');
        if (!rawToken) {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1000);
        }

        const token = JSON.parse(rawToken as string);
        const accessToken = token?.accessToken;

        if (accessToken && isTokenValid(accessToken)) {
          console.log(accessToken);
          setTimeout(() => {
            navigation.replace('Home');
          }, 1000);
        } else {
          setTimeout(() => {
            navigation.replace('Login');
          }, 1000);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkToken();
  }, []);

  return (
    <ImageBackground
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      source={require('../assets/images/common/landing-background.png')}
      resizeMode="cover"
    >
      <Image
        source={require('../assets/images/common/splash-icon.png')}
        style={{ width: '80%', resizeMode: 'contain' }}
      />
    </ImageBackground>
  );
};

export default LandingPage;
