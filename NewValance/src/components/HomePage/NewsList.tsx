import { NewsCategory, NewsData } from '../../store/interfaces';
import { CustomText } from '../common/CustomText';
import ArrowLeft from '../../assets/images/common/arrow-left.svg';
import * as S from './NewsList.styles';
import { VideoThumbS } from '../common/VideoThumb/VideoThumb';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { getHomeNews } from '../../api/home';

const dummyNewsData = [
  {
    categoryId: 1,
    categoryName: '정치',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `정치 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647',
    })),
  },
  {
    categoryId: 2,
    categoryName: '경제',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 11,
      title: `경제 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/03/bd/c8/03bdc85ca190a49f333a4dd324521cc8.jpg',
    })),
  },
  {
    categoryId: 3,
    categoryName: '사회',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 21,
      title: `사회 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/b9/f7/7f/b9f77fa15e2e08d32ea20bf57cf3da04.jpg',
    })),
  },
  {
    categoryId: 4,
    categoryName: '국제',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 31,
      title: `국제 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/ae/36/d7/ae36d717ce897e031cc8e4d03081cb2e.jpg',
    })),
  },
  {
    categoryId: 5,
    categoryName: '과학',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 41,
      title: `과학 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/12/1c/80/121c803ec45f3ff3f4be225bef5a9b2b.jpg',
    })),
  },
  {
    categoryId: 6,
    categoryName: '스포츠',
    data: Array.from({ length: 10 }, (_, i) => ({
      id: i + 51,
      title: `스포츠 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/fb/86/4d/fb864d652a5dd698675f60e384b9927e.jpg',
    })),
  },
];

export const NewsList = () => {
  const navigate = useNavigation<StackNavigationProp<any>>();
  const [data, setData] = useState<Array<NewsCategory>>([]);

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const res = await getHomeNews();
        if (Array.isArray(res)) {
          setData(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getNewsData();
  }, []);

  return (
    <S.Container>
      {data?.map((cat) => (
        <S.CategoryContainer key={cat.categoryName}>
          <S.Header
            onPress={() =>
              navigate.navigate('Category', { cat: cat.categoryName })
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
              <VideoThumbS
                key={item.articleId}
                title={item.title}
                thumbnail={
                  item.thumbnailUrl ||
                  'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647'
                }
              />
            ))}
          </S.NewsContainer>
        </S.CategoryContainer>
      ))}
    </S.Container>
  );
};
