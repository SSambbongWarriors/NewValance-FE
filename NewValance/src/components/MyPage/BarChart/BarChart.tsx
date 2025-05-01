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

interface ChartProps {
  data: PureData[][];
}

interface PureData {
  date: string;
  value: number;
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
  const [pureData, setPureData] = useState<PureData[][]>(data);
  const [chartData, setChartData] = useState<ChartData[][]>([]);
  const [weekSum, setWeekSum] = useState<number>(0);
  const [selected, setSelected] = useState<number | null>(6);

  useEffect(() => {
    const calculateData = () => {
      const newChartData = pureData.map((pageData, index) => {
        const standard = Math.max(
          ...pageData.map((singleData) => singleData.value)
        );

        return pageData.map((item) => ({
          date: formatDate(item.date),
          day: formatDay(item.date),
          value: item.value,
          height: 130 * (item.value / (standard || 1)),
        }));
      });

      setChartData(newChartData);

      const firstWeekSum = chartData[0].reduce(
        (sum, item) => sum + item.value,
        0
      );
      setWeekSum(firstWeekSum);
    };

    calculateData();
  }, [pureData]);

  const getWeekSum = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / PAGE_WIDTH);
    const totalPages = chartData.length;

    const pageIndex = totalPages - 1 - page;
    if (chartData[pageIndex]) {
      const newWeekSum = chartData[pageIndex].reduce(
        (sum, item) => sum + item.value,
        0
      );
      setWeekSum(newWeekSum);
    }
  };

  return (
    <>
      <S.NumberWrapper>
        <CustomText font={theme.fonts.bold32}>{weekSum}</CustomText>
      </S.NumberWrapper>
      <FlatList
        data={chartData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          minWidth: '100%',
          height: 190,
        }}
        renderItem={({ item, index }) => (
          <S.Container>
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
        onScroll={getWeekSum}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted
      />
    </>
  );
};
