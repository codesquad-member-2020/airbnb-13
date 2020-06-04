import React from 'react';
import { isLogin } from '$Util/cookie/cookie';
import Modal from '@Modal/Modal';
import Login from '@Modal/Login/Login';
import { useDispatch } from 'react-redux';
import { turnOnModal } from '@Action/modalAction';
import { useEffect } from 'react';

const MyPage = () => {
  const dispatch = useDispatch();
  const login = isLogin('jwt');
  useEffect(() => {
    !login && dispatch(turnOnModal('Login'));
  }, []);
  return <>{login ? <div>유저가 있습니다</div> : null}</>;
};

export default MyPage;
