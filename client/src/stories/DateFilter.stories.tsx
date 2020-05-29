import React, { useState } from 'react';
import DateFilter from '@/components/Filters/DateFilter/DateFilter';

export default {
  title: 'components|Date',
  component: DateFilter
};

const Temp = () => {
  const [days, setDays] = useState(0);
  const [startDateStr, setStartDateStr] = useState('');
  const [endDateStr, setEndDateStr] = useState('');
  return (
    <div>
      <DateFilter setDays={setDays} setStartDateStr={setStartDateStr} setEndDateStr={setEndDateStr} />
    </div>
  );
};

export const dateFilter = () => {
  return <Temp />;
};
