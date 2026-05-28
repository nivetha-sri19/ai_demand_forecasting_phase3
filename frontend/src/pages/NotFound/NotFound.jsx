import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <p className="text-2xl text-gray-600 mt-4">
        Page Not Found
      </p>

      <Link
        to="/dashboard"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >

        Go Back Home

      </Link>

    </div>
  );
};

export default NotFound;