/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { MypageState } from './MyPage';
import theme from '@/style/theme';

const MyReservation = ({ title, location, thumbnail, checkIn, checkOut, guestCount, totalPrice }: MypageState) => {
  return (
    <div css={wrap}>
      <div css={imgWrap}>
        <img src={thumbnail} css={imgStyle} />
      </div>
      <div css={infoWrap}>
        <p>숙소 : {title}</p>
        <p>위치 : {location}</p>
        <p>체크인 : {checkIn}</p>
        <p>체크아웃 : {checkOut}</p>
        <p>인원수 : {guestCount.adult + guestCount.child + guestCount.infant}</p>
        <p>결제 금액 : {totalPrice}</p>
      </div>
    </div>
  );
};

export default MyReservation;

const wrap = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
`;

const imgWrap = css`
  width: 40%;
`;

const imgStyle = css`
  width: 100%;
`;

const infoWrap = css`
  margin-left: 10px;
`;
