import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    model: "ARIMA",
    accuracy: 89,
  },
  {
    model: "LSTM",
    accuracy: 95,
  },
  {
    model: "XGBoost",
    accuracy: 92,
  },
];

const AccuracyChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Model Accuracy
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="model" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="accuracy"
            fill="#2563EB"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccuracyChart;