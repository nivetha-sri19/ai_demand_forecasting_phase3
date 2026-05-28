import UserManagement from '../../components/admin/UserManagement';
import DatasetManagement from '../../components/admin/DatasetManagement';
import ActivityMonitor from '../../components/admin/ActivityMonitor';
import SystemAnalytics from '../../components/admin/SystemAnalytics';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <UserManagement />

        <DatasetManagement />

      </div>

      <ActivityMonitor />

      <SystemAnalytics />

    </div>
  );
};

export default AdminDashboard;