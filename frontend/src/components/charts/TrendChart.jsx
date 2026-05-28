import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';

const data = [
  { month: 'Jan', trend: 120 },
  { month: 'Feb', trend: 220 },
  { month: 'Mar', trend: 180 },
  { month: 'Apr', trend: 300 }
];

const TrendChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Market Trends
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <AreaChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="trend"
            stroke="#7c3aed"
            fill="#c4b5fd"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
};

export default TrendChart;