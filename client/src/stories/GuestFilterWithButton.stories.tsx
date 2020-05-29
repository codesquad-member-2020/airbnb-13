import React, { useState } from 'react';
import GuestFilterWithButton from '@/components/Filters/GuestFilter/GuestFilterWithButton/GuestFilterWithButton';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|GuestFilterWithButton',
  component: GuestFilterWithButton
};

export const guestFilter = () => {
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <GuestFilterWithButton
        adult={adult}
        setAdult={setAdult}
        child={child}
        setChild={setChild}
        baby={baby}
        setBaby={setBaby}
      />
    </ThemeProvider>
  );
};
