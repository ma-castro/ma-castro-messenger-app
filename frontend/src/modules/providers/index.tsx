import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../redux/store';
import { Props } from './types';

const AppProviders = ({ children }: Props) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

export default AppProviders;
