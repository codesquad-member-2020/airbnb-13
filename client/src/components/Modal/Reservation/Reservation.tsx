/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import Header from './Header/Header';
import Date from './Date/Date';
import Guest from './Guest/Guest';
import Prices from './Prices/Prices';

const Reservation = () => {
  return (
    <FlexLayout direction="column" align="left" gap={'10px'}>
      <Header></Header>
      <Date></Date>
      <Guest></Guest>
      <Prices></Prices>
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
