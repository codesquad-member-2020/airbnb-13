/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import Icon from '$Icon/Icon';

export type RowProp = {
  type: string;
  range: string;
  count: number;
  setCount: Function;
};

const Row = ({ type, range, count, setCount }: RowProp) => {
  return (
    <FlexLayout direction={'row'} align={'spaceBetween'} width={'100%'}>
      <FlexLayout direction={'column'} align={'left'}>
        <div css={theme => ({ fontSize: theme.fontSizes.regular })}>{type}</div>
        <span css={theme => ({ fontSize: theme.fontSizes.small })}>{range}</span>
      </FlexLayout>
      <FlexLayout direction={'row'} align={'spaceAround'} width={'40%'} alignItemCenter={true}>
        <Button
          theme={'subtle'}
          width={'40px'}
          fontSize={'big'}
          circle={true}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}>
          <Icon icon="minus" size="15px" />
        </Button>
        <span css={theme => ({ fontSize: theme.fontSizes.large })}>{count}</span>
        <Button
          theme={'subtle'}
          width={'40px'}
          fontSize={'big'}
          circle={true}
          onClick={() => setCount(count + 1)}
          disabled={count === 8}>
          <Icon icon="plus" size="15px" />
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};

export default Row;
