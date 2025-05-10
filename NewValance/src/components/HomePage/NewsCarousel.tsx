import { wp } from '../../styles/ResponsiveSize';
import { CustomText } from '../common/CustomText';
import * as S from './NewsCarousel.styles';
import theme from '../../styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { NewsData, VideoData } from '../../store/interfaces';
import { useEffect, useState } from 'react';
import { getHomeBanner } from '../../api/home';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const NewsCarousel = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState<Array<VideoData>>([]);
  const navigate = useNavigation<StackNavigationProp<any>>();

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

    getNewsData();
  }, [useIsFocused]);

  const onPressCard = async (item: VideoData) => {
    navigate.navigate('Video', { type: 'recommend', data: item });
  };

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
        renderItem={({ item }: { item: VideoData }) => (
          <S.Card
            style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)' }}
            key={'carousel' + item.newsId}
            onPress={() => onPressCard(item)}
          >
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
