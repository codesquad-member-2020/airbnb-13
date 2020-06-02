/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Icon from '$Icon/Icon';
import Box from '@/components/Modal/Reservation/Box/Box';

export type DateProp = {
  checkIn: string;
  checkOut: string;
};

const Date = ({ checkIn, checkOut }: DateProp) => {
  return (
    <div>
      <span css={theme => ({ fontSize: theme.fontSizes.micro, color: theme.colors.darkGray })}>날짜</span>
      <Box width="100%">
        <FlexLayout direction="row" align="spaceAround">
          <span>{checkIn}</span>
          <Icon icon="arrow" />
          <span>{checkOut}</span>
        </FlexLayout>
      </Box>
    </div>
  );
};

export default Date;
