import React, { useEffect, useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './TagChart.styles';

import { forceSimulation, forceCollide, forceX, forceY } from 'd3-force';
import Svg, { Circle, Text } from 'react-native-svg';

interface BubbleType {
  name: string;
  value: number;
  color: string;
  r: number;
  x: number;
  y: number;
}

const data = [
  { name: '인공지능', value: 130, color: '#8B5CF6' },
  { name: '대통령', value: 100, color: '#FACC15' },
  { name: '세금', value: 30, color: '#3B82F6' },
  { name: '보수', value: 50, color: '#EF4444' },
  { name: '주식', value: 25, color: '#EC4899' },
];

const width = 300,
  height = 200;

export const TagChart = () => {
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);

  useEffect(() => {
    let nodes = data.map((item) => ({
      ...item,
      r: Math.sqrt(item.value) * 5,
      x: Math.random() * width,
      y: Math.random() * height,
    }));

    forceSimulation(nodes)
      .force('x', forceX(width / 2).strength(0.05)) // 중앙 정렬
      .force('y', forceY(height / 2).strength(0.05))
      .force(
        'collide',
        forceCollide((d) => d.r + 1)
      ) // 충돌 방지
      .on('tick', () => setBubbles([...nodes])); // 값 업데이트
  }, []);

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
                {bubble.name}
              </Text>
            </React.Fragment>
          ))}
        </Svg>
      </S.Box>
    </S.Container>
  );
};
