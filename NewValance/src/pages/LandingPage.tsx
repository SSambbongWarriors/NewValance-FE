import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import SplashLogo from '../assets/images/common/splash-icon.svg';

const LandingPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
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
