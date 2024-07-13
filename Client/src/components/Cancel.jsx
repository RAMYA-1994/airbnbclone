import { Link } from "react-router-dom";

const CancelUrl = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
            
          <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" className="w-64 mx-auto"/>
            
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Payment Cancelled
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Your payment was cancelled. Please try again later.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelUrl;