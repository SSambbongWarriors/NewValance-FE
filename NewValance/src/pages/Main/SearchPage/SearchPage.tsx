import * as S from './SearchPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';

import Layout from '../../Layout';
import { useState } from 'react';
import { NewsData } from '../../../store/interfaces';
import { VerticalVideoList } from '../../../components/common/VideoList/VerticalVideoList';
import { SearchList } from '../../../components/SearchPage/SearchList';
import { SearchBar } from '../../../components/SearchPage/SearchBar';

const dummyHistory = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `검색 기록 ${i + 1}`,
  thumbnail:
    'https://i.pinimg.com/736x/ae/36/d7/ae36d717ce897e031cc8e4d03081cb2e.jpg',
}));

const dummySearchList = [
  {
    category: '정치',
    data: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `정치 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://imgnews.pstatic.net/image/445/2024/10/24/0000250511_001_20241024225012188.jpg?type=w647',
    })),
  },
  {
    category: '경제',
    data: Array.from({ length: 2 }, (_, i) => ({
      id: i + 11,
      title: `경제 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/03/bd/c8/03bdc85ca190a49f333a4dd324521cc8.jpg',
    })),
  },
  {
    category: '국제',
    data: Array.from({ length: 1 }, (_, i) => ({
      id: i + 31,
      title: `국제 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/ae/36/d7/ae36d717ce897e031cc8e4d03081cb2e.jpg',
    })),
  },
  {
    category: '과학',
    data: Array.from({ length: 7 }, (_, i) => ({
      id: i + 41,
      title: `과학 뉴스 제목 ${i + 1}`,
      thumbnail:
        'https://i.pinimg.com/736x/12/1c/80/121c803ec45f3ff3f4be225bef5a9b2b.jpg',
    })),
  },
];

const SearchPage = () => {
  const [history, setHistory] = useState<Array<NewsData>>([]);
  const [searchResult, setSearchResult] = useState<Array<NewsData>>([]);
  const [isSearched, setIsSearched] = useState<boolean>(false);

  return (
    <Layout>
      <S.Container
        colors={['#5739DC', '#AA9BED', 'transparent']}
        locations={[0, 0.25, 0.5]}
      >
        <SearchBar setIsSearched={setIsSearched} />
        {!isSearched && (
          <S.Header>
            <CustomText font={theme.fonts.bold24} color={theme.colors.white}>
              최근 검색한 뉴스
            </CustomText>
          </S.Header>
        )}
        {isSearched ? (
          <SearchList data={dummySearchList} />
        ) : (
          <VerticalVideoList data={dummyHistory} />
        )}
      </S.Container>
    </Layout>
  );
};

export default SearchPage;
