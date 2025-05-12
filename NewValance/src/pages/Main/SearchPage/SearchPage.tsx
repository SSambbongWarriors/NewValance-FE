import * as S from './SearchPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';

import Layout from '../../Layout';
import { useEffect, useState } from 'react';
import { NewsData } from '../../../store/interfaces';
import { VerticalVideoList } from '../../../components/common/VideoList/VerticalVideoList';
import { SearchList } from '../../../components/SearchPage/SearchList';
import { SearchBar } from '../../../components/SearchPage/SearchBar';
import { getSearchResult } from '../../../api/search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VerticalThumbnailList } from '../../../components/common/VideoList/VerticalThumbnailList';

export interface SearchResultType {
  [category: string]: NewsData[];
}

const SearchPage = () => {
  const [history, setHistory] = useState<Array<NewsData>>([]);
  const [searchResult, setSearchResult] = useState<SearchResultType>({});
  const [isSearched, setIsSearched] = useState<boolean>(false);

  useEffect(() => {
    const getSearchHistory = async () => {
      const raw = await AsyncStorage.getItem('MySearchList');
      if (raw) {
        setHistory(JSON.parse(raw));
        console.log(history);
      }
    };

    getSearchHistory();
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const res = await getSearchResult(query);
      console.log(res);
      setSearchResult(res.articlesByCategory);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <S.Container
        colors={['#5739DC', '#AA9BED', 'transparent']}
        locations={[0, 0.25, 0.5]}
      >
        <SearchBar setIsSearched={setIsSearched} handleSearch={handleSearch} />
        {!isSearched && (
          <S.Header>
            <CustomText font={theme.fonts.bold24} color={theme.colors.white}>
              최근 검색한 뉴스
            </CustomText>
          </S.Header>
        )}
        {isSearched ? (
          <SearchList data={searchResult} />
        ) : (
          <VerticalThumbnailList type={'search'} data={history} />
        )}
      </S.Container>
    </Layout>
  );
};

export default SearchPage;
