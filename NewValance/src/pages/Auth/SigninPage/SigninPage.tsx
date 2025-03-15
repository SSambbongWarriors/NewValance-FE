import { useCallback, useEffect, useState } from 'react';
import * as S from './SigninPage.styles';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import { Button } from '../../../components/common/Button/Button';
import { Keyboard } from 'react-native';
import { NameInput } from '../../../components/SigninPage/NameInput';
import { TagSelector } from '../../../components/SigninPage/TagSelector';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Layout from '../../Layout';

const SigninPage = () => {
  const [passStage, setPassStage] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isKeyBoardActive, setIsKeyboardActive] = useState(false);

  const [name, setName] = useState<string>('');
  const [isDuplicated, setIsDuplicated] = useState(false);

  const [tagList, setTagList] = useState<Set<string>>(new Set<string>());
  const navigate = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setIsKeyboardActive(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setIsKeyboardActive(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (passStage) {
      if (tagList.size !== 0) {
        setIsButtonActive(true);
      } else {
        setIsButtonActive(false);
      }
    }
  }, [tagList]);

  const onPressButton = () => {
    console.log('tlfgod');
    if (!passStage) {
      //닉네임 중복 검사 코드 추가
      setPassStage(true);
      setIsButtonActive(false);
    } else {
      //선택 태그 전송 코드 추가
      navigate.navigate('Home');
    }
  };

  return (
    <Layout>
      <S.Container>
        <S.SkipButton
          style={{ opacity: passStage ? 1 : 0 }}
          disabled={!passStage}
          onPress={() => navigate.navigate('Home')}
        >
          <CustomText font={theme.fonts.reg14} color={theme.colors.gray_4}>
            건너뛰고 시작하기
          </CustomText>
        </S.SkipButton>

        <S.TextWrapper>
          <CustomText font={theme.fonts.bold24}>
            {!passStage
              ? '뉴밸런스가 처음이시군요!\n어떤 이름으로 시작하시겠어요?'
              : '어떤 주제에\n관심이 있으신가요?'}
          </CustomText>
        </S.TextWrapper>
        {!passStage ? (
          <S.InputWrapper>
            <NameInput
              name={name}
              setName={setName}
              isDuplicated={isDuplicated}
              setIsButtonActive={setIsButtonActive}
            />
          </S.InputWrapper>
        ) : (
          <TagSelector tagList={tagList} setTagList={setTagList} />
        )}
        {!isKeyBoardActive && (
          <S.ButtonWrapper onPress={onPressButton}>
            <Button
              text={!passStage ? '계속하기' : '시작하기'}
              isActive={isButtonActive}
              onPress={onPressButton}
            />
          </S.ButtonWrapper>
        )}
      </S.Container>
    </Layout>
  );
};

export default SigninPage;
