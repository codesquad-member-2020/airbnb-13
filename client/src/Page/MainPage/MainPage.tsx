/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Filters from '@Filters/Filters';
import Cards from '@Cards/Cards';

const MainPage = () => {
  return (
    <div>
      <div css={wrapStyle}>
        <Filters />
        <Cards />
      </div>
    </div>
  );
};

export default MainPage;

const wrapStyle = css`
  max-width: 900px;
  margin: 80px auto;
`;
