import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.gray_2};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

  border-radius: 15px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
