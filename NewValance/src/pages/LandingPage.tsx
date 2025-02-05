import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { View } from 'react-native';

const LandingPage = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);

  return <View></View>;
};

export default LandingPage;
