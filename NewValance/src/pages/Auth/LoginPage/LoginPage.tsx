import { Pressable } from 'react-native';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import * as S from './LoginPage.styles';
import { ImageBackground } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Layout from '../../Layout';

const LoginPage = () => {
  const navigate = useNavigation<NavigationProp<any>>(); //로그인 구현 전 임시 네비게이션

  return (
    <Layout>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../assets/images/common/landing-background.png')}
        resizeMode="cover"
      >
        <S.Container>
          <S.TextWrapper>
            <CustomText font={theme.fonts.bold32} color={theme.colors.white}>
              {'세상의 균형을 맞추다,\n뉴밸런스에서\n지금 시작해보세요!'}
            </CustomText>
          </S.TextWrapper>
        </S.Container>
        <S.ButtonContainer>
          <Pressable
            onPress={() =>
              navigate.navigate('LoginWebView', { type: 'kakao' })
            } /*카카오 로그인 버튼*/
          >
            <S.KakaoButton
              source={require('../../../assets/images/LoginPage/kakao-login-icon.png')}
            />
          </Pressable>
          <S.TextContainer>
            <S.Line />
            <CustomText font={theme.fonts.reg14} color={theme.colors.white}>
              또는
            </CustomText>
            <S.Line />
          </S.TextContainer>
          <S.IconContainer>
            <Pressable
              onPress={() =>
                navigate.navigate('LoginWebView', { type: 'naver' })
              } /*네이버 로그인 버튼*/
            >
              <S.CircleButton
                source={require('../../../assets/images/LoginPage/naver-login-icon.png')}
              />
            </Pressable>
            <Pressable
              onPress={() =>
                //navigate.navigate('LoginWebView', { type: 'google' })
                navigate.navigate('SignIn')
              } /*구글 로그인 버튼*/
            >
              <S.CircleButton
                source={require('../../../assets/images/LoginPage/google-login-icon.png')}
              />
            </Pressable>
          </S.IconContainer>
        </S.ButtonContainer>
      </ImageBackground>
    </Layout>
  );
};

export default LoginPage;
