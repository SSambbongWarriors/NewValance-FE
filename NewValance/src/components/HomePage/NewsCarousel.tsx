import { wp } from '../../styles/ResponsiveSize';
import { CustomText } from '../common/CustomText';
import * as S from './NewsCarousel.styles';
import theme from '../../styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { NewsData } from '../../store/interfaces';
import { useEffect, useState } from 'react';
import { getHomeBanner } from '../../api/home';

const dummyCarouselData = [
  {
    articleId: 1,
    title: 'FT “트럼프 지갑에 전송된 트럼프 모방 밈코인 수백종”',
    thumbnailUrl:
      'https://imgnews.pstatic.net/image/001/2025/02/08/PAP20250121234001009_P4_20250208000633160.jpg?type=w860',
  },
  {
    articleId: 2,
    title: '野 "尹, 말장난으로 탄핵심판 흔들기…궤변·망상 설 자리 없어"',
    thumbnailUrl:
      'https://imgnews.pstatic.net/image/001/2025/02/08/PYH2024101721960006300_P4_20250208165016711.jpg?type=w860',
  },
  {
    articleId: 3,
    title: '이재명, 탄핵 집회 참여 독려‥"내란 아직 안 끝나"',
    thumbnailUrl:
      'https://imgnews.pstatic.net/image/214/2025/02/08/0001404367_001_20250208220309043.jpg?type=w860',
  },
];

export const NewsCarousel = () => {
  const [data, setData] = useState<Array<NewsData>>([]);

  const offset = wp(300) + 12;
  const snapToOffsets = [0, offset, offset * 2];

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const res = await getHomeBanner();
        if (res) {
          setData(res);
        }
      } catch (error) {
        console.error(error);
      }
    };
    setData(dummyCarouselData);
    getNewsData();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{ paddingLeft: 16 }}
        snapToOffsets={snapToOffsets}
        decelerationRate="fast"
        windowSize={3}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: { item: NewsData }) => (
          <S.Card style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)' }}>
            <S.Thumbnail source={{ uri: item.thumbnailUrl }} resizeMode="cover">
              <S.Gradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                locations={[0.7, 1]}
              >
                <S.Title>
                  <CustomText
                    font={theme.fonts.bold24}
                    color={theme.colors.white}
                  >
                    {item.title}
                  </CustomText>
                </S.Title>
              </S.Gradient>
            </S.Thumbnail>
          </S.Card>
        )}
      />
    </GestureHandlerRootView>
  );
};
