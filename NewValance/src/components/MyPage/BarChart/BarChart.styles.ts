import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  height: 100%;
  background-color: ${theme.colors.white};

  flex-direction: row;
  justify-content: center;
`;

export const ChartData = styled.Pressable`
  flex: 1;
  gap: 4px;
  align-items: center;
  justify-content: flex-end;
`;

export const Bar = styled.View`
  width: 15px;
  height: ${({ $height }) => $height};
  border-radius: 30px;
  background-color: ${theme.colors.violet};
`;

export const NumberWrapper = styled.View`
  margin-left: auto;
`;
