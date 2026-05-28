import ReportTable from '../../components/reports/ReportTable';
import ReportViewer from '../../components/reports/ReportViewer';
import ExportButtons from '../../components/reports/ExportButtons';
import ReportFilters from '../../components/reports/ReportFilters';

const Reports = () => {
  return (
    <div className="space-y-6">

      <ReportFilters />

      <ExportButtons />

      <ReportViewer />

      <ReportTable />

    </div>
  );
};

export default Reports;