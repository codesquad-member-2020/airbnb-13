import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const CardImg = () => {
  return (
    <div css={imgWrapper}>
      <img src={'https://file.intereuro.co.kr/Puzzle/ProductTourImg/ProductTourImg_2018920143535_359_84_2.jpeg'}></img>
    </div>
  );
};

const imgWrapper = css`
  width: 100%;
  img {
    width: 100%;
  }
`;

export default CardImg;
