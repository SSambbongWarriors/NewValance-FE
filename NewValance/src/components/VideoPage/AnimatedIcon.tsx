import PlayIcon from '../../assets/images/VideoPage/play.svg';
import PauseIcon from '../../assets/images/VideoPage/pause.svg';
import { Animated } from 'react-native';
import { useEffect, useState } from 'react';

export const AnimatedIcon = ({ isPaused }: { isPaused: boolean }) => {
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    setShowIcon(true);
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.delay(400),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => setShowIcon(false));
  }, [isPaused]);

  return (
    <>
      {showIcon && (
        <Animated.View
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [
              { translateX: -40 },
              { translateY: -40 },
              { scale: fadeAnim },
            ],
            opacity: fadeAnim,
          }}
        >
          {isPaused ? <PauseIcon /> : <PlayIcon />}
        </Animated.View>
      )}
    </>
  );
};
