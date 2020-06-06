/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactNode } from 'react';
import theme from '@/style/theme';

type BoxProp = {
  children: ReactNode;
  width: string;
};

const Box = ({ width, children }: BoxProp) => {
  return <div css={[boxStyle, { width }]}>{children}</div>;
};

const boxStyle = css`
  border: 1px solid ${theme.colors.gray};
  border-radius: 5px;
  height: 40px;
  color: ${theme.colors.darkGray};
  box-sizing: border-box;
`;

export default Box;
