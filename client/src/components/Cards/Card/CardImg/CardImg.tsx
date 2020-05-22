/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type CardImgProp = {
  thumbnail?: string;
};
const CardImg = ({ thumbnail }: CardImgProp) => {
  const src = thumbnail
    ? thumbnail
    : 'https://file.intereuro.co.kr/Puzzle/ProductTourImg/ProductTourImg_2018920143535_359_84_2.jpeg';
  return (
    <div css={imgWrapper}>
      <img src={src}></img>
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
