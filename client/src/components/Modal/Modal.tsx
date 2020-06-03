/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useDispatch } from 'react-redux';
import { turnOffModal } from '../../action/modalAction';
import Icon from '$Icon/Icon';
import Button from '@Custom/Button/Button';

type modalProp = {
  content: () => JSX.Element | null;
};

const Modal = ({ content }: modalProp) => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(turnOffModal());
  };
  return (
    <div css={modalDim}>
      <div onClick={onClickHandler} css={overlay}></div>

      <div css={modalWrap}>
        {content()}
        <div css={buttonWrapStyle}>
          <Button theme={'nooutline'} width={'15px'} fontSize={'medium'} onClick={onClickHandler}>
            <Icon icon="close" color="black" size="15px" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const modalDim = css`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 100;
`;

const overlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
`;

const modalWrap = css`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 1rem;
  z-index: 300;
`;

const buttonWrapStyle = css`
  position: absolute;
  top: 5px;
  right: 10px;
`;
