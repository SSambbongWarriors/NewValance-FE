import { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './BarChart.styles';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { ViewData } from '../ViewChart/ViewChart';

interface ChartProps {
  data: ViewData[][];
}

interface ChartData {
  date: string;
  day: string;
  value: number;
  height: number;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const formatDay = (dateStr: string) => {
  const date = new Date(dateStr);
  const days = ['일', '월', '화', '수', '목', '금', '토']; // 0: 일요일 ~ 6: 토요일
  return days[date.getDay()];
};

const PAGE_WIDTH = 300;

export const BarChart = ({ data }: ChartProps) => {
  const [chartData, setChartData] = useState<ChartData[][]>([]);
  const [weekSums, setWeekSums] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(6);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    const calculateData = () => {
      console.log(data);
      const newChartData = data.map((pageData, index) => {
        const standard = Math.max(
          ...pageData.reverse().map((singleData) => singleData.value)
        );

        return pageData.map((item) => ({
          date: formatDate(item.date),
          day: formatDay(item.date),
          value: item.value,
          height: 130 * (item.value / (standard || 1)),
        }));
      });

      const newWeekSums = data
        .map((pageData) => pageData.reduce((sum, item) => sum + item.value, 0))
        .reverse();

      setChartData(newChartData);
      setWeekSums(newWeekSums);
      setPageIndex(newChartData.length - 1);
    };

    calculateData();
  }, [data]);

  const onScrollChart = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / PAGE_WIDTH);
    const totalPages = chartData.length;

    const newPageIndex = totalPages - 1 - page;
    setPageIndex(newPageIndex);

    // if (weekSums[pageIndex] !== undefined) {
    //   setWeekSums(weekSums[pageIndex]);
    // }
  };

  return (
    <>
      <S.NumberWrapper>
        <CustomText font={theme.fonts.bold32}>
          {weekSums[pageIndex] ?? 0}
        </CustomText>
      </S.NumberWrapper>
      <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
        <FlatList
          data={chartData}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{
            height: 190,
          }}
          renderItem={({ item, index }) => (
            <S.Container style={{ width: containerWidth }}>
              {item.map((item, idx) => (
                <S.ChartData key={idx} onPress={() => setSelected(idx)}>
                  <View style={{ display: selected === idx ? 'flex' : 'none' }}>
                    <CustomText
                      font={theme.fonts.bold14}
                      color={theme.colors.violet}
                    >
                      {item.value}
                    </CustomText>
                  </View>
                  <S.Bar $height={item.height} />
                  <CustomText
                    font={theme.fonts.reg12}
                    color={theme.colors.gray_4}
                  >
                    {item.date}
                  </CustomText>
                  <CustomText
                    font={theme.fonts.reg12}
                    color={theme.colors.gray_4}
                  >
                    {item.day}
                  </CustomText>
                </S.ChartData>
              ))}
            </S.Container>
          )}
          onScroll={onScrollChart}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          inverted
        />
      </View>
    </>
  );
};
