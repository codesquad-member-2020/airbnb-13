import React from 'react';
import Reservation from '@/components/Modal/Reservation/Reservation';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|Reservation',
  component: Reservation
};

export const reservation = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reservation />
    </ThemeProvider>
  );
};
