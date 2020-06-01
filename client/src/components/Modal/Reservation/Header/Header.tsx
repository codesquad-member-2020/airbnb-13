/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon from '$Icon/Icon';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';

type HeaderProp = {
  price: number;
};

const Header = ({ price }: HeaderProp) => {
  return (
    <FlexLayout direction="column" align="left" customCSS={wrapperStyle}>
      <div>
        <strong css={theme => ({ fontSize: theme.fontSizes.title3 })}>&#8361;{price}</strong>
        <span css={theme => ({ fontSize: theme.fontSizes.small, color: theme.colors.darkGray })}>/박</span>
      </div>
      <span>
        <Icon icon="star" color="green" size={'12px'} />
        <span css={theme => ({ fontSize: theme.fontSizes.small, color: theme.colors.darkGray })}>4.95</span>
        <span css={theme => ({ fontSize: theme.fontSizes.small, color: theme.colors.gray })}>(후기 95개)</span>
      </span>
    </FlexLayout>
  );
};

const wrapperStyle = css`
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export default Header;
