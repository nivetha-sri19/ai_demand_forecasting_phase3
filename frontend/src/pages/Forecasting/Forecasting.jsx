import ForecastForm from '../../components/forecasting/ForecastForm';
import ForecastHistory from '../../components/forecasting/ForecastHistory';
import ModelComparison from '../../components/forecasting/ModelComparison';
import AIRecommendation from '../../components/forecasting/AIRecommendation';
import ForecastFilters from '../../components/forecasting/ForecastFilters';

const Forecasting = () => {
  return (
    <div className="space-y-6">

      <ForecastFilters />

      <ForecastForm />

      <ModelComparison />

      <AIRecommendation />

      <ForecastHistory />

    </div>
  );
};

export default Forecasting;