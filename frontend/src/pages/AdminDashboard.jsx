import SystemAnalytics from "../components/admin/SystemAnalytics";

import UserManagement from "../components/admin/UserManagement";

import DatasetManagement from "../components/admin/DatasetManagement";

import ActivityMonitor from "../components/admin/ActivityMonitor";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <SystemAnalytics />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UserManagement />

        <DatasetManagement />
      </div>

      <ActivityMonitor />
    </div>
  );
};

export default AdminDashboard;