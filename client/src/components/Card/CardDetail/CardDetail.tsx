/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '../../custom/FlexLayout/FlexLayout';
import Button from '../../custom/Button/Button';
import Icon from '../../../Icon/Icon';
import SuperHost from './SuperHost/SuperHost';

const CardDetail = () => {
  return (
    <FlexLayout direction="column" align="left" gap={'1rem'} width={'100%'}>
      <FlexLayout direction="row" align="spaceBetween">
        <div>
          <SuperHost />
          <span css={theme => ({ fontSize: theme.fontSizes.micro, color: theme.colors.gray })}>프랑스</span>
        </div>
        <div>
          <Icon icon="star" color="#ff5a5f" size={'10px'} />
          <span css={theme => ({ color: theme.colors.darkGray, marginLeft: '3px' })}>4.89</span>
        </div>
      </FlexLayout>
      <div
        css={theme => ({
          fontSize: theme.fontSizes.ragular,
          color: theme.colors.darkGray,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        })}>
        CHARMING HOUSE SeaSide & Pineddddeeefe
      </div>
      <div>
        <span
          css={theme => ({
            fontSize: theme.fontSizes.ragular,
            color: theme.colors.gray,
            marginRight: '3px',
            textDecoration: 'line-through'
          })}>
          &#8361;271,900
        </span>
        <span css={theme => ({ fontSize: theme.fontSizes.ragular, color: theme.colors.darkGray, fontWeight: 'bold' })}>
          &#8361;239,816
        </span>
        <span>/1박</span>
      </div>
      <FlexLayout direction="row" align="spaceBetween">
        <div css={theme => ({ fontSize: theme.fontSizes.small, color: theme.colors.gray })}>
          <span>총 요금: </span>
          <span>&#8361;3,527,426</span>
        </div>
        <Button theme={'primary'} fontSize={'medium'} width={'25%'}>
          예약
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};

export default CardDetail;
