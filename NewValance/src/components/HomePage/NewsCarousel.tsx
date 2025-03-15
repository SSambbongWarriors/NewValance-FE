import { wp } from '../../styles/ResponsiveSize';
import { CustomText } from '../common/CustomText';
import * as S from './NewsCarousel.styles';
import theme from '../../styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import { NewsData } from '../../store/interfaces';

interface NewsCarouselProps {
  data: Array<NewsData>;
}

export const NewsCarousel = ({ data }: NewsCarouselProps) => {
  const offset = wp(300) + 12;
  const snapToOffsets = [0, offset, offset * 2];

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
            <S.Thumbnail source={{ uri: item.thumbnail }} resizeMode="cover">
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
