import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import MenuIcon from '../../../assets/images/VideoPage/menu.svg';
import LeftArrowIcon from '../../../assets/images/VideoPage/arrow_key_left.svg';
import HeartIcon from '../../../assets/images/VideoPage/favorite.svg';
import HeartFilledIcon from '../../../assets/images/VideoPage/favorite-fill.svg';
import ChatIcon from '../../../assets/images/VideoPage/chat.svg';
import ShareIcon from '../../../assets/images/VideoPage/share.svg';
import LinkIcon from '../../../assets/images/VideoPage/arrow_up_right.svg';
import theme from '../../../styles/theme';
import WebView from 'react-native-webview';

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const PressableArea = styled.Pressable`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  position: absolute;
`;

export const LeftArrow = styled(LeftArrowIcon)`
  position: absolute;
  top: 16px;
  align-self: flex-start;
`;

export const Menu = styled(MenuIcon)`
  position: absolute;
  top: 16px;
  right: 16px;
  align-self: flex-end;
`;

export const IconContainer = styled.View`
  gap: 16px;

  position: absolute;
  align-self: flex-end;
  right: 16px;
  bottom: 20px;
`;

export const Heart = styled(HeartIcon)``;

export const HeartFilled = styled(HeartFilledIcon)``;

export const Chat = styled(ChatIcon)``;

export const Share = styled(ShareIcon)``;

export const InfoContainer = styled.View`
  gap: 8px;
  position: absolute;
  left: 16px;
  bottom: 20px;

  width: 75%;
`;

export const Title = styled.View`
  max-width: 100%;
`;

export const LinkButton = styled.Pressable`
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;

  flex-direction: row;
  align-items: center;
  justify-items: center;
  gap: 6px;

  border-radius: 5px;
  background-color: ${theme.colors.gray_1};
  opacity: 0.7;

  width: 88px;
`;

export const Arrow = styled(LinkIcon)``;

export const WebViewContainer = styled(WebView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  position: absolute;
`;
