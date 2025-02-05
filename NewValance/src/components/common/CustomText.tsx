import React from 'react';
import { Text, TextProps } from 'react-native';

export const CustomText: React.FC<TextProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <Text style={[style]} {...props}>
      {children}
    </Text>
  );
};
