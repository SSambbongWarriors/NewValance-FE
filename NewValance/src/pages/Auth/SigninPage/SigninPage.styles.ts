import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View<{ width: number; height: number }>`
  flex: 1;
  padding: 16px;

  background-color: ${theme.colors.violet_2};
`;

export const SkipButton = styled.Pressable`
  margin-left: auto;
`;

export const TextWrapper = styled.View`
  margin-top: 80px;
`;

export const InputWrapper = styled.View`
  margin-top: 100px;
`;

export const ButtonWrapper = styled.View`
  margin-top: auto;
`;
