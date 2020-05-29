/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Box from '@/components/Modal/Reservation/Box/Box';

const Guest = () => {
  return (
    <div>
      <span css={theme => ({ fontSize: theme.fontSizes.micro, color: theme.colors.darkGray })}>인원</span>
      <Box width="100%">4명</Box>
    </div>
  );
};

export default Guest;
