/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Cards from './components/Cards/Cards';
import { ThemeProvider } from 'emotion-theming';
import theme from './style/theme';
import Modal from '@Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';
import Header from '@Header/Header';
import Filters from '@Filters/Filters';

const App = () => {
  const { on, content } = useSelector((state: RootState) => state.modalReducer);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {on && <Modal content={content} />}
      <div css={wrapStyle}>
        <Filters />
        <Cards />
      </div>
    </ThemeProvider>
  );
};

export default App;

const wrapStyle = css`
  max-width: 900px;
  margin: 50px auto;
`;
