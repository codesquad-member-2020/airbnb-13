/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import PriceFilterWithButton from './PriceFilter/PriceFilterWithButton/PriceFilterWithButton';
import GuestFilterWithButton from './GuestFilter/GuestFilterWithButton/GuestFilterWithButton';
import DateFilter from './DateFilter/DateFilter';
import Button from '@Custom/Button/Button';
import useFetch from '$Util/customHooks/useFetch';
import { CardProp } from '@/components/Cards/Card/Card';
import { useDispatch } from 'react-redux';
import { getNextCardSet } from '@Action/cardAction';

const Filters = () => {
  const [diffDays, setDays] = useState(0); //redux.....
  const [cards, setCards] = useState<CardProp[]>([]);
  //const clickHandle = () => useFetch((cardData) => dispatch(setCardData(cardData)), "url");
  const dispatch = useDispatch();
  return (
    <FlexLayout direction={'row'} align={'left'} gap={'10px'}>
      <DateFilter setDays={setDays} />
      <GuestFilterWithButton />
      <PriceFilterWithButton />
      <div css={buttonStyle}>
        <Button theme={'primary'} fontSize={'medium'} width={'80px'} onClick={() => dispatch(getNextCardSet())}>
          조회하기
        </Button>
      </div>
    </FlexLayout>
  );
};

export default Filters;

const buttonStyle = css`
  height: 40px;
`;
