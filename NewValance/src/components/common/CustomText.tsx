import React from 'react';
import { Text, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  font: {
    fontFamily: string;
    fontSize: number;
    lineHeights: number;
  };
  color: string;
}

export const CustomText: React.FC<CustomTextProps> = ({
  children,
  font,
  color,
  ...props
}) => {
  return (
    <Text style={[font, { color: color }]} {...props}>
      {children}
    </Text>
  );
};
