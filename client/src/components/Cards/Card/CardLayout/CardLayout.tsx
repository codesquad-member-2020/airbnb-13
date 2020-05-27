/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactNode } from 'react';

export type CardLayoutProps = {
  children: ReactNode;
  gap?: number | string;
  width?: string | number;
  top: string | number;
};

const CardLayout = ({ children, gap, width, top }: CardLayoutProps) => {
  return <div css={[style, gapStyle(gap), topStyle(top), { width }]}>{children}</div>;
};

export default CardLayout;

const style = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const topStyle = (top: string | number) => {
  return css({
    '> *': {
      marginTop: top
    },
    '> *:nth-of-type(n+1):nth-of-type(-n+3)': {
      marginTop: 0
    }
  });
};

const gapStyle = (gap: number | string | undefined) => {
  if (!gap) {
    return css``;
  }

  return css({
    '> *:not(:nth-of-type(3n+1))': {
      marginLeft: gap
    }
  });
};
