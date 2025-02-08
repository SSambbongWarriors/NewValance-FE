import Layout from '../../Layout';
import * as S from './HomePage.styles';
import { NewsCarousel } from '../../../components/HomePage/NewsCarousel';

const dummyCarouselData = [
  {
    title: 'FT “트럼프 지갑에 전송된 트럼프 모방 밈코인 수백종”',
    thumbnail:
      'https://imgnews.pstatic.net/image/001/2025/02/08/PAP20250121234001009_P4_20250208000633160.jpg?type=w860',
  },
  {
    title: '野 "尹, 말장난으로 탄핵심판 흔들기…궤변·망상 설 자리 없어"',
    thumbnail:
      'https://imgnews.pstatic.net/image/001/2025/02/08/PYH2024101721960006300_P4_20250208165016711.jpg?type=w860',
  },
  {
    title: '이재명, 탄핵 집회 참여 독려‥"내란 아직 안 끝나"',
    thumbnail:
      'https://imgnews.pstatic.net/image/214/2025/02/08/0001404367_001_20250208220309043.jpg?type=w860',
  },
];

const HomePage = () => {
  return (
    <Layout>
      <S.Container>
        <NewsCarousel data={dummyCarouselData} />
      </S.Container>
    </Layout>
  );
};

export default HomePage;
