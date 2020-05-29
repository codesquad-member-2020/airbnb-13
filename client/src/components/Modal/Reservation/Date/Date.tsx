/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Icon from '$Icon/Icon';
import Box from '@/components/Modal/Reservation/Box/Box';

const Date = () => {
  return (
    <div>
      <span css={theme => ({ fontSize: theme.fontSizes.micro, color: theme.colors.darkGray })}>날짜</span>
      <Box width="100%">
        <FlexLayout direction="row" align="spaceAround">
          <span>2019.03.23</span>
          <Icon icon="arrow" />
          <span>2019.04.23</span>
        </FlexLayout>
      </Box>
    </div>
  );
};

export default Date;
