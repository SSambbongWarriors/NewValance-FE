import styled from 'styled-components/native';
import { hp } from '../../styles/ResponsiveSize';

export const Container = styled.View`
  flex: 1;
  margin-left: 16px;

  padding-bottom: ${hp(64)}px;
`;

export const CategoryContainer = styled.View`
  margin-bottom: 16px;
`;

export const Header = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 8px;
  margin-right: 16px;
`;

export const NewsContainer = styled.ScrollView``;
