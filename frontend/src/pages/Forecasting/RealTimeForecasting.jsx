import RealTimeForecast from '../../components/forecasting/RealTimeForecast';
import LivePredictionCard from '../../components/forecasting/LivePredictionCard';

const RealTimeForecasting = () => {
  return (
    <div className="space-y-6">

      <LivePredictionCard />

      <RealTimeForecast />

    </div>
  );
};

export default RealTimeForecasting;