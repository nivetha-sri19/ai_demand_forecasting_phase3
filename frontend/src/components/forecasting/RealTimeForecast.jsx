import { useEffect, useState } from 'react';

const RealTimeForecast = () => {

  const [forecast, setForecast] = useState(450);

  useEffect(() => {

    const interval = setInterval(() => {

      setForecast((prev) =>
        prev + Math.floor(Math.random() * 20)
      );

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Real-Time Forecast
      </h2>

      <div className="text-center">

        <h1 className="text-6xl font-bold text-blue-600">
          {forecast}
        </h1>

        <p className="text-gray-500 mt-3">
          Predicted Sales Units
        </p>

      </div>

    </div>
  );
};

export default RealTimeForecast;