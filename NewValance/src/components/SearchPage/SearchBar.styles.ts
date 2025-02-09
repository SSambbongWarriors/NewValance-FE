import styled from 'styled-components/native';
import theme from '../../styles/theme';
import { wp } from '../../styles/ResponsiveSize';

export const Container = styled.View`
  width: 100%;
  padding-top: 4;
  padding-bottom: 4;
  padding-left: 12;
  padding-right: 8;

  margin-top: 8;
  margin-bottom: 8;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};
  border-radius: ${wp(50)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  ${theme.fonts.reg18}
  color: ${theme.colors.black_1};
`;
