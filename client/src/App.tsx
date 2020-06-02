/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';
import Header from '@Header/Header';
import Modal from '@Modal/Modal';
import MainPage from './Page/MainPage/MainPage';
import MyPage from './Page/MyPage/MyPage';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';

const App = () => {
  const { on, content } = useSelector((state: RootState) => state.modalReducer);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {on && <Modal content={content} />}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/mypage" component={MyPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
