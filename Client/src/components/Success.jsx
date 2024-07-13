import { Link } from "react-router-dom";

const SuccessUrl = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6209fc508f791e729abec7d0/18641903-a848-4a3a-a0a3-c9e2ddaa15c4/02-lottie-tick-01-instant-2.gif"
            alt="Success"
            className=" w-64 mx-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Success!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Your operation was completed successfully.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessUrl;
