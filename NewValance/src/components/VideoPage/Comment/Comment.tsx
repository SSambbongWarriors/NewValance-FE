import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './Comment.styles';

export interface CommentProps {
  image: string;
  name: string;
  content: string;
}

export const Comment = ({ image, name, content }: CommentProps) => {
  return (
    <S.Container>
      <S.PressArea>
        <S.ProfileImage source={{ uri: image }} />
        <S.TextContainer>
          <CustomText font={theme.fonts.bold14}>{name}</CustomText>
          <CustomText font={theme.fonts.reg14}>{content}</CustomText>
        </S.TextContainer>
      </S.PressArea>
    </S.Container>
  );
};
