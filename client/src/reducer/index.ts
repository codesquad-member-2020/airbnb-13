import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  modalReducer,
  filterReducer
} as any);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
