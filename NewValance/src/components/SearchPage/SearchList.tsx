import { NewsCategory, NewsData } from '../../store/interfaces';
import { VideoThumbS } from '../common/VideoThumb/VideoThumb';
import { CustomText } from '../common/CustomText';
import theme from '../../styles/theme';
import * as S from './SearchList.styles';
import { SearchResultType } from '../../pages/Main/SearchPage/SearchPage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SearchListProps {
  data: SearchResultType;
}

export const SearchList = ({ data }: SearchListProps) => {
  const navigate = useNavigation<StackNavigationProp<any>>();

  const onPressNews = async (news: NewsData) => {
    try {
      const raw = await AsyncStorage.getItem('MySearchList');
      const list: NewsData[] = raw ? JSON.parse(raw) : [];

      const filtered = list.filter((item) => item.articleId !== news.articleId);

      const newList = [news, ...filtered].slice(0, 10);
      await AsyncStorage.setItem('MySearchList', JSON.stringify(newList));
    } catch (error) {
      console.error(error);
    } finally {
      navigate.navigate('Video', { type: 'search', newsId: news.articleId });
    }
  };

  return (
    <S.Container showsVerticalScrollIndicator={false} decelerationRate={0.985}>
      {Object.entries(data).map(([cat, news]) => (
        <S.CategoryContainer key={cat}>
          <S.Header>
            <CustomText font={theme.fonts.bold24}>{cat}</CustomText>
          </S.Header>
          <S.NewsContainer
            horizontal={true}
            contentContainerStyle={{ gap: 8, paddingRight: 8 }}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
          >
            {news.map((item) => (
              <Pressable key={item.articleId} onPress={() => onPressNews(item)}>
                <VideoThumbS title={item.title} thumbnail={item.thumbnailUrl} />
              </Pressable>
            ))}
          </S.NewsContainer>
        </S.CategoryContainer>
      ))}
    </S.Container>
  );
};
