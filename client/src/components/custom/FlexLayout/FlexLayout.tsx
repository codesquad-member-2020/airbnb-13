import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type FlexLayoutProps = {
  children: React.ReactNode;
  direction: 'column' | 'row';
  align: 'left' | 'right' | 'spaceAround' | 'spaceBetween';
  wrap?: boolean;
  gap?: number | string;
  width?: string | number;
};

const FlexLayout = ({ children, direction, wrap, align, gap, width }: FlexLayoutProps) => {
  return (
    <div
      css={[style, directionStyle(direction), gapStyle(direction, gap), alignStyle(align), wrapStyle(wrap), { width }]}>
      {children}
    </div>
  );
};

export default FlexLayout;

const style = css`
  display: flex;
`;

const directionStyle = (direction: 'column' | 'row') => {
  return css`
    flex-direction: ${direction};
  `;
};

const getAlignStyleName = (align: 'right' | 'left' | 'spaceAround' | 'spaceBetween') => {
  if (align === 'right') {
    return 'flex-end';
  }
  if (align === 'left') {
    return 'flex-start';
  }
  if (align === 'spaceAround') {
    return 'space-around';
  }

  return 'space-between';
};

const alignStyle = (align: 'left' | 'right' | 'spaceAround' | 'spaceBetween') => {
  return css`
    justify-content: ${getAlignStyleName(align)};
  `;
};

const wrapStyle = (wrap: boolean | undefined) => {
  if (wrap) {
    return css`
      flex-wrap: wrap;
    `;
  }
  return css``;
};

const gapStyle = (direction: 'row' | 'column', gap: number | string | undefined) => {
  if (!gap) {
    return css``;
  }
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    '> *:not(:first-child)': {
      [marginType]: gap
    }
  });
};
