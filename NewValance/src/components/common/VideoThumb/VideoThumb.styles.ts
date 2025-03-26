import styled from 'styled-components/native';
import { hp, wp } from '../../../styles/ResponsiveSize';

export const ContainerS = styled.TouchableOpacity`
  width: ${wp(106)}px;
  gap: ${hp(4)}px;
`;

export const ThumbnailS = styled.Image`
  width: ${wp(106)}px;
  height: ${hp(152)}px;
  border-radius: ${wp(8)}px;
`;

export const ContainerL = styled.TouchableOpacity`
  flex: 1;
  gap: ${hp(8)}px;
  flex-direction: row;
`;

export const ThumbnailL = styled.Image`
  width: ${wp(80)}px;
  height: ${hp(120)}px;
  border-radius: ${wp(8)}px;
`;

export const TextWrapper = styled.View`
  flex-shrink: 1;
`;
