import styled from 'styled-components/native';
import theme from '../../../styles/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  padding: 16px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
`;
