/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import FlexLayout from '@Custom/FlexLayout/FlexLayout';
import Button from '@Custom/Button/Button';
import Icon from '$Icon/Icon';
import SuperHost from './SuperHost/SuperHost';
import { turnOnModal } from '@Action/modalAction';
import { useDispatch } from 'react-redux';

export type CardDetailProp = {
  superHost: boolean;
  location: string;
  title: string;
  price: number;
  reviewScore: number;
  discountPrice: number | null;
  totalPrice: number;
};

const CardDetail = ({ superHost, location, title, price, reviewScore, discountPrice, totalPrice }: CardDetailProp) => {
  const dispatch = useDispatch();
  const turnOnReservationModal = () => {
    dispatch(turnOnModal('Reservation'));
  };

  return (
    <FlexLayout direction="column" align="left" gap={'1rem'} width={'100%'}>
      <FlexLayout direction="row" align="spaceBetween">
        <div>
          {superHost && <SuperHost />}
          <span css={theme => ({ fontSize: theme.fontSizes.micro, color: theme.colors.gray })}>{location}</span>
        </div>
        <div>
          <Icon icon="star" color="#ff5a5f" size={'10px'} />
          <span css={theme => ({ color: theme.colors.darkGray, marginLeft: '3px' })}>{reviewScore}</span>
        </div>
      </FlexLayout>
      <div
        css={theme => ({
          fontSize: theme.fontSizes.ragular,
          color: theme.colors.darkGray,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        })}>
        {title}
      </div>
      <div>
        {discountPrice && (
          <span
            css={theme => ({
              fontSize: theme.fontSizes.ragular,
              color: theme.colors.gray,
              marginRight: '3px',
              textDecoration: 'line-through'
            })}>
            &#8361;{price}
          </span>
        )}
        <span css={theme => ({ fontSize: theme.fontSizes.ragular, color: theme.colors.darkGray, fontWeight: 'bold' })}>
          &#8361;{discountPrice ? discountPrice : price}
        </span>
        <span>/1박</span>
      </div>
      <FlexLayout direction="row" align="spaceBetween">
        <div css={theme => ({ fontSize: theme.fontSizes.small, color: theme.colors.gray })}>
          <span>총 요금: </span>
          <span>&#8361;{totalPrice}</span>
        </div>
        <Button theme={'primary'} fontSize={'medium'} width={'25%'} onClick={turnOnReservationModal}>
          예약
        </Button>
      </FlexLayout>
    </FlexLayout>
  );
};

export default CardDetail;
