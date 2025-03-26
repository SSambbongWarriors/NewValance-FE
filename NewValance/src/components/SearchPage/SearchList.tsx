import { NewsCategory } from '../../store/interfaces';
import { VideoThumbS } from '../common/VideoThumb/VideoThumb';
import { CustomText } from '../common/CustomText';
import theme from '../../styles/theme';
import * as S from './SearchList.styles';

interface NewsListProps {
  data: Array<NewsCategory>;
}
export const SearchList = ({ data }: NewsListProps) => {
  return (
    <S.Container showsVerticalScrollIndicator={false} decelerationRate={0.985}>
      {data.map((cat) => (
        <S.CategoryContainer key={cat.category}>
          <S.Header>
            <CustomText font={theme.fonts.bold24}>{cat.category}</CustomText>
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
