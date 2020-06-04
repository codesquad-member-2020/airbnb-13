import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import filterReducer from './filterReducer';
import cardReducer from './cardReducer';
import userReducer from './userReducer';
import priceReducer from './priceReducer';

const rootReducer = combineReducers({
  modalReducer,
  filterReducer,
  cardReducer,
  userReducer,
  priceReducer
} as any);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
