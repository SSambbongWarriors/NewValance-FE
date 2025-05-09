import { useEffect, useState } from 'react';
import { userViewType } from '../../../pages/My/MyPage/MyPage';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import { BarChart } from '../BarChart/BarChart';
import * as S from './ViewChart.styles';
import { getWeekViewData } from '../../../api/profile';

// const dummyData = [
//   [
//     { date: '2025-01-26', value: 15 },
//     { date: '2025-01-27', value: 4 },
//     { date: '2025-01-28', value: 8 },
//     { date: '2025-01-29', value: 10 },
//     { date: '2025-01-30', value: 3 },
//     { date: '2025-01-31', value: 5 },
//     { date: '2025-02-01', value: 0 },
//   ],
//   [
//     { date: '2025-01-26', value: 10 },
//     { date: '2025-01-27', value: 4 },
//     { date: '2025-01-28', value: 8 },
//     { date: '2025-01-29', value: 10 },
//     { date: '2025-01-30', value: 3 },
//     { date: '2025-01-31', value: 5 },
//     { date: '2025-02-01', value: 0 },
//   ],
//   [
//     { date: '2025-01-26', value: 5 },
//     { date: '2025-01-27', value: 4 },
//     { date: '2025-01-28', value: 8 },
//     { date: '2025-01-29', value: 10 },
//     { date: '2025-01-30', value: 3 },
//     { date: '2025-01-31', value: 5 },
//     { date: '2025-02-01', value: 0 },
//   ],
// ];

export interface ViewData {
  date: string;
  value: number;
}

export const ViewChart = ({ userView }: { userView: userViewType }) => {
  const [weekView, setWeekView] = useState<Array<Array<ViewData>>>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await getWeekViewData();
      setWeekView(res);
    };

    getData();
  }, []);

  return (
    <S.Container>
      <S.SmallContainer>
        <S.Box style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)' }}>
          <CustomText font={theme.fonts.bold18}>TODAY</CustomText>
          <S.NumberWrapper>
            <CustomText font={theme.fonts.bold32}>
              {userView.todayViews}
            </CustomText>
          </S.NumberWrapper>
        </S.Box>
        <S.Box style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)' }}>
          <CustomText font={theme.fonts.bold18}>TOTAL</CustomText>
          <S.NumberWrapper>
            <CustomText font={theme.fonts.bold32}>
              {userView.totalViews}
            </CustomText>
          </S.NumberWrapper>
        </S.Box>
      </S.SmallContainer>
      <S.Box style={{ boxShadow: '0px 4px 15px 0px rgba(0, 0, 0, 0.10)' }}>
        <CustomText font={theme.fonts.bold18}>WEEK</CustomText>
        <BarChart data={weekView} />
      </S.Box>
    </S.Container>
  );
};
