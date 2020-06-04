import { useEffect, RefObject, Dispatch, SetStateAction } from 'react';
import { FilterFocus } from '@Filters/Filters';

const useOutsideAlerter = (ref: RefObject<HTMLDivElement>, setFocus: Dispatch<SetStateAction<FilterFocus>>) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const eventTarget = event.target as Node;
      if (ref.current && !ref.current.contains(eventTarget)) {
        setFocus({ price: false, guest: false });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export default useOutsideAlerter;
