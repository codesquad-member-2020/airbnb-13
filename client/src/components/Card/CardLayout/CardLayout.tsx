import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type CardLayoutProps = {
  children: React.ReactNode;
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
      'margin-top': top
    },
    '> *:nth-child(n+1):nth-child(-n+3)': {
      'margin-top': 0
    }
  });
};

const gapStyle = (gap: number | string | undefined) => {
  if (!gap) {
    return css``;
  }

  return css({
    '> *:not(:nth-child(3n+1))': {
      'margin-left': gap
    }
  });
};
