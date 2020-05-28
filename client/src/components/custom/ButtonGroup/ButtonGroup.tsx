import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측에 보여줍니다 */
  rightAlign?: boolean;
  /** 버튼과 버튼 사이의 간격 */
  gap: string | number;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /** 버튼을 커스텀마이징 하고 싶을 때 사용 */
  className?: string;
};

const ButtonGroup = ({ direction, rightAlign, gap, children, className }: ButtonGroupProps) => {
  return (
    <div
      css={[{ display: 'flex', flexDirection: direction }, gapStyle(direction, gap), rightAlign && rightAlignStyle]}
      className={className}>
      {children}
    </div>
  );
};

const gapStyle = (direction: 'row' | 'column', gap: string | number) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap
    }
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
};

export default ButtonGroup;
