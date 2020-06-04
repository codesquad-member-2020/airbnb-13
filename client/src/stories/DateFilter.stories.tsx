import React, { useState } from 'react';
import DateFilter from '@Filters/DateFilter/DateFilter';

export default {
  title: 'components|Date',
  component: DateFilter
};

type FilterProp = {
  guest: boolean;
  price: boolean;
};

export const dateFilter = () => {
  const [focus, setFocused] = useState<FilterProp>({ guest: false, price: false });
  return <DateFilter setFocus={setFocused} />;
};
