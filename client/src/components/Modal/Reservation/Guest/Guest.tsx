/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Box from '@/components/Modal/Reservation/Box/Box';

type GuestProp = {
  guestCount: number;
};

const Guest = ({ guestCount }: GuestProp) => {
  return (
    <div>
      <span css={theme => ({ fontSize: theme.fontSizes.micro, color: theme.colors.darkGray })}>인원</span>
      <Box width="100%">{guestCount}명</Box>
    </div>
  );
};

export default Guest;
