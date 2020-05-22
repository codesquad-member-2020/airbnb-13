// import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

const SuperHost = () => {
  return <span css={superHostStyle}>슈퍼호스트</span>;
};

const superHostStyle = (theme: any) => css`
  font-size: ${theme.fontSizes.micro};
  color: ${theme.colors.darkGray};
  border: 1px solid ${theme.colors.darkGray};
  padding: 0.1rem;
  border-radius: 0.25rem;
  margin-right: 0.25rem;
`;

export default SuperHost;
