/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import theme from '@/style/theme';

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
      background-color: ${theme.colors.gray};
    `;
  }
  return css`
    height: ${height}px;
    width: 30px;
    background-color: ${theme.colors.lightGray};
  `;
};

export default Bar;
