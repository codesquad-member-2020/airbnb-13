/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core';
import { ReactNode, MutableRefObject } from 'react';

export type FlexLayoutProps = {
  children: ReactNode;
  direction: 'column' | 'row';
  align: 'left' | 'right' | 'spaceAround' | 'spaceBetween';
  wrap?: boolean;
  gap?: number | string;
  width?: string | number;
  alignItemCenter?: boolean;
  customCSS?: SerializedStyles;
  refFlexLayout?: ((instance: HTMLDivElement | null) => void) | null;
};

const FlexLayout = ({
  children,
  direction,
  wrap,
  align,
  gap,
  width,
  alignItemCenter,
  customCSS,
  refFlexLayout
}: FlexLayoutProps) => {
  const cssArray = [
    style,
    alignItemCenterStyle(alignItemCenter),
    directionStyle(direction),
    gapStyle(direction, gap),
    alignStyle(align),
    wrapStyle(wrap),
    { width }
  ];
  customCSS && cssArray.push(customCSS);
  return (
    <div ref={refFlexLayout} css={cssArray}>
      {children}
    </div>
  );
};

export default FlexLayout;

const style = css`
  display: flex;
`;

const alignItemCenterStyle = (alignItemCenter: boolean | undefined) => {
  if (!alignItemCenter) {
    return css``;
  }
  return css`
    align-items: center;
  `;
};

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
    '> *:not(:first-of-type)': {
      [marginType]: gap
    }
  });
};
