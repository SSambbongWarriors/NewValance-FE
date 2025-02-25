import * as S from './NameInput.style';

import theme from '../../styles/theme';
import { CustomText } from '../common/CustomText';
import WarnIcon from '../../assets/images/LoginPage/close_circle.svg';
import { useCallback, useState } from 'react';

interface NameInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  isDuplicated: boolean;
  setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NameInput = ({
  name,
  setName,
  isDuplicated,
  setIsButtonActive,
}: NameInputProps) => {
  const onChangeName = useCallback((content: string) => {
    setName(content);
    setIsButtonActive(content.trim() !== '');
  }, []);

  return (
    <S.InputWrapper>
      <S.InputContainer>
        <S.TextInput name="content" value={name} onChangeText={onChangeName} />
        {isDuplicated && <WarnIcon />}
      </S.InputContainer>
      {isDuplicated && (
        <CustomText font={theme.fonts.reg14} color={theme.colors.red}>
          이미 존재하는 닉네임입니다.
        </CustomText>
      )}
    </S.InputWrapper>
  );
};
