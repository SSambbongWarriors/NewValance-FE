import React from 'react';
import { Text, TextProps } from 'react-native';
import theme from '../../styles/theme';

interface CustomTextProps extends TextProps {
  font: {
    fontFamily: string;
    fontSize: number;
  };
  color?: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  font,
  color = theme.colors.black_1,
  ...props
}) => {
  return (
    <Text style={[font, { color: color }]} {...props}>
      {children}
    </Text>
  );
};
