import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';
import { UserState } from '@Reducer/userReducer';

const MyPage = () => {
  const user: UserState = useSelector((state: RootState) => state.userReducer);
  return <>{user.token ? <div>유저가 있습니다</div> : <div>유저가 없습니다</div>}</>;
};

export default MyPage;
