import { useVideoPlayer, VideoView } from 'expo-video';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './VideoPlayer.styles';

import { CustomText } from '../../common/CustomText';
import theme from '../../../styles/theme';
import { AnimatedIcon } from '../AnimatedIcon';
import { CommentBox } from '../CommentBox/CommentBox';

import BottomSheet from '../BottomSheet';
import { TextInput } from 'react-native-gesture-handler';
import { Button } from '../../common/Button/Button';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

export const VideoPlayer = ({ src, isPlaying }: VideoPlayerProps) => {
  const [isPaused, setIsPaused] = useState(!isPlaying);
  const [isCommentActive, setIsCommentActive] = useState(false);

  const player = useVideoPlayer(src, (player) => {
    player.loop = true;
  });

  useEffect(() => {
    if (!isPlaying) {
      player.pause();
    } else {
      player.replay();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPaused) {
      player.pause();
    } else {
      player.play();
    }
  }, [isPaused]);

  const handleVideoPress = () => {
    setIsPaused((prev) => !prev);
  };

  const handleCommentActive = () => {
    setIsCommentActive((prev) => !prev);
  };

  return (
    <S.Container>
      <VideoView
        player={player}
        contentFit="contain"
        nativeControls={false}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      />
      <S.PressableArea onPress={handleVideoPress} />
      <AnimatedIcon isPaused={isPaused} />
      <S.LeftArrow onPress={() => console.log('press')} />
      <S.Menu />
      <S.IconContainer>
        <S.Heart />
        <S.Chat onPress={handleCommentActive} />
        <S.Share />
      </S.IconContainer>
      <S.InfoContainer>
        <S.Title>
          <CustomText
            font={theme.fonts.bold18}
            color={theme.colors.white}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            설 연휴 마지막 날 '한파'...아침 최저 -10도 안팎 강추위
          </CustomText>
        </S.Title>
        <S.LinkButton onPress={() => console.log('press')}>
          <CustomText font={theme.fonts.bold14} color={theme.colors.gray_4}>
            기사 원문
          </CustomText>
          <S.Arrow />
        </S.LinkButton>
      </S.InfoContainer>
      <CommentBox isActive={isCommentActive} setIsActive={setIsCommentActive} />
    </S.Container>
  );
};
