import styled from 'styled-components/native';
import theme from '../../../styles/theme';
import { hp } from '../../../styles/ResponsiveSize';
import { Dimensions, useWindowDimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.violet_2};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: ${hp(64)}px;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 28px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 76px;
  height: 76px;
  border-radius: 76px;
`;

export const TextContainer = styled(ProfileContainer)`
  align-items: flex-end;
`;

export const Line = styled.View`
  width: 100%;
  height: 0.3px;
  background-color: ${theme.colors.gray_3};
  margin: 16px 0;
`;

export const TextButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 36px;
`;

export const BackgroundBlur = styled.Pressable`
  width: 100%;
  height: 100%;
  position: absolute;

  background-color: ${theme.colors.black_1};
  opacity: 0.5;
`;
