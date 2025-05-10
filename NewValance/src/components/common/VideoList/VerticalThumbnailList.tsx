import { FlatList, Pressable } from 'react-native';
import { NewsData } from '../../../store/interfaces';
import { VideoThumbL } from '../VideoThumb/VideoThumb';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface VerticalThumbnailProps {
  data: NewsData[];
  handleData: () => Promise<void>;
}

export const VerticalThumbnailList = ({
  data,
  handleData,
}: VerticalThumbnailProps) => {
  const navigate = useNavigation<StackNavigationProp<any>>();

  const onPressNews = (id: number) => {
    navigate.navigate('Video', { type: 'likes', newsId: id });
  };

  return (
    <FlatList
      contentContainerStyle={{ gap: 24, paddingBottom: 32 }}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }: { item: NewsData }) => (
        <Pressable onPress={() => onPressNews(item.articleId)}>
          <VideoThumbL title={item.title} thumbnail={item.thumbnailUrl} />
        </Pressable>
      )}
      numColumns={2}
      onEndReached={handleData}
    />
  );
};
