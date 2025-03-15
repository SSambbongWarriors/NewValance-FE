import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Card = styled.Pressable`
  width: 300px;
  height: 400px;
  overflow: hidden;

  margin-top: 12px;
  margin-bottom: 16px;
  margin-right: 12px;
  border-radius: 15px;
`;

export const Thumbnail = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;

  align-items: flex-start;
  justify-content: flex-end;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  justify-content: flex-end;
`;

export const Title = styled.View`
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 8px;
`;
