import styled from 'styled-components/native';
import { hp, wp } from '../../../styles/ResponsiveSize';
import theme from '../../../styles/theme';

export const Container = styled.View`
  width: 100%;
  background-color: ${theme.colors.white.color};
  padding: ${hp(11)}px ${wp(16)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-width: ${wp(0.3)}px;
  border-bottom-color: ${theme.colors.gray_3.color};
`;

export const IconContainer = styled.View`
  flex-direction: row;
  gap: ${wp(8)}px;
`;
