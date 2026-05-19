import {
  useEffect,
  useState,
} from "react";

const useFetch = (
  apiFunction,
  params = []
) => {
  const [data, setData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response =
        await apiFunction(...params);

      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useFetch;