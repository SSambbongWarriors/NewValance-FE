import styled from 'styled-components/native';
import theme from '../../../styles/theme';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  width: 80%;
  padding: 20px 28px;
  gap: 20px;

  align-items: center;
  justify-content: center;

  position: absolute;
  align-self: center;
  bottom: ${height / 2.3}px;

  background-color: ${theme.colors.white};
  border-radius: 15px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 36px;
  gap: 12px;

  flex-direction: row;
`;

export const Button = styled.Pressable`
  flex: 1;
  border-radius: 30px;
  background-color: ${({ $color }) =>
    $color ? theme.colors.violet : theme.colors.gray_3};

  align-items: center;
  justify-content: center;
`;
