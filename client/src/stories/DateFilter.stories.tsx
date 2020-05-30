import React, { useState } from 'react';
import DateFilter from '@Filters/DateFilter/DateFilter';

export default {
  title: 'components|Date',
  component: DateFilter
};

const Temp = () => {
  const [days, setDays] = useState(0);
  return (
    <div>
      <DateFilter setDays={setDays} />
    </div>
  );
};

export const dateFilter = () => {
  return <Temp />;
};
