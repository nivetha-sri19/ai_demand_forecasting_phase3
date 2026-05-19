import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    day: "Mon",
    activities: 20,
  },
  {
    day: "Tue",
    activities: 35,
  },
  {
    day: "Wed",
    activities: 45,
  },
  {
    day: "Thu",
    activities: 60,
  },
  {
    day: "Fri",
    activities: 40,
  },
];

const ActivityChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Forecast Activities
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="activities"
            stroke="#2563EB"
            fill="#93C5FD"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;