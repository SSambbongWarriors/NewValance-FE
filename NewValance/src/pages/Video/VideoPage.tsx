import { useEffect, useState } from 'react';
import { VideoPlayer } from '../../components/VideoPage/VideoPlayer/VideoPlayer';
import * as S from './VideoPage.styles';

interface VideoData {
  id: number;
  src: string;
}

const dummyData = [
  {
    id: 1,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: 2,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 3,
    src: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4',
  },
  {
    id: 4,
    src: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  },
  {
    id: 5,
    src: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4',
  },
  {
    id: 6,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  {
    id: 7,
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
];

const VideoPage = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setVideos(dummyData);
  }, []);

  return (
    <S.Container>
      {/* <VideoPlayer src={dummyData[0].src} isPlaying={true} /> */}
      <S.VideoList
        data={videos}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item, index }: any) => (
          <VideoPlayer src={item.src} isPlaying={index === currentIndex} />
        )}
        scrollEnabled={true}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event: any) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(newIndex);
        }}
      />
    </S.Container>
  );
};

export default VideoPage;
