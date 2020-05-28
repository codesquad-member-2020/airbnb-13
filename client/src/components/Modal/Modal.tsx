/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';

type modalProp = {
  content: () => JSX.Element | null;
};
const Modal = ({ content }: modalProp) => {
  return <div>{content()}</div>;
};

export default Modal;
