import { useState } from 'react';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import { BlurView } from 'expo-blur';
import * as S from './Comment.styles';
import { StyleSheet } from 'react-native';

export interface CommentProps {
  image: string;
  name: string;
  content: string;
}

export const Comment = ({ image, name, content }: CommentProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleLongPress = () => {
    //작성자 본인인지 확인하는 로직 필요
    setIsFocused(true);
  };

  const handlePress = () => {
    setIsFocused(false);
  };

  return (
    <S.Container $isFocused={isFocused}>
      <S.PressArea onLongPress={handleLongPress} onPress={handlePress}>
        <S.ProfileImage source={{ uri: image }} />
        <S.TextContainer>
          <CustomText font={theme.fonts.bold14}>{name}</CustomText>
          <CustomText font={theme.fonts.reg14}>{content}</CustomText>
        </S.TextContainer>

        {isFocused && (
          <>
            <BlurView
              intensity={1}
              style={StyleSheet.absoluteFill}
              experimentalBlurMethod="dimezisBlurView"
            />
            <S.DeleteIcon />
          </>
        )}
      </S.PressArea>
    </S.Container>
  );
};
