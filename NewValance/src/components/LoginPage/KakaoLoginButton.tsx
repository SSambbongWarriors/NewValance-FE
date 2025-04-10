import React, { useEffect } from 'react';
import { Linking, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';

import styled from 'styled-components/native';

WebBrowser.maybeCompleteAuthSession();

export const KakaoLoginButton = () => {
  const REDIRECT_URI = 'https://new-valance-auth.vercel.app/';
  const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.EXPO_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: process.env.EXPO_PUBLIC_KAKAO_REST_API_KEY,
      redirectUri: REDIRECT_URI,
      responseType: 'code',
    },
    { authorizationEndpoint: 'https://kauth.kakao.com/oauth/authorize' }
  );

  useEffect(() => {
    console.log(response);
    if (response?.type === 'success') {
      const code = response.params.code;
      console.log('인가 코드:', code);
    }
  }, [response]);

  return (
    <Pressable
      /*onPress={async () => await Linking.openURL(AUTH_URL)}*/ onPress={() =>
        promptAsync()
      }
    >
      <KakaoButton
        source={require('../../assets/images/LoginPage/kakao-login-icon.png')}
      />
    </Pressable>
  );
};

const KakaoButton = styled.Image`
  width: 300px;
  object-fit: contain;
`;
