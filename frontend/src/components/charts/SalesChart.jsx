import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const data = [
  { month: 'Jan', sales: 100 },
  { month: 'Feb', sales: 250 },
  { month: 'Mar', sales: 200 },
  { month: 'Apr', sales: 450 }
];

const SalesChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Sales Analytics
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#dc2626"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default SalesChart;