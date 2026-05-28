import {
  useEffect,
  useState
} from 'react';

const useRealtime = () => {

  const [liveData, setLiveData] =
    useState(500);

  useEffect(() => {

    const interval = setInterval(() => {

      setLiveData((prev) =>
        prev + Math.floor(Math.random() * 20)
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return liveData;
};

export default useRealtime;