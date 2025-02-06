import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/pages/LandingPage';
import LoginPage from './src/pages/Auth/LoginPage';
import SigninPage from './src/pages/Auth/SigninPage';
import CategoryPage from './src/pages/Main/CategoryPage';
import GenrePage from './src/pages/Main/GenrePage';
import HomePage from './src/pages/Main/HomePage';
import LikesPage from './src/pages/Main/LikesPage';
import SearchPage from './src/pages/Main/SearchPage';
import MyPage from './src/pages/My/MyPage';
import ProfileEditPage from './src/pages/My/ProfileEditPage';
import VideoPage from './src/pages/Video/VideoPage';

import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import Layout from './src/pages/Layout';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const getFont = async () => {
      await Font.loadAsync({
        'Pretendard-Bold': require('./src/assets/fonts/Pretendard-Bold.otf'),
        'Pretendard-Regular': require('./src/assets/fonts/Pretendard-Regular.otf'),
      });
      setFontsLoaded(true);
    };
    getFont();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Landing"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Landing" component={LandingPage} />

          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Signin" component={SigninPage} />

          <Stack.Screen name="Category" component={CategoryPage} />
          <Stack.Screen name="Genre" component={GenrePage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Likes" component={LikesPage} />
          <Stack.Screen name="Search" component={SearchPage} />
          <Stack.Screen name="My" component={MyPage} />
          <Stack.Screen name="ProfileEdit" component={ProfileEditPage} />

          <Stack.Screen name="Video" component={VideoPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
