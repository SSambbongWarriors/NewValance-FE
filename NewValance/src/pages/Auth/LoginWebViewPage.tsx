import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CustomText } from '../../components/common/CustomText';
import theme from '../../styles/theme';

type User = {
  email: string | null;
  profileImage: string | null;
  userId: number | null;
  username: string | null;
};

type KakaoAuthResponse = {
  access_token: string;
  refresh_token: string;
  expiresIn: number;
  grantType: string;
  isNew: boolean;
  user: User;
};

const LoginWebViewPage = ({ route }: any) => {
  const type = route.params.type;
  const navigate = useNavigation<StackNavigationProp<any>>();
  const [isParsed, setIsParsed] = useState<boolean>(false);
  const KAKAO_REDIRECT_URL = `${process.env.EXPO_PUBLIC_API_URL}/login/oauth2/code/kakao`;
  const injectedJavaScript = `
  (function() {
    if (window.location.href.includes("${KAKAO_REDIRECT_URL}")) {
      window.ReactNativeWebView.postMessage(document.body.innerText);
    }
  })();
  `;

  const getAccessToken = async (event: WebViewMessageEvent) => {
    try {
      const data: KakaoAuthResponse = JSON.parse(event.nativeEvent.data);
      if (data) {
        setIsParsed(true);
        const token = {
          accessToken: data.access_token,
          refreshToken: data.refresh_token,
          grantType: data.grantType,
          expiresIn: data.expiresIn,
        };

        console.log(token);
        await AsyncStorage.setItem('token', JSON.stringify(token));
        console.log('토큰 저장');
        navigate.replace('Home');
      } else {
        console.log('🚨 토큰을 가져오지 못함:', data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {!isParsed ? (
        <WebView
          style={{ flex: 1 }}
          originWhitelist={['*']}
          scalesPageToFit={false}
          source={{
            uri: `${process.env.EXPO_PUBLIC_API_URL}/oauth2/authorization/${type}`,
          }}
          injectedJavaScript={injectedJavaScript}
          onMessage={getAccessToken}
          onError={(e) => console.log('WebView error:', e.nativeEvent)}
        />
      ) : (
        <View style={Styles.container}>
          <CustomText font={theme.fonts.bold28}>
            잠시만 기다려 주세요...
          </CustomText>
        </View>
      )}
    </>
  );
};

export default LoginWebViewPage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
