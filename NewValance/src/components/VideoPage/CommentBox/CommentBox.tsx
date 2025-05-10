import { useEffect, useRef, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import BottomSheet from '../BottomSheet';
import * as S from './CommentBox.styles';
import { Comment } from '../Comment/Comment';
import { useRecoilState } from 'recoil';
import { commentState } from '../../../store/videoState';
import { FlatList } from 'react-native';
import {
  deleteComment,
  getCommentList,
  postComment,
} from '../../../api/interaction';
import { useUser } from '../../../hooks/useUser';

export interface CommentType {
  commentId: number;
  username: string;
  profileImgUrl: string;
  content: string;
  mine: boolean;
}

export const CommentBox = ({ newsId }: { newsId: number }) => {
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const [commentList, setCommentList] = useState<CommentType[]>([]);
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(0);
  const [isActive, setIsActive] = useRecoilState(commentState);
  const [myComment, setMyComment] = useState<string>('');
  const commentListRef = useRef<FlatList<CommentType>>();

  const { user } = useUser();

  useEffect(() => {
    setPageNum(0);
    setIsLastPage(false);
    getCommentData();
  }, [isActive]);

  const getCommentData = async (nextPage?: number) => {
    try {
      const res = await getCommentList(newsId, nextPage);
      if (nextPage) {
        setCommentList((prev) => [...prev, ...res._embedded.commentDtoList]);
      } else {
        setCommentList(res._embedded.commentDtoList);
      }
      setPageNum(res.page.number);
      if (res.page.number + 1 >= res.page.totalPages) {
        setIsLastPage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeComment = (content: string) => {
    setMyComment(content);
  };

  const addComment = async () => {
    console.log(myComment);
    if (myComment.trim() === '') return;

    try {
      const newComment = await postComment(newsId, myComment);
      console.log(newComment.commentId);
      setCommentList((prev) => [newComment, ...prev]);
      setMyComment('');
      commentListRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteComment = async (commentId: number) => {
    try {
      const res = await deleteComment(newsId, commentId);
      setCommentList((prev) =>
        prev.filter((comment) => comment.commentId !== commentId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BottomSheet
      sheetType="comment"
      isActive={isActive}
      setIsActive={setIsActive}
      isTextInputFocused={isTextInputFocused}
      setIsTextInputFocused={setIsTextInputFocused}
    >
      <CustomText font={theme.fonts.reg18}>댓글</CustomText>
      <S.CommentList
        ref={commentListRef}
        data={commentList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: CommentType }) => (
          <Comment comment={item} onDelete={onDeleteComment} />
        )}
        onEndReached={() => {
          console.log(pageNum);
          if (!isLastPage) {
            getCommentData(pageNum + 1);
          }
        }}
      />
      <S.InputContainer>
        <S.ProfileImage source={{ uri: user?.profileImgUrl }} />
        <S.CommentInput
          type="text"
          name="content"
          value={myComment}
          onChangeText={onChangeComment}
          onSubmitEditing={addComment}
          placeholder={'댓글을 남겨보세요.'}
          placeholderTextColor={theme.colors.gray_3}
          onFocus={() => setIsTextInputFocused(true)}
          onBlur={() => setIsTextInputFocused(false)}
          returnKeyType="done"
        />
      </S.InputContainer>
    </BottomSheet>
  );
};
