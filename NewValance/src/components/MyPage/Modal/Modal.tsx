import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './Modal.styles';

interface ModalProps {
  setModalActive: React.Dispatch<
    React.SetStateAction<false | 'logout' | 'signout'>
  >;
}

export const LogoutModal = ({ setModalActive }: ModalProps) => {
  return (
    <S.Container>
      <CustomText font={theme.fonts.reg24}>로그아웃 하시겠습니까?</CustomText>
      <S.ButtonContainer>
        <S.Button onPress={() => setModalActive(false)}>
          <CustomText font={theme.fonts.bold18} color={theme.colors.white}>
            취소
          </CustomText>
        </S.Button>
        <S.Button $color={true}>
          <CustomText font={theme.fonts.bold18} color={theme.colors.white}>
            확인
          </CustomText>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export const SignOutModal = ({ setModalActive }: ModalProps) => {
  return (
    <S.Container>
      <CustomText font={theme.fonts.reg24}>정말 탈퇴하시겠습니까?</CustomText>
      <S.ButtonContainer>
        <S.Button>
          <CustomText font={theme.fonts.bold18} color={theme.colors.white}>
            탈퇴하기
          </CustomText>
        </S.Button>
        <S.Button $color={true} onPress={() => setModalActive(false)}>
          <CustomText font={theme.fonts.bold18} color={theme.colors.white}>
            뒤로가기
          </CustomText>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
