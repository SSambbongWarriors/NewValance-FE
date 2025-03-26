import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  margin: 24px 0;
  gap: 16px;
`;

export const Box = styled.View`
  width: 100%;
  height: 236px;

  border-radius: 10px;
  background-color: ${theme.colors.white};
  padding: 8px 12px;

  align-items: center;
  justify-content: center;
`;
