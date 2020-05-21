import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type ButtonProps = {
  children: React.ReactNode;
  theme: 'primary' | 'secondary' | 'nooutline' | 'subtle';
  fontSize: 'small' | 'medium' | 'big';
  width: string | number;
  disabled?: boolean;
  circle?: boolean;
};

const Button = ({ children, theme, fontSize, width, disabled, circle }: ButtonProps) => {
  return (
    <button
      css={[style, makeCircleStyle(circle, width), themes[theme], fontSizes[fontSize], { width }]}
      disabled={disabled}>
      {children}
    </button>
  );
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  padding: 0.5rem 0;
  border-radius: 0.25rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const themes = {
  primary: css`
    background: #ff5a5f;
    &:hover:enabled {
      background: #cc373c;
    }
  `,
  secondary: css`
    background: #484848;
    &:hover:enabled {
      background: #7b7b7b;
    }
  `,
  nooutline: css`
    background: none;
    color: #484848;
    text-decoration: underline;
    &:hover:enabled {
      color: #7b7b7b;
    }
  `,
  subtle: css`
    background: #ffffff;
    border-color: #999999;
    color: #4b4b4b;
    svg {
      fill: #999999;
    }
    &:disabled {
      color: #cccccc;
      svg {
        fill: #cccccc;
      }
    }
  `
};

const fontSizes = {
  small: css`
    font-size: 0.45rem;
  `,
  medium: css`
    font-size: 0.75rem;
  `,
  big: css`
    font-size: 1.15rem;
  `
};

const makeCircleStyle = (circle: boolean | undefined, width: number | string) => {
  if (circle) {
    return css`
      width: ${width};
      height: ${width};
      border-radius: 50%;
      border: 1px solid #7b7b7b;
    `;
  }
  return css``;
};

export default Button;
