import * as S from './CategoryPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import Layout from '../../Layout';

import { VerticalVideoList } from '../../../components/common/VideoList/VerticalVideoList';

const dummyData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `정치 뉴스 제목 ${i + 1}`,
  thumbnail:
    'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647',
}));

const CategoryPage = ({ route }: any) => {
  const { cat } = route.params;
  return (
    <Layout>
      <S.Container>
        <S.Header>
          <CustomText font={theme.fonts.bold32} color={theme.colors.black_1}>
            {cat}
          </CustomText>
        </S.Header>
        <VerticalVideoList data={dummyData} />
      </S.Container>
    </Layout>
  );
};

export default CategoryPage;
