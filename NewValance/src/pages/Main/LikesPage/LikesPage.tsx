import * as S from './LikesPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import Layout from '../../Layout';
import { VerticalVideoList } from '../../../components/common/VideoList/VerticalVideoList';

const dummyData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `좋아요한 뉴스 제목 ${i + 1}`,
  thumbnail:
    'https://i.pinimg.com/736x/b9/f7/7f/b9f77fa15e2e08d32ea20bf57cf3da04.jpg',
}));

const CategoryPage = () => {
  return (
    <Layout>
      <S.Container>
        <S.Header>
          <CustomText font={theme.fonts.bold24}>내가 좋아요한 뉴스</CustomText>
        </S.Header>
        <VerticalVideoList data={dummyData} />
      </S.Container>
    </Layout>
  );
};

export default CategoryPage;
