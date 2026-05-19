import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <p className="text-gray-500 text-lg mt-4">
        Page Not Found
      </p>

      <Link
        to="/dashboard"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
      >
        Back To Dashboard
      </Link>
    </div>
  );
};

export default NotFound;