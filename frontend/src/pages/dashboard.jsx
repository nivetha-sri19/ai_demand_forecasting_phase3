import AnalyticsCards from "../components/dashboard/AnalyticsCards";
import ForecastChart from "../components/charts/ForecastChart";
import Filters from "../components/dashboard/Filters";
import RecentActivities from "../components/dashboard/RecentActivities";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          AI Forecast Dashboard
        </h1>
      </div>

      <Filters />

      <AnalyticsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ForecastChart />
        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;