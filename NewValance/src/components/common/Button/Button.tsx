import { PressableProps } from 'react-native-gesture-handler';
import theme from '../../../styles/theme';
import { CustomText } from '../CustomText';
import * as S from './Button.styles';

interface ButtonProps extends PressableProps {
  text: string;
  isActive: boolean;
  onPress: () => void;
}

export const Button = ({ text, isActive, onPress }: ButtonProps) => {
  return (
    <S.Container $isActive={isActive} onPress={onPress} disabled={!isActive}>
      <CustomText
        font={theme.fonts.bold24}
        color={isActive ? theme.colors.white : theme.colors.gray_3}
      >
        {text}
      </CustomText>
    </S.Container>
  );
};
