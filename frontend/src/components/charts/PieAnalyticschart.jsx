import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell
} from 'recharts';

const data = [
  { name: 'Completed', value: 65 },
  { name: 'Pending', value: 25 },
  { name: 'Failed', value: 10 }
];

const COLORS = [
  '#16a34a',
  '#f59e0b',
  '#dc2626'
];

const PieAnalyticsChart = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Forecast Status
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default PieAnalyticsChart;