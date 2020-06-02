/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon from '$Icon/Icon';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';

const Header = () => {
  return (
    <FlexLayout direction="row" align="spaceAround" alignItemCenter={true} customCSS={headerStyle}>
      <FlexLayout direction="row" align="left" alignItemCenter={true}>
        <Icon icon="hotel" />
        <span>airbnb</span>
      </FlexLayout>
      <FlexLayout direction="row" align="right" alignItemCenter={true} width="20%">
        <a css={aStyle} href="https://github.com/codesquad-member-2020/airbnb-13">
          도움말
        </a>
        <Button theme={'secondary'} fontSize={'small'} width="30%">
          로그인
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};

const headerStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #cccccc;
  width: 100%;
  height: 40px;
  z-index: 100;
`;

const aStyle = css`
  color: #fff;
  text-decoration: none;
  outline: none;
  &:hover,
  &:active {
    text-decoration: none;
    color: #fff;
    background-color: #f59000;
  }
`;

export default Header;
