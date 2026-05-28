import AnalyticsCards from '../../components/dashboard/AnalyticsCards';
import ForecastSummary from '../../components/dashboard/ForecastSummary';
import RecentActivities from '../../components/dashboard/RecentActivities';
import QuickStats from '../../components/dashboard/QuickStats';
import KPISection from '../../components/dashboard/KPISection';

import ForecastChart from '../../components/charts/ForecastChart';
import RevenueChart from '../../components/charts/RevenueChart';
import AccuracyChart from '../../components/charts/AccuracyChart';

const Dashboard = () => {
  return (
    <div className="space-y-6">

      <AnalyticsCards />

      <KPISection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <ForecastChart />

        <RevenueChart />

      </div>

      <AccuracyChart />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <ForecastSummary />

        <QuickStats />

      </div>

      <RecentActivities />

    </div>
  );
};

export default Dashboard;