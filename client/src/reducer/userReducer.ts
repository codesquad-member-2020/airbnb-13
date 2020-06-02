import { SET_USER, UserAction } from '@Action/userAction';

export type UserState = {
  token: string;
};

const initialState = {
  token: ''
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        token: action.token
      };
    default:
      return state;
  }
};

export default userReducer;
