import { FlatList } from 'react-native';
import { NewsData } from '../../../store/interfaces';
import { VideoThumbL } from '../VideoThumb/VideoThumb';

interface VideoListProps {
  data: Array<NewsData>;
}

export const VerticalVideoList = ({ data }: VideoListProps) => {
  return (
    <FlatList
      contentContainerStyle={{ gap: 16 }}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }: { item: NewsData }) => (
        <VideoThumbL title={item.title} thumbnail={item.thumbnail} />
      )}
    />
  );
};
