import React from 'react';
import GuestFilter from '@/components/GuestFilter/GuestFilter';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|GuestFilter',
  component: GuestFilter
};

export const guestFilter = () => {
  return (
    <ThemeProvider theme={theme}>
      <GuestFilter></GuestFilter>
    </ThemeProvider>
  );
};
