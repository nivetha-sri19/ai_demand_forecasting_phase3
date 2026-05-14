function DashboardCards({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <p className="text-3xl font-bold mt-4 text-slate-800">
        {value}
      </p>
    </div>
  );
}

export default DashboardCards;