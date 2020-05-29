import { combineReducers } from 'redux';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  modalReducer
} as any);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
