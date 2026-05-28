import { useState } from 'react';

const AdminSettings = () => {

  const [maintenance, setMaintenance] =
    useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-5">
        Admin Settings
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <div>

            <h3 className="font-semibold">
              Maintenance Mode
            </h3>

            <p className="text-gray-500">
              Enable or disable maintenance mode
            </p>

          </div>

          <button
            onClick={() =>
              setMaintenance(!maintenance)
            }
            className={`px-5 py-2 rounded-lg text-white
                
              ${
                maintenance
                  ? 'bg-green-600'
                  : 'bg-red-500'
              }
            `}
          >

            {maintenance
              ? 'Enabled'
              : 'Disabled'
            }

          </button>

        </div>

      </div>

    </div>
  );
};

export default AdminSettings;