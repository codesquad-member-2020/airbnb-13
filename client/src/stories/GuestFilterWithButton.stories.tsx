import React from 'react';
import GuestFilterWithButton from '@/components/GuestFilter/GuestFilterWithButton/GuestFilterWithButton';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|GuestFilterWithButton',
  component: GuestFilterWithButton
};

export const guestFilter = () => {
  return (
    <ThemeProvider theme={theme}>
      <GuestFilterWithButton />
    </ThemeProvider>
  );
};
