import Layout from '../../Layout';
import * as S from './MyPage.styles';
import ProfileBackground from '../../../assets/images/MyPage/Ellipse 17.svg';
import SettingIcon from '../../../assets/images/MyPage/setting.svg';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import { ViewChart } from '../../../components/MyPage/ViewChart/ViewChart';
import { TagChart } from '../../../components/MyPage/TagChart/TagChart';
import React, { useState } from 'react';
import {
  LogoutModal,
  SignOutModal,
} from '../../../components/MyPage/Modal/Modal';

const MyPage = () => {
  const [isModalActive, setIsModalActive] = useState<
    false | 'logout' | 'signout'
  >(false);

  return (
    <Layout>
      <S.Container
        scrollEnabled={!isModalActive}
        showsVerticalScrollIndicator={false}
      >
        <ProfileBackground style={{ position: 'absolute', top: -1 }} />
        <S.ContentContainer>
          <S.ProfileContainer>
            <CustomText font={theme.fonts.bold32} color={theme.colors.white}>
              님을베려하는마음
            </CustomText>
            <S.ProfileImage
              source={{
                uri: 'https://i.pinimg.com/736x/ae/36/d7/ae36d717ce897e031cc8e4d03081cb2e.jpg',
              }}
            />
          </S.ProfileContainer>
          <S.TextContainer>
            <CustomText font={theme.fonts.bold18} color={theme.colors.white}>
              {'지금까지 뉴밸런스에서\n이만큼의 숏폼을 시청했어요!'}
            </CustomText>
            <SettingIcon />
          </S.TextContainer>
          <ViewChart />
          <TagChart />
          <S.Line />
          <S.TextButtonContainer>
            <CustomText
              font={theme.fonts.reg14}
              color={theme.colors.gray_3}
              onPress={() => setIsModalActive('logout')}
            >
              로그아웃
            </CustomText>
            <CustomText font={theme.fonts.reg14} color={theme.colors.gray_3}>
              |
            </CustomText>
            <CustomText
              font={theme.fonts.reg14}
              color={theme.colors.gray_3}
              onPress={() => setIsModalActive('signout')}
            >
              회원탈퇴
            </CustomText>
          </S.TextButtonContainer>
        </S.ContentContainer>
        {isModalActive && (
          <React.Fragment>
            <S.BackgroundBlur onPress={() => setIsModalActive(false)} />
            {isModalActive === 'signout' && (
              <SignOutModal setModalActive={setIsModalActive} />
            )}
            {isModalActive === 'logout' && (
              <LogoutModal setModalActive={setIsModalActive} />
            )}
          </React.Fragment>
        )}
      </S.Container>
    </Layout>
  );
};

export default MyPage;
