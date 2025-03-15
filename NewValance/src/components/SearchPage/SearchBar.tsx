import * as S from './SearchBar.styles';
import SearchIcon from '../../assets/images/search-icon.svg';
import theme from '../../styles/theme';
import { useState } from 'react';
import { Text } from 'react-native';

interface SearchBarProps {
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchBar = ({ setIsSearched }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>('');

  const onPressSearch = () => {
    setIsSearched(true);
  };

  return (
    <S.Container>
      <S.TextInput
        placeholder="관심있는 키워드를 입력해보세요"
        placeholderTextColor={theme.colors.gray_3}
        numberOfLines={1}
        onChangeText={(text: string) => setSearchText(text)}
        value={searchText}
      />
      <SearchIcon onPress={onPressSearch} />
    </S.Container>
  );
};
