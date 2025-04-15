import { Category, NewsCategory, NewsData } from '../../store/interfaces';
import { CustomText } from '../common/CustomText';
import ArrowLeft from '../../assets/images/common/arrow-left.svg';
import * as S from './NewsList.styles';
import { VideoThumbS } from '../common/VideoThumb/VideoThumb';
import theme from '../../styles/theme';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { getHomeNews } from '../../api/home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native-gesture-handler';

const TypeMap = [
  'politics',
  'economy',
  'international',
  'culture',
  'it',
  'society',
];

export const NewsList = () => {
  const navigate = useNavigation<StackNavigationProp<any>>();
  const [data, setData] = useState<Array<NewsCategory>>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const sortNewsData = async (newsData: Array<NewsCategory>) => {
      try {
        const res = await AsyncStorage.getItem('cat-order');
        if (res) {
          const catOrder = JSON.parse(res).map((item: Category) => item.id);
          const sortedData = catOrder.map((id: number) =>
            newsData.find((item) => item.categoryId == id)
          );

          setData(sortedData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getNewsData = async () => {
      try {
        const res = await getHomeNews();
        if (Array.isArray(res)) {
          sortNewsData(res);
          //setData(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (isFocused) {
      getNewsData();
    }
  }, [isFocused]);

  const onPressNews = (catId: number, newsId: number) => {
    navigate.navigate('Video', { type: TypeMap[catId - 1], newsId: newsId });
  };

  return (
    <S.Container>
      {data?.map((cat) => (
        <S.CategoryContainer key={cat.categoryName}>
          <S.Header
            onPress={() =>
              navigate.navigate('Category', {
                catName: cat.categoryName,
                catId: cat.categoryId,
              })
            }
          >
            <CustomText font={theme.fonts.bold24}>
              {cat.categoryName}
            </CustomText>
            <ArrowLeft />
          </S.Header>
          <S.NewsContainer
            horizontal={true}
            contentContainerStyle={{ gap: 8, paddingRight: 8 }}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
          >
            {cat.newsList.map((item) => (
              <Pressable
                onPress={() => onPressNews(cat.categoryId, item.articleId)}
              >
                <VideoThumbS
                  key={item.articleId}
                  title={item.title}
                  thumbnail={
                    item.thumbnailUrl ||
                    'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647'
                  }
                />
              </Pressable>
            ))}
          </S.NewsContainer>
        </S.CategoryContainer>
      ))}
    </S.Container>
  );
};
