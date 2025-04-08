import Layout from '../../Layout';
import * as S from './HomePage.styles';
import { NewsCarousel } from '../../../components/HomePage/NewsCarousel';
import { NewsList } from '../../../components/HomePage/NewsList';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

const HomePage = () => {
  const navigate = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    const backAction = () => {
      if (navigate.isFocused()) {
        Alert.alert('종료', '앱을 종료하시겠습니까?', [
          {
            text: '취소',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: '종료',
            onPress: () => BackHandler.exitApp(), // 앱 종료
          },
        ]);
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);

  return (
    <Layout>
      <S.Container
        showsVerticalScrollIndicator={false}
        decelerationRate={0.985}
      >
        <NewsCarousel />
        <NewsList />
      </S.Container>
    </Layout>
  );
};

export default HomePage;
