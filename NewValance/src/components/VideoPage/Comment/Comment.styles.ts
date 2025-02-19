import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const PressArea = styled.Pressable`
  flex-direction: row;
  width: 100%;
  gap: 12px;

  flex-wrap: 'wrap';
`;

export const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  flex-shrink: 0;
`;

export const TextContainer = styled.View`
  gap: 4px;
  justify-items: center;
  width: ${Dimensions.get('window').width - 92}px;
`;
