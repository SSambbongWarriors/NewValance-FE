import Layout from '../../Layout';
import * as S from './HomePage.styles';
import { NewsCarousel } from '../../../components/HomePage/NewsCarousel';
import { NewsList } from '../../../components/HomePage/NewsList';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

const dummyCarouselData = [
  {
    id: 1,
    title: 'FT “트럼프 지갑에 전송된 트럼프 모방 밈코인 수백종”',
    thumbnail:
      'https://imgnews.pstatic.net/image/001/2025/02/08/PAP20250121234001009_P4_20250208000633160.jpg?type=w860',
  },
  {
    id: 2,
    title: '野 "尹, 말장난으로 탄핵심판 흔들기…궤변·망상 설 자리 없어"',
    thumbnail:
      'https://imgnews.pstatic.net/image/001/2025/02/08/PYH2024101721960006300_P4_20250208165016711.jpg?type=w860',
  },
  {
    id: 3,
    title: '이재명, 탄핵 집회 참여 독려‥"내란 아직 안 끝나"',
    thumbnail:
      'https://imgnews.pstatic.net/image/214/2025/02/08/0001404367_001_20250208220309043.jpg?type=w860',
  },
];

export const dummyNewsData = [
  {
    category: '정치',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `정치 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647',
    })),
  },
  {
    category: '경제',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 11,
      title: `경제 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/03/bd/c8/03bdc85ca190a49f333a4dd324521cc8.jpg',
    })),
  },
  {
    category: '사회',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 21,
      title: `사회 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/b9/f7/7f/b9f77fa15e2e08d32ea20bf57cf3da04.jpg',
    })),
  },
  {
    category: '국제',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 31,
      title: `국제 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/ae/36/d7/ae36d717ce897e031cc8e4d03081cb2e.jpg',
    })),
  },
  {
    category: '과학',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 41,
      title: `과학 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/12/1c/80/121c803ec45f3ff3f4be225bef5a9b2b.jpg',
    })),
  },
  {
    category: '스포츠',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 51,
      title: `스포츠 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/fb/86/4d/fb864d652a5dd698675f60e384b9927e.jpg',
    })),
  },
];

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
        <NewsCarousel data={dummyCarouselData} />
        <NewsList data={dummyNewsData} />
      </S.Container>
    </Layout>
  );
};

export default HomePage;
