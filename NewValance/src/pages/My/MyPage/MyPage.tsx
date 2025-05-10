import Layout from '../../Layout';
import * as S from './MyPage.styles';
import ProfileBackground from '../../../assets/images/MyPage/Ellipse 17.svg';
import SettingIcon from '../../../assets/images/MyPage/setting.svg';
import { CustomText } from '../../../components/common/CustomText';
import theme from '../../../styles/theme';
import { ViewChart } from '../../../components/MyPage/ViewChart/ViewChart';
import { TagChart } from '../../../components/MyPage/TagChart/TagChart';
import React, { useEffect, useState } from 'react';
import {
  LogoutModal,
  SignOutModal,
} from '../../../components/MyPage/Modal/Modal';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { getUserProfile } from '../../../api/profile';
import { useUser } from '../../../hooks/useUser';

export interface userViewType {
  todayViews: number;
  totalViews: number;
}

export interface KeywordType {
  keyword: string;
  weight: number;
}

const MyPage = () => {
  const [isModalActive, setIsModalActive] = useState<
    false | 'logout' | 'signout'
  >(false);

  const [userView, setUserView] = useState<userViewType>({
    todayViews: 0,
    totalViews: 0,
  });
  const [userKeywords, setUserKeywords] = useState<Array<KeywordType>>([]);

  const navigate = useNavigation<NavigationProp<any>>();
  const { user } = useUser();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await getUserProfile();
        if (res) {
          setUserView({
            todayViews: res.todayViews,
            totalViews: res.totalViews,
          });
          setUserKeywords(res.preferredKeywords);
        }
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

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
              {user?.username}
            </CustomText>
            <S.ProfileImage
              source={{
                uri: user?.profileImgUrl,
              }}
            />
          </S.ProfileContainer>
          <S.TextContainer>
            <CustomText font={theme.fonts.bold18} color={theme.colors.white}>
              {'지금까지 뉴밸런스에서\n이만큼의 숏폼을 시청했어요!'}
            </CustomText>
            <SettingIcon onPress={() => navigate.navigate('ProfileEdit')} />
          </S.TextContainer>
          <ViewChart userView={userView} />
          <TagChart userKeywords={userKeywords} />
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
