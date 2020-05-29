import React from 'react';
import FilterButton from '@Custom/FilterButton/FilterButton';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  title: 'components|FilterButton',
  component: FilterButton
};

export const filterButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <FilterButton focused={false} onClick={() => {}}>
        button
      </FilterButton>
    </ThemeProvider>
  );
};
