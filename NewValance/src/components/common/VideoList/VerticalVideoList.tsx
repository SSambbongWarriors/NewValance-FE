import { FlatList, Pressable } from 'react-native';
import { NewsData } from '../../../store/interfaces';
import { VideoThumbL } from '../VideoThumb/VideoThumb';
import { useEffect, useState } from 'react';
import { getCategoryNews } from '../../../api/video';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface VerticalVideoList {
  catId: number;
}

const PAGE_SIZE = 6;
const TypeMap = [
  'politics',
  'economy',
  'international',
  'culture',
  'it',
  'society',
];

export const VerticalVideoList = ({ catId }: VerticalVideoList) => {
  const [data, setData] = useState<Array<NewsData>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(0);
  const navigate = useNavigation<StackNavigationProp<any>>();

  const getVideoData = async () => {
    try {
      const res = await getCategoryNews(catId, pageNum, PAGE_SIZE);
      const newsList = res._embedded?.newsSimpleDtoList;
      if (Array.isArray(newsList) && newsList.length > 0) {
        setData((prev) => [...prev, ...newsList]);
        setPageNum((prev) => prev + 1);
        if (pageNum * PAGE_SIZE > res.totalElements) {
          setIsLast(true);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideoData();
  }, []);

  const onPressNews = (id: number) => {
    navigate.navigate('Video', { type: TypeMap[catId - 1], newsId: id });
  };

  return (
    <FlatList
      contentContainerStyle={{ gap: 16 }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }: { item: NewsData }) => (
        <Pressable onPress={() => onPressNews(item.articleId)}>
          <VideoThumbL
            title={item.title}
            thumbnail={
              item.thumbnailUrl ||
              'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647'
            }
          />
        </Pressable>
      )}
      onEndReached={isLast ? null : getVideoData}
    />
  );
};
