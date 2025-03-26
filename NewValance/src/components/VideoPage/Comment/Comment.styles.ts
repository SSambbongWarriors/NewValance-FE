import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../../styles/theme';
import DeleteButtonIcon from '../../../assets/images/VideoPage/delete-button.svg';

export const Container = styled.View`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 8px;

  background-color: ${({ $isFocused }) =>
    $isFocused ? theme.colors.gray_2 : theme.colors.white};
`;

export const PressArea = styled.Pressable`
  flex-direction: row;
  width: 100%;
  gap: 12px;

  flex-wrap: 'wrap';
  position: relative;
`;

export const ProfileImage = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  flex-shrink: 0;
`;

export const TextContainer = styled.View`
  gap: 4px;
  justify-items: center;
  width: ${Dimensions.get('window').width - 92}px;
`;

export const DeleteIcon = styled(DeleteButtonIcon)`
  position: absolute;
  align-self: center;
  right: 10px;
`;
