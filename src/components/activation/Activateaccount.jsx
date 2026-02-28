import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import apiClient from "../services/api-Client";

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"

  useEffect(() => {
    const activate = async () => {
      try {
        await apiClient.post("/auth/users/activation/", { uid, token });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    };
    activate();
  }, [uid, token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
        {status === "loading" && (
          <>
            <div className="text-5xl mb-4 animate-pulse">🩸</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Activating your account...
            </h2>
            <p className="text-gray-400 text-sm">Please wait a moment.</p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Account Activated!
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Your account has been successfully activated. You can now sign in.
            </p>
            <Link to="/login">
              <button className="btn btn-error text-white font-semibold px-8">
                Go to Login
              </button>
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <div className="text-5xl mb-4">❌</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Activation Failed
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              The activation link is invalid or has already been used. Try
              registering again or contact support.
            </p>
            <Link to="/register">
              <button className="btn btn-error text-white font-semibold px-8">
                Back to Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ActivateAccount;
