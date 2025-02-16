import { useState } from 'react';
import { VideoPlayer } from '../../components/VideoPage/VideoPlayer';
import * as S from './VideoPage.styles';
import { View } from 'react-native';
import { Text } from 'react-native-svg';

interface VideoData {
  id: number;
  src: string;
}

const dummyData = [
  {
    id: 0,
    src: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
  },
  {
    id: 1,
    src: 'https://sample-videos.com/video123/mp4/720/elephants-dream_720p_10mb.mp4',
  },
  {
    id: 2,
    src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
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
    src: 'https://mazwai.com/videvo_files/video/free/2015-10/small_waterfall.mp4',
  },
  {
    id: 6,
    src: 'https://mazwai.com/videvo_files/video/free/2016-02/large_preview_0556_cloud_timelapse.mp4',
  },
  {
    id: 7,
    src: 'https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4',
  },
  { id: 8, src: 'https://dl8.webmfiles.org/big-buck-bunny_trailer.mp4' },
  {
    id: 9,
    src: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
  },
];

const VideoPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shouldRenderVideo = (index: number) => {
    // 현재 인덱스 기준으로 ±2 인덱스만 비디오를 렌더링
    return Math.abs(currentIndex - index) <= 2;
  };

  return (
    <S.Container>
      <S.VideoList
        data={dummyData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item, index }: any) =>
          // 현재 보이는 페이지와 인접한 페이지만 비디오를 렌더링
          shouldRenderVideo(index) ? (
            <VideoPlayer src={item.src} isPlaying={currentIndex === index} />
          ) : (
            <Text>Video Placeholder</Text>
          )
        }
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={3}
        windowSize={5}
      />
    </S.Container>
  );
};

export default VideoPage;
