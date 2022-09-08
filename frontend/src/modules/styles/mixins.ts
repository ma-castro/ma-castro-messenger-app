import { css } from 'styled-components';

export const TextWrap = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CustomTooltip = css`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 0.775rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.grey300};
  box-shadow: 0 0.125rem 1rem -0.5rem ${({ theme }) => theme.colors.grey500};
  letter-spacing: 0.0063rem;
`;
