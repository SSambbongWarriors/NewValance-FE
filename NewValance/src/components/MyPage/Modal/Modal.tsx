import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../../hooks/useUser';
import theme from '../../../styles/theme';
import { CustomText } from '../../common/CustomText';
import * as S from './Modal.styles';
import { StackNavigationProp } from '@react-navigation/stack';

interface ModalProps {
  setModalActive: React.Dispatch<
    React.SetStateAction<false | 'logout' | 'signout'>
  >;
}

export const LogoutModal = ({ setModalActive }: ModalProps) => {
  const { clearUser } = useUser();
  const navigate = useNavigation<StackNavigationProp<any>>();

  const handleLogout = () => {
    clearUser();
    navigate.navigate('Login');
  };

  return (
    <S.Container>
      <CustomText font={theme.fonts.reg20}>로그아웃 하시겠습니까?</CustomText>
      <S.ButtonContainer>
        <S.Button onPress={() => setModalActive(false)}>
          <CustomText font={theme.fonts.bold14} color={theme.colors.white}>
            취소
          </CustomText>
        </S.Button>
        <S.Button $color={true} onPress={handleLogout}>
          <CustomText font={theme.fonts.bold14} color={theme.colors.white}>
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
      <CustomText font={theme.fonts.reg20}>정말 탈퇴하시겠습니까?</CustomText>
      <S.ButtonContainer>
        <S.Button>
          <CustomText font={theme.fonts.bold14} color={theme.colors.white}>
            탈퇴하기
          </CustomText>
        </S.Button>
        <S.Button $color={true} onPress={() => setModalActive(false)}>
          <CustomText font={theme.fonts.bold14} color={theme.colors.white}>
            뒤로가기
          </CustomText>
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
