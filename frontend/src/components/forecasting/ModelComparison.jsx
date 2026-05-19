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

const ModelComparison = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Model Comparison
      </h2>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
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

export default ModelComparison;