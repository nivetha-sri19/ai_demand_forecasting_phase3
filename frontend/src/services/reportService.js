import {
  getReports,
  generateReport
} from '../api/reportApi';

export const reportsService =
  async () => {

    try {

      return await getReports();

    } catch (error) {

      throw error;
    }
  };

export const createReportService =
  async (data) => {

    try {

      return await generateReport(data);

    } catch (error) {

      throw error;
    }
  };