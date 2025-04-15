import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const CategoryList = styled.FlatList``;

export const Category = styled.Pressable`
  padding: 10px;
  border-bottom-width: ${({ $isActive }) => ($isActive ? '2px' : '0px')};
  border-color: ${theme.colors.violet};
`;

export const TagList = styled.View`
  width: 100%;
  margin-top: 24px;
  flex-direction: row;
  gap: 4px;
`;

export const Tag = styled.Pressable`
  padding: 4px 12px;

  border-radius: 30px;
  border-width: 2px;
  border-color: ${({ $isActive, $isFull }) =>
    !$isActive && $isFull ? theme.colors.gray_3 : theme.colors.violet};

  margin-bottom: 8px;

  background-color: ${({ $isActive }) =>
    $isActive ? theme.colors.violet : theme.colors.white};
`;
