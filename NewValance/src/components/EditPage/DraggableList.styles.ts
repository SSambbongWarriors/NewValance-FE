import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const ItemContainer = styled.Pressable`
  width: 100%;
  background-color: ${theme.colors.gray_2};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
