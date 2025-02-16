import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

export const VideoPlayer = ({ src, isPlaying }: VideoPlayerProps) => {
  const [isPaused, setIsPaused] = useState(isPlaying);

  const player = useVideoPlayer(src, (player) => {
    player.loop = true;
    isPaused ? player.pause() : player.play();
  });

  const handleVideoPress = () => {
    if (isPaused) {
      player.pause();
    } else {
      player.play();
    }
    setIsPaused(!isPaused);
  };

  return (
    <VideoView
      player={player}
      onTouchEnd={handleVideoPress}
      allowsPictureInPicture
      contentFit="contain"
      nativeControls={false}
      style={{ flex: 1 }}
    />
  );
};
