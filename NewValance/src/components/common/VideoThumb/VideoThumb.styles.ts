import styled from 'styled-components/native';
import { hp, wp } from '../../../styles/ResponsiveSize';

export const ContainerS = styled.View`
  width: ${wp(106)}px;
  gap: ${hp(4)}px;
`;

export const ThumbnailS = styled.Image`
  width: ${wp(106)}px;
  height: ${hp(152)}px;
  border-radius: ${wp(8)}px;
`;

export const ContainerL = styled.View`
  width: ${wp(160)}px;
  gap: ${hp(8)}px;
`;

export const ThumbnailL = styled.Image`
  width: ${wp(164)}px;
  height: ${hp(235)}px;
  border-radius: ${wp(10)}px;
`;

export const ContainerR = styled.View`
  flex: 1;
  gap: ${hp(8)}px;
  flex-direction: row;
`;

export const ThumbnailR = styled.Image`
  width: ${wp(80)}px;
  height: ${hp(120)}px;
  border-radius: ${wp(8)}px;
`;

export const TextWrapper = styled.View`
  flex-shrink: 1;
`;
