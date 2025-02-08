import styled from 'styled-components/native';
import { hp, wp } from '../../../styles/ResponsiveSize';

export const ContainerS = styled.TouchableOpacity`
  width: ${wp(106)}px;
  gap: ${hp(4)}px;
`;

export const ThumbnailS = styled.Image`
  width: 100%;
  height: ${hp(152)}px;
  border-radius: ${wp(8)}px;
`;

export const ContainerL = styled.TouchableOpacity`
  width: ${wp(164)}px;
  gap: ${hp(8)}px;
`;

export const ThumbnailL = styled.Image`
  width: 100%;
  height: ${hp(235)}px;
  border-radius: ${wp(8)}px;
`;
