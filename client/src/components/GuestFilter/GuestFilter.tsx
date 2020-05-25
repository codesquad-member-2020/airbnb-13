/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Row from './Row/Row';
import Button from '@Custom/Button/Button';

const GuestFilter = () => {
  return (
    <div css={style}>
      <FlexLayout direction={'column'} align={'left'} gap={'1rem'}>
        <Row type="성인" range={'만 13세 이상'} />
        <Row type="어린이" range={'2~12세'} />
        <Row type="유아" range={'2세 미만'} />
      </FlexLayout>
      <FlexLayout direction={'row'} align={'spaceBetween'} customCSS={customCSS}>
        <Button theme={'nooutline'} fontSize="medium" width={'3rem'}>
          지우기
        </Button>
        <Button theme={'secondary'} fontSize="medium" width={'3rem'}>
          저장
        </Button>
      </FlexLayout>
    </div>
  );
};

const style = css`
  width: 400px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  position: absolute;
`;

const customCSS = css`
  border-top: 1px solid #eeeeee;
  margin-top: 2rem;
  padding-top: 1rem;
`;

export default GuestFilter;
