import * as S from './Header.styles';
import LogoIcon from '../../../assets/images/common/logo.svg';
import SearchIcon from '../../../assets/images/common/search.svg';
import MenuIcon from '../../../assets/images/common/menu.svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export const Header = () => {
  const navigate = useNavigation<StackNavigationProp<any>>();

  return (
    <S.Container>
      <LogoIcon onPress={() => navigate.navigate('Home')} />
      <S.IconContainer>
        <SearchIcon onPress={() => navigate.navigate('Search')} />
        <MenuIcon onPress={() => navigate.navigate('Category')} />
      </S.IconContainer>
    </S.Container>
  );
};
