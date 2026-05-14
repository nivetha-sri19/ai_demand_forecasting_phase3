import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {

  const cards = [
    {
      title: "Total Sales",
      value: "₹4.2M",
    },
    {
      title: "Forecast Accuracy",
      value: "94%",
    },
    {
      title: "Products",
      value: "128",
    },
    {
      title: "Predictions",
      value: "2,430",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-2">
            AI Demand Dashboard
          </h1>

          <p className="text-gray-400 mb-10">
            Real-time analytics and forecasting
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 rounded-3xl shadow-xl hover:scale-105 transition-all duration-300"
              >

                <h2 className="text-gray-400 text-lg">
                  {card.title}
                </h2>

                <p className="text-4xl font-bold mt-4 text-cyan-400">
                  {card.value}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Sales Overview
              </h2>

              <div className="h-64 rounded-2xl bg-slate-800 flex items-center justify-center text-gray-400">
                Chart Section
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Forecast Insights
              </h2>

              <div className="space-y-4">

                <div className="p-4 rounded-2xl bg-slate-800">
                  Product A demand may increase by 22%
                </div>

                <div className="p-4 rounded-2xl bg-slate-800">
                  Seasonal trend detected in electronics
                </div>

                <div className="p-4 rounded-2xl bg-slate-800">
                  Inventory optimization recommended
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;