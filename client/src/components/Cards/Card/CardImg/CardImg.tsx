/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type CardImgProp = {
  thumbnail: string;
};
const CardImg = ({ thumbnail }: CardImgProp) => {
  return (
    <div css={imgWrapper}>
      <img src={thumbnail}></img>
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
