/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon from '$Icon/Icon';
import { Link } from 'react-router-dom';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import { useDispatch } from 'react-redux';
import { turnOnModal } from '@Action/modalAction';
import { isLogin, logout } from '$Util/cookie/cookie';
import theme from '@/style/theme';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <FlexLayout direction="row" align="spaceBetween" alignItemCenter={true} customCSS={headerStyle}>
      <FlexLayout direction="row" align="left" alignItemCenter={true}>
        <Icon icon="airbnb" size="80px" color={theme.colors.primary} />
      </FlexLayout>
      <FlexLayout direction="row" align="right" alignItemCenter={true} width="20%" customCSS={rightStyle}>
        <a css={aStyle} href="https://github.com/codesquad-member-2020/airbnb-13">
          도움말
        </a>
        {!isLogin('jwt') ? (
          <Button theme={'primary'} fontSize={'small'} width="30%" onClick={() => dispatch(turnOnModal('Login'))}>
            로그인
          </Button>
        ) : (
          <FlexLayout direction="row" width="70%" align="left" alignItemCenter={true} customCSS={rightStyle}>
            <Button theme={'secondary'} fontSize={'small'} width="45%" onClick={() => logout()}>
              로그아웃
            </Button>
            <Link
              to={'/mypage'}
              css={css`
                width: 50%;
                text-decoration: none;
              `}>
              <Button theme={'primary'} fontSize={'small'} width="100%">
                마이페이지
              </Button>
            </Link>
          </FlexLayout>
        )}
      </FlexLayout>
    </FlexLayout>
  );
};

const headerStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0px 1px 10px rgba(108, 106, 106, 0.3);
  width: 100%;
  height: 60px;
  z-index: 100;
  padding: 0 50px;
  box-sizing: border-box;
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

const rightStyle = css`
  & > * {
    margin-left: 5px;
  }
`;

export default Header;
