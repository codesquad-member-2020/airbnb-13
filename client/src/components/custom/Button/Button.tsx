import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type ButtonProps = {
  children: React.ReactNode;
  theme: 'primary' | 'secondary' | 'tertiary';
  fontSize: 'small' | 'medium' | 'big';
  width: string | number;
  disabled?: boolean;
};

const Button = ({ children, theme, fontSize, width, disabled }: ButtonProps) => {
  return (
    <button css={[style, themes[theme], fontSizes[fontSize], { width }]} disabled={disabled}>
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
  tertiary: css`
    background: none;
    color: #484848;
    text-decoration: underline;
    &:hover:enabled {
      color: #7b7b7b;
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

export default Button;
