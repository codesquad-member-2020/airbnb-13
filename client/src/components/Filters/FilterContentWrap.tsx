import React, { useRef, ReactNode, Dispatch, SetStateAction } from 'react';
import useFocusOutEvent from '@/util/customHooks/useFocusOutEvent';
import { FilterFocus } from '@Filters/Filters';

type FilterWrapProp = {
  children: ReactNode;
  setFocus: Dispatch<SetStateAction<FilterFocus>>;
};

const FilterContentWrap = ({ children, setFocus }: FilterWrapProp) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useFocusOutEvent(wrapperRef, setFocus);
  return <div ref={wrapperRef}>{children}</div>;
};

export default FilterContentWrap;
