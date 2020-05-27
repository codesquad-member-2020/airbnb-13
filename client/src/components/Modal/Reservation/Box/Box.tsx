/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactNode } from 'react';

type BoxProp = {
  children: ReactNode;
  width: string;
};

const Box = ({ width, children }: BoxProp) => {
  return <div css={[boxStyle, { width }]}>{children}</div>;
};

const boxStyle = css`
  border: 1px solid #000000;
`;

export default Box;
