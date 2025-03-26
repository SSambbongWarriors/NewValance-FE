import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
`;

export const TextWrapper = styled.View`
  margin-top: 157;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const KakaoButton = styled.Image`
  width: 300px;
  object-fit: contain;
`;

export const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const Line = styled.View`
  width: 70px;
  height: 0.7px;
  background-color: ${theme.colors.white};
`;

export const IconContainer = styled.View`
  flex-direction: row;
  gap: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const CircleButton = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
