import { useCallback, useEffect, useState } from 'react';
import { VideoPlayer } from '../../components/VideoPage/VideoPlayer/VideoPlayer';
import * as S from './VideoPage.styles';
import { useRecoilValue } from 'recoil';
import { commentState } from '../../store/videoState';
import { getVideoData } from '../../api/video';
import { VideoData } from '../../store/interfaces';

const VideoPage = ({ route }: any) => {
  const type = route.params?.type || 'recommend';
  const initialData = route.params?.data;
  console.log(initialData);
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [nextNewsId, setNextNewsId] = useState<number | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const isCommentActive = useRecoilValue(commentState);

  const fetchVideoList = async (id: number | null) => {
    if (isFetching) return;
    setIsFetching(true);

    try {
      const res = await getVideoData(type, id);
      if (res && res.news) {
        setVideos((prev) => [...prev, ...res.news]);
        setNextNewsId(res.nextNewsId);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      const mappedData = {
        ...initialData,
        newsId: initialData.articleId,
      };
      setVideos([mappedData]);
    }
    fetchVideoList(route.params?.newsId);
  }, []);

  const renderVideoItem = useCallback(
    ({ item, index }: any) => (
      <VideoPlayer data={item} isPlaying={index === currentIndex} />
    ),
    [currentIndex]
  );

  return (
    <S.Container>
      <S.VideoList
        data={videos}
        keyExtractor={(item: VideoData) => item.newsId?.toString()}
        renderItem={renderVideoItem}
        scrollEnabled={!isCommentActive}
        pagingEnabled={true}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event: any) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          console.log(newIndex);
          setCurrentIndex(newIndex);
          if (newIndex >= videos.length - 2 && nextNewsId) {
            console.log('영상 추가 요청');
            fetchVideoList(nextNewsId);
          }
        }}
        initialNumToRender={2}
        windowSize={3}
        maxToRenderPerBatch={2}
        removeClippedSubviews={true}
      />
    </S.Container>
  );
};

export default VideoPage;
