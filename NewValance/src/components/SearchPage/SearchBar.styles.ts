import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { wp } from '../../styles/ResponsiveSize';

export const Container = styled.View`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 8px;

  margin-top: 8px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};
  border-radius: ${wp(50)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  ${theme.fonts.reg14}
  color: ${theme.colors.black_1};
`;
