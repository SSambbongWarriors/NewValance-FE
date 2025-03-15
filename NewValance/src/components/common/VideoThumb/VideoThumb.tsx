import theme from '../../../styles/theme';
import { CustomText } from '../CustomText';
import * as S from './VideoThumb.styles';

interface VideoThumbProps {
  title: string;
  thumbnail: string;
} //추후 이미지 링크, 영상 id 등 추가

export const VideoThumbS = ({ title, thumbnail }: VideoThumbProps) => {
  return (
    <S.ContainerS>
      <S.ThumbnailS source={{ uri: thumbnail }} resizeMode="cover" />
      <CustomText
        font={theme.fonts.reg14}
        color={theme.colors.black_1}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </CustomText>
    </S.ContainerS>
  );
};

export const VideoThumbL = ({ title, thumbnail }: VideoThumbProps) => {
  return (
    <S.ContainerL>
      <S.ThumbnailL source={{ uri: thumbnail }} resizeMode="cover" />
      <S.TextWrapper>
        <CustomText
          font={theme.fonts.bold18}
          color={theme.colors.black_1}
          numberOfLines={4}
          ellipsizeMode="tail"
        >
          {title}
        </CustomText>
      </S.TextWrapper>
    </S.ContainerL>
  );
};
