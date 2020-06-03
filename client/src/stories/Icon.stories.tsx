/**@jsx jsx */
import { jsx } from '@emotion/core';
import Icon from '$Icon/Icon';

export default {
  component: Icon,
  title: 'components|Icon'
};

export const closeIcon = () => <Icon icon="close" />;

export const plusIcon = () => <Icon icon="plus" />;

export const minusIcon = () => <Icon icon="minus" />;

export const redIcon = () => <Icon icon="minus" color="red" />;

export const sizedIcon = () => <Icon icon="plus" color="red" size="200px" />;
