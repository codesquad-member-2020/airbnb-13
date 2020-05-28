/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import Slider from '@Custom/Slider/Slider';

const PriceFilter = () => {
  return (
    <div css={style}>
      <FlexLayout direction="column" align="left">
        <span>평균 1박 요금은 $123입니다</span>
        <Slider />
      </FlexLayout>
      <FlexLayout direction={'row'} align={'spaceBetween'} customCSS={customCSS}>
        <Button theme={'nooutline'} fontSize="medium" width={'3rem'}>
          지우기
        </Button>
        <Button theme={'secondary'} fontSize="medium" width={'3rem'}>
          저장
        </Button>
      </FlexLayout>
    </div>
  );
};

const style = css`
  width: 400px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  position: absolute;
`;

const customCSS = css`
  border-top: 1px solid #eeeeee;
  margin-top: 2rem;
  padding-top: 1rem;
`;

export default PriceFilter;
