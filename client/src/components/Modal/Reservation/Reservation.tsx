/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import Header from './Header/Header';
import Date from './Date/Date';
import Guest from './Guest/Guest';
import Prices from './Prices/Prices';
import { useSelector } from 'react-redux';
import { RootState } from '@Reducer/index';
import { useState } from 'react';
import useFetch from '$Util/customHooks/useFetch';

type ReservationInfo = {
  price: number;
  checkIn: string;
  checkOut: string;
  guestCount: number;
  cleaningFee: number;
  serviceFee: number;
  occupancyFee: number;
  totalPrice: number;
};

const Reservation = () => {
  const { id } = useSelector((state: RootState) => state.modalReducer);
  const [reservationInfo, setReservationInfo] = useState<ReservationInfo>({
    price: 0,
    checkIn: '',
    checkOut: '',
    guestCount: 0,
    cleaningFee: 0,
    serviceFee: 0,
    occupancyFee: 0,
    totalPrice: 0
  });
  useFetch(setReservationInfo, process.env.RESEVATION_MODAL_API + id);
  const { price, checkIn, checkOut, guestCount, cleaningFee, serviceFee, occupancyFee, totalPrice } = reservationInfo;
  return (
    <FlexLayout direction="column" align="left" gap={'10px'}>
      <Header price={price}></Header>
      <Date checkIn={checkIn} checkOut={checkOut}></Date>
      <Guest guestCount={guestCount}></Guest>
      <Prices
        price={price}
        cleaningFee={cleaningFee}
        serviceFee={serviceFee}
        occupancyFee={occupancyFee}
        totalPrice={totalPrice}></Prices>
      <Button theme="primary" fontSize="medium" width="100%">
        예약하기
      </Button>
      <p css={pStyle}>예약 확인 해주세요!</p>
    </FlexLayout>
  );
};

const pStyle = css`
  margin: 5px auto;
`;

export default Reservation;
