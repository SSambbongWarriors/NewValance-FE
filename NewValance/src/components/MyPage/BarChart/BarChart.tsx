import { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './BarChart.styles';
import { View } from 'react-native';

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

export const BarChart = ({ data }: { data: PureData[] }) => {
  const [pureData, setPureData] = useState<PureData[]>(data);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selected, setSelected] = useState<number | null>(6);

  useEffect(() => {
    const calculateData = () => {
      const standard = Math.max(...pureData.map((item) => item.value));

      const newChartData = data.map((item: PureData) => ({
        date: formatDate(item.date),
        day: formatDay(item.date),
        value: item.value,
        height: 135 * (item.value / standard),
      }));

      setChartData(newChartData);
    };

    calculateData();
  }, pureData);

  return (
    <S.Container>
      {chartData.map((item, idx) => (
        <S.ChartData key={idx} onPress={() => setSelected(idx)}>
          <View style={{ display: selected === idx ? 'flex' : 'none' }}>
            <CustomText font={theme.fonts.bold14} color={theme.colors.violet}>
              {item.value}
            </CustomText>
          </View>
          <S.Bar $height={item.height} />
          <CustomText font={theme.fonts.reg12} color={theme.colors.gray_4}>
            {item.date}
          </CustomText>
          <CustomText font={theme.fonts.reg12} color={theme.colors.gray_4}>
            {item.day}
          </CustomText>
        </S.ChartData>
      ))}
    </S.Container>
  );
};
