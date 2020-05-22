import { useState, useEffect } from 'react';

const useFetch = (callback: Function, url: string) => {
  const [loading, setLoading] = useState(true);
  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const fetchData = await response.json();
    if (!fetchData.status) return;
    callback(fetchData.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};

export default useFetch;
