import React, { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './TagChart.styles';

import { forceSimulation, forceCollide, forceX, forceY } from 'd3-force';
import Svg, { Circle, Text } from 'react-native-svg';
import { KeywordType } from '../../../pages/My/MyPage/MyPage';

interface ColoredKeywordType extends KeywordType {
  color: string;
}

interface BubbleType {
  keyword: string;
  weight: number;
  color: string;
  r: number;
  x: number;
  y: number;
}

const colorPalette = ['#8B5CF6', '#FACC15', '#3B82F6', '#EF4444', '#EC4899'];

const width = 300,
  height = 200;

export const TagChart = ({
  userKeywords,
}: {
  userKeywords: Array<KeywordType>;
}) => {
  const [coloredData, setColoredData] = useState<Array<ColoredKeywordType>>([]);
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  useEffect(() => {
    const coloredData = userKeywords.map((item, index) => ({
      ...item,
      color: colorPalette[index],
    }));

    setColoredData(coloredData);
  }, [userKeywords]);

  useEffect(() => {
    const weights = coloredData.map((item) => item.weight);
    const minWeight = Math.min(...weights);
    const maxWeight = Math.max(...weights);
    const minR = 10;
    const maxR = 65;

    const scaleRadius = (weight: number) => {
      if (maxWeight === minWeight) return (minR + maxR) / 2;
      return (
        ((weight - minWeight) / (maxWeight - minWeight)) * (maxR - minR) + minR
      );
    };

    let nodes = coloredData.map((item) => ({
      ...item,
      r: scaleRadius(item.weight),
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    const forceBoundary = () => {
      nodes.forEach((node) => {
        if (node.x - node.r < 0) node.x = node.r; // 왼쪽 벽 충돌
        if (node.x + node.r > width) node.x = width - node.r; // 오른쪽 벽 충돌
        if (node.y - node.r < 0) node.y = node.r; // 상단 벽 충돌
        if (node.y + node.r > height) node.y = height - node.r; // 하단 벽 충돌
      });
    };

    forceSimulation(nodes)
      .force('x', forceX(width / 2).strength(0.05)) // 중앙 정렬
      .force('y', forceY(height / 2).strength(0.05))
      .force(
        'collide',
        forceCollide((d) => d.r + 1)
      ) // 충돌 방지
      .on('tick', () => {
        forceBoundary();
        setBubbles([...nodes]);
      }); // 값 업데이트
  }, [coloredData]);

  return (
    <S.Container>
      <CustomText font={theme.fonts.bold18} color={theme.colors.violet}>
        이런 키워드를 선호해요
      </CustomText>
      <S.Box>
        <Svg width={'100%'} height={height}>
          {bubbles.map((bubble, idx) => (
            <React.Fragment key={idx}>
              <Circle
                cx={bubble.x}
                cy={bubble.y}
                r={bubble.r}
                fill={bubble.color}
              />
              <Text
                x={bubble.x}
                y={bubble.y}
                dy={(bubble.r / 2.5) * 0.3}
                textAnchor="middle"
                fontSize={bubble.r / 2.5}
                fontFamily="Pretendard-Bold"
                fill="white"
              >
                {bubble.keyword}
              </Text>
            </React.Fragment>
          ))}
        </Svg>
      </S.Box>
    </S.Container>
  );
};
