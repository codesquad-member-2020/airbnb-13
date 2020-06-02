import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import filterReducer from './filterReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
  modalReducer,
  filterReducer,
  cardReducer
} as any);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
