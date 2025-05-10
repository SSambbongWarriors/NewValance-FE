import { useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './Comment.styles';
import { CommentType } from '../CommentBox/CommentBox';
import { Pressable } from 'react-native';
import { deleteComment } from '../../../api/interaction';

export const Comment = ({
  comment,
  onDelete,
}: {
  comment: CommentType;
  onDelete: (commentId: number) => Promise<void>;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleLongPress = () => {
    if (comment.mine) {
      setIsFocused(true);
    }
  };

  const handlePress = () => {
    setIsFocused(false);
  };

  return (
    <S.Container $isFocused={isFocused}>
      <S.PressArea onLongPress={handleLongPress} onPress={handlePress}>
        <S.ProfileImage source={{ uri: comment.profileImgUrl }} />
        <S.TextContainer>
          <CustomText font={theme.fonts.bold14}>{comment.username}</CustomText>
          <CustomText font={theme.fonts.reg14}>{comment.content}</CustomText>
        </S.TextContainer>

        {isFocused && (
          <>
            <S.DeleteButton
              onPress={() => {
                onDelete(comment.commentId);
                setIsFocused(false);
              }}
            >
              <S.DeleteIcon />
            </S.DeleteButton>
          </>
        )}
      </S.PressArea>
    </S.Container>
  );
};
