import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 6500 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 9000 }
];

const RevenueChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Revenue Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="#16a34a"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default RevenueChart;