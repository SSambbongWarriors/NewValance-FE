import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import * as S from './VideoPlayer.styles';

import { CustomText } from '../../common/CustomText';
import theme from '../../../styles/theme';
import { AnimatedIcon } from '../AnimatedIcon';
import { CommentBox } from '../CommentBox/CommentBox';

import { useRecoilState } from 'recoil';
import { commentState, themeState } from '../../../store/videoState';
import { ThemeBox } from '../ThemeBox/ThemeBox';
import { useNavigation } from '@react-navigation/native';
import { Alert, BackHandler, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

export const VideoPlayer = ({ src, isPlaying }: VideoPlayerProps) => {
  const [isPaused, setIsPaused] = useState(!isPlaying);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentActive, setIsCommentActive] = useRecoilState(commentState);
  const [isThemeActive, setIsThemeActive] = useRecoilState(themeState);

  const navigate = useNavigation<StackNavigationProp<any>>();

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

  useEffect(() => {
    const backAction = () => {
      if (navigate.isFocused()) {
        if (isCommentActive) {
          setIsCommentActive(false);
          return true;
        } else if (isThemeActive) {
          setIsThemeActive(false);
          return true;
        } else {
          navigate.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
          return true;
        }
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [isCommentActive, isThemeActive]);

  const handleVideoPress = () => {
    setIsPaused((prev) => !prev);
  };

  const handleCommentActive = () => {
    setIsCommentActive((prev) => !prev);
  };

  const handleThemeActive = () => {
    setIsThemeActive((prev) => !prev);
  };

  const handleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  const handleNewsLink = async () => {
    const url = 'https://www.ajunews.com/view/20241024212343156';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log('URL을 열 수 없습니다.');
    }
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
      <S.LeftArrow
        onPress={() =>
          navigate.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          })
        }
      />
      <S.Menu onPress={handleThemeActive} />
      <S.IconContainer>
        {isLiked ? (
          <S.HeartFilled onPress={handleLiked} />
        ) : (
          <S.Heart onPress={handleLiked} />
        )}
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
        <S.LinkButton onPress={handleNewsLink}>
          <CustomText font={theme.fonts.bold14} color={theme.colors.gray_4}>
            기사 원문
          </CustomText>
          <S.Arrow />
        </S.LinkButton>
      </S.InfoContainer>
      <CommentBox />
      <ThemeBox />
    </S.Container>
  );
};
