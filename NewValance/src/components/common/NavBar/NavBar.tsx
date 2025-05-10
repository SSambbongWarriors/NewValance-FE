import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import * as S from './NavBar.styles';
import { Image, View } from 'react-native';

import HomeIcon from '../../../assets/images/navBar/home-false.svg';
import HomeIconActive from '../../../assets/images/navBar/home-true.svg';
import TodayIcon from '../../../assets/images/navBar/today-false.svg';
import LikeIcon from '../../../assets/images/navBar/like-false.svg';
import LikeIconActive from '../../../assets/images/navBar/like-true.svg';
import MyIcon from '../../../assets/images/navBar/profile-false.svg';
import MyIconActive from '../../../assets/images/navBar/profile-true.svg';
import PlayIcon from '../../../assets/images/navBar/play.svg';

export const NavBar = () => {
  const navigate = useNavigation<NavigationProp<any>>();
  const route = useRoute();

  return (
    <S.Wrapper>
      <S.Container>
        <S.NavItem onPress={() => navigate.navigate('Home')}>
          {route.name == 'Home' ? <HomeIconActive /> : <HomeIcon />}
        </S.NavItem>
        <S.NavItem
          onPress={() => navigate.navigate('Video', { type: 'today' })}
        >
          <TodayIcon />
        </S.NavItem>
        <S.BLANK />
        <S.NavItem onPress={() => navigate.navigate('Likes')}>
          {route.name == 'Likes' ? <LikeIconActive /> : <LikeIcon />}
        </S.NavItem>
        <S.NavItem onPress={() => navigate.navigate('My')}>
          {route.name == 'My' ? <MyIconActive /> : <MyIcon />}
        </S.NavItem>
      </S.Container>
      <S.PlayButton
        onPress={() => navigate.navigate('Video', { type: 'recommend' })}
      >
        <PlayIcon />
      </S.PlayButton>
    </S.Wrapper>
  );
};
