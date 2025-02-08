import { wp } from '../../styles/ResponsiveSize';
import { CustomText } from '../common/CustomText';
import * as S from './NewsCarousel.styles';
import theme from '../../styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

interface CarouselData {
  title: string;
  thumbnail: string;
}

interface NewsCarouselProps {
  data: Array<CarouselData>;
}

export const NewsCarousel = ({ data }: NewsCarouselProps) => {
  const offset = wp(335) + 12;
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
        renderItem={({ item }: { item: CarouselData }) => (
          <S.Card>
            <S.Thumbnail
              source={{ uri: item.thumbnail }}
              resizeMode="cover"
              imageStyle={{
                borderRadius: 15,
              }}
            >
              <S.Gradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                locations={[0.7, 1]}
                style={{ justifyContent: 'flex-end' }}
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
