import { store } from 'modules/redux/store';
import GlobalStyle from 'modules/styles/GlobalStyle';
import themes from 'modules/styles/themes';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { IProps } from './types';

const AppProviders = ({ children }: IProps) => (
  <ReduxProvider store={store}>
    <StyleSheetManager>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  </ReduxProvider>
);

export default AppProviders;
