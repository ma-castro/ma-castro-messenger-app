import styled, { css } from 'styled-components';

import { TextWrap } from 'modules/styles/mixins';
import { ContainerProps } from './types';

const Transition = css`
  transition: opacity 80ms ease-out;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1rem;
  line-height: calc(22 / 16);
  width: 100%;
  ${TextWrap}

  ::placeholder {
    color: ${({ theme }) => theme.colors.grey600};
    ${Transition}
  }

  &:focus {
    outline: none;
  }
`;

export const Label = styled.div`
  color: inherit;
  height: 1.125rem;
  font-size: 0.75rem;
  line-height: calc(18 / 12);
  ${Transition}
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputErrorWrapper = styled.div`
  color: ${({ theme }) => theme.colors.flamingo};
  font-size: 0.75rem;
  line-height: calc(16 / 12);
  min-height: 1rem;
`;

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.grey0};
  border-bottom: solid 0.125rem ${({ theme }) => theme.colors.grey200};
  border-radius: 0.5rem 0.5rem 0 0;
  color: ${({ theme }) => theme.colors.grey600};
  display: flex;
  flex-direction: column;
  height: 3.125rem;
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  position: relative;
  width: 100%;
  max-width: 16.8125rem;

  &:focus-within {
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: solid 0.125rem ${({ theme }) => theme.colors.primary};
  }

  ${({ isError, theme }) =>
    isError
      ? css`
          color: ${theme.colors.flamingo} !important;
          border-bottom: solid 0.125rem ${theme.colors.flamingo} !important;
        `
      : null}

  &:hover {
    ${Input}::placeholder {
      opacity: 0.7;
      ${Transition};
    }
  }
`;
