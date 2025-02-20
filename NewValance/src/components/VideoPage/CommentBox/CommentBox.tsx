import { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import BottomSheet from '../BottomSheet';
import * as S from './CommentBox.styles';
import { Comment, CommentProps } from '../Comment/Comment';
import { useRecoilState } from 'recoil';
import { commentState } from '../../../store/videoState';

const dummyComments = [
  {
    image:
      'https://i.pinimg.com/736x/14/1b/e7/141be75a96b0791ef049d65dafb91769.jpg',
    name: '닉네임1',
    content: '정말 유익한 영상이네요!',
  },
  {
    image:
      'https://i.pinimg.com/736x/14/1b/e7/141be75a96b0791ef049d65dafb91769.jpg',
    name: '닉네임2',
    content:
      '좋아요 누르고 갑니다. 요즘 같은 시대에 꼭 필요한 기사라고 생각이 드네요.',
  },
  {
    image:
      'https://i.pinimg.com/736x/14/1b/e7/141be75a96b0791ef049d65dafb91769.jpg',
    name: '닉네임3',
    content: '저는 망고스틴이 먹고싶어요',
  },
  {
    image:
      'https://i.pinimg.com/736x/14/1b/e7/141be75a96b0791ef049d65dafb91769.jpg',
    name: '닉네임4',
    content: '저는 돼지김치구이가 먹고싶어요',
  },
  {
    image:
      'https://i.pinimg.com/736x/14/1b/e7/141be75a96b0791ef049d65dafb91769.jpg',
    name: '닉네임5',
    content:
      '긴 댓글 테스트 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  },
  {
    image:
      'https://i.pinimg.com/736x/14/1b/e7/141be75a96b0791ef049d65dafb91769.jpg',
    name: '닉네임5',
    content:
      '긴 댓글 테스트 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
  },
];

export const CommentBox = () => {
  const [isTextInputFocused, setIsTextInputFocused] = useState(false);
  const [commentList, setCommentList] = useState<CommentProps[]>([]);
  const [isActive, setIsActive] = useRecoilState(commentState);

  useEffect(() => {
    setCommentList(dummyComments);
  }, []);

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
        data={commentList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: CommentProps }) => (
          <Comment image={item.image} name={item.name} content={item.content} />
        )}
      />
      <S.InputContainer>
        <S.ProfileImage
          source={require('../../../assets/images/common/default-thumbnail.png')}
        />
        <S.CommentInput
          placeholder={'댓글을 남겨보세요.'}
          placeholderTextColor={theme.colors.gray_3}
          onFocus={() => setIsTextInputFocused(true)}
          onBlur={() => setIsTextInputFocused(false)}
        />
      </S.InputContainer>
    </BottomSheet>
  );
};
