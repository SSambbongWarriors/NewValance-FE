import styled from 'styled-components/native';
import { hp, wp } from '../../../styles/ResponsiveSize';
import theme from '../../../styles/theme';

export const Container = styled.Pressable<{ $isActive: boolean }>`
  width: 100%;
  padding: ${wp(12)}px 0px;
  justify-content: center;
  align-items: center;

  background-color: ${({ $isActive }) =>
    $isActive ? theme.colors.violet : theme.colors.gray_2};

  border-radius: ${wp(50)}px;
`;
