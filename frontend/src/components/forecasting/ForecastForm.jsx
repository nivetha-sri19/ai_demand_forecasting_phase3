import { useState } from "react";

import {
  generateForecast,
} from "../../api/forecastApi";

const ForecastForm = () => {
  const [formData, setFormData] = useState({
    product: "",
    category: "",
    region: "",
    model: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response =
        await generateForecast(formData);

      setResult(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Generate Forecast
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={formData.product}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">
            Select Category
          </option>

          <option value="Frozen Foods">
            Frozen Foods
          </option>

          <option value="Ice Cream">
            Ice Cream
          </option>

          <option value="Beverages">
            Beverages
          </option>
        </select>

        <select
          name="region"
          value={formData.region}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">
            Select Region
          </option>

          <option value="North">
            North
          </option>

          <option value="South">
            South
          </option>

          <option value="East">
            East
          </option>

          <option value="West">
            West
          </option>
        </select>

        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option value="">
            Select Model
          </option>

          <option value="ARIMA">
            ARIMA
          </option>

          <option value="LSTM">
            LSTM
          </option>

          <option value="XGBoost">
            XGBoost
          </option>
        </select>

        <button className="bg-blue-600 text-white py-3 rounded-xl md:col-span-2">
          {loading
            ? "Generating..."
            : "Generate Forecast"}
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-blue-50 p-5 rounded-xl">
          <h3 className="text-xl font-semibold">
            Forecast Result
          </h3>

          <p className="mt-3 text-gray-700">
            Predicted Demand:
            {" "}
            <span className="font-bold">
              {result.prediction}
            </span>
          </p>

          <p className="mt-2 text-gray-700">
            Accuracy:
            {" "}
            <span className="font-bold">
              {result.accuracy}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ForecastForm;