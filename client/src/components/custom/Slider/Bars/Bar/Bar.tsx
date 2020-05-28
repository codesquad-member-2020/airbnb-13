/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type BarProp = {
  height: number;
  isOn: boolean;
};

const Bar = ({ height, isOn }: BarProp) => {
  return <div css={[barStyle(isOn, height)]}></div>;
};

const barStyle = (isOn: boolean, height: number) => {
  if (isOn) {
    return css`
      height: ${height}px;
      width: 30px;
      background-color: green;
    `;
  }
  return css`
    height: ${height}px;
    width: 30px;
    background-color: red;
  `;
};

export default Bar;
