import { NewsCategory, NewsData } from '../../store/interfaces';
import { CustomText } from '../common/CustomText';
import ArrowLeft from '../../assets/images/common/arrow-left.svg';
import * as S from './NewsList.styles';
import { VideoThumbS } from '../common/VideoThumb/VideoThumb';
import theme from '../../styles/theme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface NewsListProps {
  data: Array<NewsCategory>;
}

export const NewsList = ({ data }: NewsListProps) => {
  const navigate = useNavigation<StackNavigationProp<any>>();

  return (
    <S.Container>
      {data.map((cat) => (
        <S.CategoryContainer key={cat.category}>
          <S.Header>
            <CustomText font={theme.fonts.bold24} color={theme.colors.black_1}>
              {cat.category}
            </CustomText>
            <ArrowLeft onPress={() => navigate.navigate('Category')} />
          </S.Header>
          <S.NewsContainer
            horizontal={true}
            contentContainerStyle={{ gap: 8, paddingRight: 8 }}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
          >
            {cat.data.map((item) => (
              <VideoThumbS
                key={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
              />
            ))}
          </S.NewsContainer>
        </S.CategoryContainer>
      ))}
    </S.Container>
  );
};
