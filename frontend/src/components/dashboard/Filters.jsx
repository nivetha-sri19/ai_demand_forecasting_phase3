import { useState } from "react";

const Filters = () => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    category: "",
    region: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-5">
        Filters
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <select
          name="category"
          value={filters.category}
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
          value={filters.region}
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
      </div>
    </div>
  );
};

export default Filters;