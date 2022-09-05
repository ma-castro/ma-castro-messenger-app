import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { store } from '../redux/store';
import GlobalStyle from '../styles/GlobalStyle';
import themes from '../styles/themes';
import { Props } from './types';

const AppProviders = ({ children }: Props) => (
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
