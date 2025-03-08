import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.violet_2};

  padding: 16px;
`;

export const ContentContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 12px;

  margin: auto 0;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 120px;
`;

export const ButtonWrapper = styled.View`
  margin-top: auto;
`;
