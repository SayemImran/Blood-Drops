import { Link } from "react-router";

const ProtectedPage = ({ title = "This Page" }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Login Required
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          You need to be logged in to view <span className="font-semibold text-red-400">{title}</span>. Please sign in to continue.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/login">
            <button className="btn btn-error text-white font-semibold px-6">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-outline border-gray-300 text-gray-500 hover:bg-gray-50 font-semibold px-6">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProtectedPage;