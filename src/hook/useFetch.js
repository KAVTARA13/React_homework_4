import { useState, useEffect } from 'react';

const useFetch = (url = '', options = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        if (isMounted) {
          setData(result);
        } else {
          console.log('useFetch result else');
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setData(null);
        } else {
          console.log('useFetch catch else');
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return {
    loading,
    error,
    data,
  };
};

export default useFetch;