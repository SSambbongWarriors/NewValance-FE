import styled from 'styled-components/native';
import { wp, hp } from '../../../styles/ResponsiveSize';
import theme from '../../../styles/theme';

export const Wrapper = styled.View`
  width: 100%;
  height: ${hp(82)}px;
  position: relative;
`;

export const Container = styled.View`
  width: ${wp(375)}px;
  height: ${hp(64)}px;
  background-color: ${theme.colors.white};

  margin-top: auto;
  padding: ${hp(30)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: ${wp(25)}px ${wp(25)}px 0 0;
`;

export const NavItem = styled.TouchableOpacity``;

export const BLANK = styled.View`
  width: ${wp(36)}px;
`;

export const PlayButton = styled.Pressable`
  width: ${wp(58)}px;
  height: ${hp(58)}px;
  position: absolute;
  align-self: center;
`;
