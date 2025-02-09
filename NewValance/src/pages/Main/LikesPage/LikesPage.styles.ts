import styled from 'styled-components/native';
import { hp } from '../../../styles/ResponsiveSize';
import theme from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  padding-top: 8px;
  padding-bottom: ${hp(64)}px;

  background-color: ${theme.colors.white};
`;

export const Header = styled.View`
  padding-bottom: 8px;
`;

export const VideoContainer = styled.FlatList``;
