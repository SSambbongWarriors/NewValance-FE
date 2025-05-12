import * as S from './LikesPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import Layout from '../../Layout';
import { VerticalThumbnailList } from '../../../components/common/VideoList/VerticalThumbnailList';
import { useEffect, useState } from 'react';
import { getLikedList } from '../../../api/interaction';
import { NewsData } from '../../../store/interfaces';

const PAGE_SIZE = 6;

const LikesPage = () => {
  const [data, setData] = useState<Array<NewsData>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(0);

  const getVideoData = async () => {
    try {
      if (!isLast) {
        const res = await getLikedList(pageNum, PAGE_SIZE);
        const newsList = res._embedded?.newsSimpleDtoList;
        if (Array.isArray(newsList) && newsList.length > 0) {
          setData((prev) => [...prev, ...newsList]);
          setPageNum((prev) => prev + 1);
          if (pageNum + 1 >= res.totalPages) {
            setIsLast(true);
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideoData();
  }, []);

  return (
    <Layout>
      <S.Container>
        <S.Header>
          <CustomText font={theme.fonts.bold24}>내가 좋아요한 뉴스</CustomText>
        </S.Header>
        <VerticalThumbnailList
          type={'liked'}
          data={data}
          handleData={getVideoData}
        />
      </S.Container>
    </Layout>
  );
};

export default LikesPage;
