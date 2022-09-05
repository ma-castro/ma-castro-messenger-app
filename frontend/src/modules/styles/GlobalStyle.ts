/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 100%;
    font-family: 'Greycliff CF', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "liga","kern";
    font-variant-numeric: proportional-nums;
  }
  * {
    box-sizing: border-box;
    @media print {
      color-adjust: exact;
    }
  }
  button {
    font-family: inherit;
    line-height: normal;
  }
`;

export default GlobalStyle;
