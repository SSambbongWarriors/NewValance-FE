import styled from 'styled-components/native';
import { hp } from '../../styles/ResponsiveSize';
import theme from '../../styles/theme';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
  margin-left: 16px;

  padding-bottom: ${hp(64)}px;
`;

export const CategoryContainer = styled.View``;

export const Header = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
  margin-right: 16px;
`;

export const NewsContainer = styled.FlatList``;

export const Line = styled.View`
  width: ${width * 0.9};
  height: 1px;
  background-color: ${theme.colors.gray_1};
  margin-top: 16px;
  margin-bottom: 8px;
`;
