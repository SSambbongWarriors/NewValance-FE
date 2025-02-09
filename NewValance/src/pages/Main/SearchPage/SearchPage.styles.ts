import styled from 'styled-components/native';
import { hp } from '../../../styles/ResponsiveSize';
import theme from '../../../styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  padding: 16px;
  padding-top: 8px;
  padding-bottom: ${hp(64)}px;

  background-color: ${theme.colors.white};
`;

export const Header = styled.View`
  padding-bottom: 8px;
`;
