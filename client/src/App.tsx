/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Cards from './components/Cards/Cards';
import { ThemeProvider } from 'emotion-theming';
import theme from './style/theme';
import Modal from '@Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@Reducer/index';
import { turnOnModal } from '@Action/modalAction';
import Filters from '@Filters/Filters';

const App = () => {
  const { on, content } = useSelector((state: RootState) => state.modalReducer);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(turnOnModal('Reservation'));

  return (
    <ThemeProvider theme={theme}>
      {/* <button onClick={onClickHandler}>click</button>
      {on && <Modal content={content} />} */}
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
