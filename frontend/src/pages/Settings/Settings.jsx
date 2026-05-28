import ThemeToggle from '../../components/common/ThemeToggle';

const Settings = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Application Settings
      </h1>

      <div className="space-y-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-xl font-semibold">
              Dark Mode
            </h2>

            <p className="text-gray-500">
              Toggle application theme
            </p>

          </div>

          <ThemeToggle />

        </div>

      </div>

    </div>
  );
};

export default Settings;