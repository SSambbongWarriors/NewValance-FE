import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const InputContainer = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.violet};
  padding: 5px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  ${theme.fonts.bold32}
`;

export const InputWrapper = styled.View`
  gap: 8px;
`;
