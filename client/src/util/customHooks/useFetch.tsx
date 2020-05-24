import { useState, useEffect } from 'react';

async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const useFetch = <T,>(callback: Function, url: string) => {
  const [loading, setLoading] = useState(true);
  const fetchInitialData = async () => {
    setLoading(true);
    const fetchData = await http<T>(url);
    callback(fetchData);
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return loading;
};

export default useFetch;
