import React from 'react';
import Button from '@Custom/Button/Button';
import { LOGIN } from '@Action/userAction';
import { useDispatch } from 'react-redux';
import Icon from '$Icon/Icon';

const Login = () => {
  const dispatch = useDispatch();
  const loginHandle = () => {
    dispatch({ type: LOGIN });
  };
  return (
    <div>
      <Button theme={'primary'} fontSize={'medium'} width={'100%'} onClick={loginHandle}>
        <Icon icon="github" />
        <span>Github으로 로그인</span>
      </Button>
    </div>
  );
};

export default Login;
