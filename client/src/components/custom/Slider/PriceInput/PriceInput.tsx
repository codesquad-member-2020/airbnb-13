/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import { SliderValue } from '../Slider';

type PriceInputProp = {
  price: SliderValue;
  setPrice: (price: number) => void;
  title: string;
};

const PriceInput = ({ price, setPrice, title }: PriceInputProp) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valuePrice = e.target.value ? parseInt(e.target.value) : 0;
    setPrice(valuePrice);
  };

  return (
    <FlexLayout direction="column" align="left" width={'200px'} customCSS={wrapperStyle}>
      <span>{title}</span>
      <FlexLayout direction="row" align="left" width={'200px'} customCSS={inputWrapper}>
        <span>&#8361;</span>
        <input value={price.value} css={inputStyle} onChange={inputHandler} />
      </FlexLayout>
    </FlexLayout>
  );
};

const wrapperStyle = css`
  border: 1px solid #4b4b4b;
  padding: 0.5rem;
`;

const inputWrapper = css`
  margin-top: 5px;
`;

const inputStyle = css`
  border: 0;
  margin-left: 5px;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;

  font-size: 13px;
  font-family: Arial;
  &:focus {
    outline: none;
  }
`;

export default PriceInput;
