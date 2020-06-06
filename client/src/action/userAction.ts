export const LOGIN = 'LOGIN';
export const SET_USER = 'SET_USER';

export const setUser = (token: string) => {
  return {
    type: SET_USER,
    token
  };
};

export type UserAction = ReturnType<typeof setUser>;
