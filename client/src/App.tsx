import React from 'react';
import Cards from './components/Cards/Cards';
import { ThemeProvider } from 'emotion-theming';
import theme from './style/theme';

import Modal from '@Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducer';
import { turnOnModal } from './action/modalAction';

const App = () => {
  const on = useSelector((state: RootState) => state.modalReducer.on);
  const content = useSelector((state: RootState) => state.modalReducer.content);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(turnOnModal('Reservation'));

  return (
    <ThemeProvider theme={theme}>
      <button onClick={onClickHandler}>click</button>
      {on && <Modal content={content} />}
    </ThemeProvider>
  );
};

export default App;
