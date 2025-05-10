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
import { VideoData } from '../../../store/interfaces';
import { postVideoComplete } from '../../../api/video';
import { useEvent } from 'expo';
import { postLike } from '../../../api/interaction';

interface VideoPlayerProps {
  data: VideoData;
  isPlaying: boolean;
}

export const VideoPlayer = ({ data, isPlaying }: VideoPlayerProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(data.liked);
  const [isCommentActive, setIsCommentActive] = useRecoilState(commentState);
  const [isThemeActive, setIsThemeActive] = useRecoilState(themeState);
  const [watched, setWatched] = useState<boolean>(false);

  const navigate = useNavigation<StackNavigationProp<any>>();

  const player = useVideoPlayer(data.videoVersions[1].videoUrl, (player) => {
    player.loop = true;
    player.timeUpdateEventInterval = 1;
  });

  useEffect(() => {
    const listener = player.addListener('timeUpdate', (event) => {
      const currentTime = event.currentTime;
      const duration = player.duration;

      if (duration > 0 && currentTime / duration >= 0.6 && !watched) {
        setWatched(true);
        postVideoComplete(data.newsId);
      }
    });

    return () => {
      listener?.remove();
    };
  }, []);

  useEffect(() => {
    const shouldPlay = isPlaying && !isPaused;

    if (shouldPlay) {
      player.play();
    } else {
      player.pause();
    }
  }, [isPlaying, isPaused]);

  // useEffect(() => {
  //   if (isPaused) {
  //     player.pause();
  //   } else {
  //     player.play();
  //   }
  // }, [isPaused]);

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
          navigate.goBack();
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

  const handleLiked = async () => {
    try {
      const res = await postLike(data.newsId);
      setIsLiked(res.liked);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewsLink = async () => {
    const url = data.originalUrl;
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
            {data.title}
          </CustomText>
        </S.Title>
        <S.LinkButton onPress={handleNewsLink}>
          <CustomText font={theme.fonts.bold14} color={theme.colors.gray_4}>
            기사 원문
          </CustomText>
          <S.Arrow />
        </S.LinkButton>
      </S.InfoContainer>
      <CommentBox newsId={data.newsId} />
      <ThemeBox />
    </S.Container>
  );
};
