import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const CommentContainer = styled.View`
  width: 100%;
  height: 500px;

  margin-top: auto;
  background-color: ${theme.colors.white};
  border-radius: 30px 30px 0px 0px;

  align-items: center;
  flex: 1;
`;

export const CommentList = styled.FlatList`
  flex: 1;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 72px;
  border-top-width: 0.3px;
  border-top-color: ${theme.colors.gray_3};

  flex-direction: row;
  margin-top: auto;
  gap: 8px;

  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const CommentInput = styled.TextInput`
  flex: 1;
  height: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;

  background-color: ${theme.colors.gray_1};
`;
