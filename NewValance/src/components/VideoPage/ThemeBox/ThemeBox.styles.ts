import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const ThemeListContainer = styled.View`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ThemeContainer = styled.Pressable`
  width: 100%;
  padding: 8px;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-radius: 15px;
  background-color: ${({ $isActive }) =>
    $isActive ? theme.colors.gray_2 : theme.colors.white};
`;

export const TextContainer = styled.View`
  justify-content: center;
`;
