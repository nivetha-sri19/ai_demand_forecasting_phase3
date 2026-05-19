import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "North",
    value: 400,
  },
  {
    name: "South",
    value: 300,
  },
  {
    name: "East",
    value: 200,
  },
  {
    name: "West",
    value: 250,
  },
];

const COLORS = [
  "#2563EB",
  "#60A5FA",
  "#93C5FD",
  "#BFDBFE",
];

const RegionChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Region Analytics
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionChart;b