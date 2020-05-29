/**@jsx jsx */
import { jsx } from '@emotion/core';
import Row from '@/components/GuestFilter/Row/Row';
import { ThemeProvider } from 'emotion-theming';
import theme from '$Style/theme';

export default {
  component: Row,
  title: 'components|Row'
};

export const row = () => {
  return (
    <ThemeProvider theme={theme}>
      <Row type="성인" range={'만 13세 이상'} />
    </ThemeProvider>
  );
};
