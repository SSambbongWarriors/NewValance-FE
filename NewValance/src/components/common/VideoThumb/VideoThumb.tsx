import theme from '../../../styles/theme';
import { CustomText } from '../CustomText';
import * as S from './VideoThumb.styles';
import defaultThumbnail from '../../../assets/images/common/default-thumbnail.png';

interface VideoThumbProps {
  title: string;
} //추후 이미지 링크, 영상 id 등 추가

export const VideoThumbS = ({ title }: VideoThumbProps) => {
  return (
    <S.ContainerS>
      <S.ThumbnailS source={defaultThumbnail} resizeMode="cover" />
      <CustomText
        font={theme.fonts.reg12}
        color={theme.colors.black_1}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </CustomText>
    </S.ContainerS>
  );
};

export const VideoThumbL = ({ title }: VideoThumbProps) => {
  return (
    <S.ContainerL>
      <S.ThumbnailL source={defaultThumbnail} resizeMode="cover" />
      <CustomText
        font={theme.fonts.reg18}
        color={theme.colors.black_1}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </CustomText>
    </S.ContainerL>
  );
};
