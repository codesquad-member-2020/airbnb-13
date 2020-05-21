import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '../../custom/FlexLayout/FlexLayout';
import Button from '../../custom/Button/Button';
import Icon from '../../../Icon/Icon';

const CardDetail = () => {
  return (
    <FlexLayout direction="column" align="left" gap={'1rem'} width={'100%'}>
      <FlexLayout direction="row" align="spaceBetween">
        <div>
          <span>슈퍼호스트</span>
          <span>프랑스</span>
        </div>
        <div>
          <Icon icon="star" color="#ff5a5f" size={'10px'} />
          <span>4.89</span>
        </div>
      </FlexLayout>
      <div>CHARMING HOUSE SeaSide & Pine...</div>
      <div>
        <span>\271,900</span>
        <span>\239,816</span>
        <span>/1박</span>
      </div>
      <FlexLayout direction="row" align="spaceBetween">
        <div>
          <span>총 요금:</span>
          <span>\3,527,426</span>
        </div>
        <Button theme={'primary'} fontSize={'medium'} width={'25%'}>
          예약
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};

export default CardDetail;
