/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';

type PriceRowProp = {
  category: string;
  price: number;
};

const PriceRow = ({ category, price }: PriceRowProp) => {
  return (
    <FlexLayout direction="row" align="spaceBetween" customCSS={wrapperStyle}>
      <span>{category}</span>
      <span>&#8361;{price}</span>
    </FlexLayout>
  );
};

const wrapperStyle = css`
  padding-top: 5px;
`;

export default PriceRow;
