/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactNode, useState } from 'react';

export type FilterButtonProps = {
  children: ReactNode;
  focused: boolean;
  onClick: () => void;
};

const FilterButton = ({ children, focused, onClick }: FilterButtonProps) => {
  return (
    <button css={style(focused)} onClick={onClick}>
      {children}
    </button>
  );
};

const style = (focused: boolean) => (theme: any) => css`
  outline: none;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  border: ${focused ? '1px solid transparent' : `1px solid ${theme.colors.gray}`};
  border-radius: 1.5rem;
  background-color: #ffffff;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.darkGray};
  font-size: 0.75rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &::after {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: ${focused ? `2px solid ${theme.colors.darkGray}` : 'none'};
    border-radius: 1.5rem;
    top: 0;
    left: 0;
    ${focused && "content: ''"};
  }
`;

export default FilterButton;
