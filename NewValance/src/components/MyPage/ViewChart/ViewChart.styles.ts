import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  width: 100%;
`;

export const SmallContainer = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 16px;
  margin: 16px 0;
`;

export const Box = styled.View`
  flex: 1;

  border-radius: 10px;
  background-color: ${theme.colors.white};
  padding: 8px 12px;
`;

export const NumberWrapper = styled.View`
  margin-left: auto;
`;
