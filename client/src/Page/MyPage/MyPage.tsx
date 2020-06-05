/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { isLogin } from '$Util/cookie/cookie';
import { useDispatch } from 'react-redux';
import { turnOnModal } from '@Action/modalAction';
import { useEffect } from 'react';
import useFetch from '$Util/customHooks/useFetch';
import MyReservation from './MyReservation';
import theme from '@/style/theme';

type GuestCount = {
  adult: number;
  child: number;
  infant: number;
};

export type MypageState = {
  title: string;
  location: string;
  thumbnail: string;
  checkIn: string;
  checkOut: string;
  guestCount: GuestCount;
  totalPrice: number;
};

const MyPage = () => {
  const dispatch = useDispatch();
  const login = isLogin('jwt');
  const [userInfo, setUserInfo] = useState<MypageState[]>([]);
  useFetch(setUserInfo, `${process.env.MYPAGE_API}`);
  useEffect(() => {
    !login && dispatch(turnOnModal('Login'));
  }, []);
  console.log('userInfo is', userInfo);
  return (
    <div css={myPageWrap}>
      {userInfo.length ? (
        userInfo.map(({ title, location, thumbnail, checkIn, checkOut, guestCount, totalPrice }) => {
          return (
            <MyReservation
              title={title}
              location={location}
              thumbnail={thumbnail}
              checkIn={checkIn}
              checkOut={checkOut}
              guestCount={guestCount}
              totalPrice={totalPrice}
            />
          );
        })
      ) : (
        <div css={userInfoStyle}>예약 내역이 없습니다.</div>
      )}
    </div>
  );
};

export default MyPage;

const myPageWrap = css`
  margin: 80px auto;
  max-width: 900px;
`;

const userInfoStyle = css`
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: center;
  font-size: ${theme.fontSizes.title3};
  color: ${theme.colors.lightGray};
  font-weight: bold;
`;
