/**@jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  direction: 'row' | 'column';
  align: 'right' | 'left' | 'spaceBetween';
  gap: number | string;
  children: React.ReactNode;
};

const ButtonGroup = ({ direction, align, gap, children }: ButtonGroupProps) => {
  return (
    <div css={[{ display: 'flex', flexDirection: direction }, alignStyle(align), gapStyle(direction, gap)]}>
      {children}
    </div>
  );
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': {
      [marginType]: gap
    }
  });
};

const getAlignStyleName = (align: 'right' | 'left' | 'spaceBetween') => {
  if (align === 'right') {
    return 'flex-end';
  }
  if (align === 'left') {
    return 'flex-start';
  }
  return 'space-between';
};

const alignStyle = (align: 'right' | 'left' | 'spaceBetween') => {
  const targetAlign = getAlignStyleName(align);
  return css`
    justify-content: ${targetAlign};
  `;
};

export default ButtonGroup;
