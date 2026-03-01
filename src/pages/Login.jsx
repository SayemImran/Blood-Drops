import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hook/useAuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useAuthContext();
  const [alert, setAlert] = useState(null); // { type: "success" | "error", message: string }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data);
      setAlert({ type: "success", message: "Login successful! Redirecting..." });
      setTimeout(()=>{
        navigate('/dashboard');
      },3000);
    } catch (err) {
      const message =
        err?.response?.data?.detail ||
        err?.response?.data?.non_field_errors?.[0] ||
        "Invalid email or password. Please try again.";
      setAlert({ type: "error", message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-red-400">
          🩸 Login
        </h2>

        {/* Alert */}
        {alert && (
          <div
            className={`flex items-start gap-3 px-4 py-3 rounded-lg text-sm font-medium border ${
              alert.type === "success"
                ? "bg-green-50 border-green-200 text-green-700"
                : "bg-red-50 border-red-200 text-red-600"
            }`}
          >
            <span className="text-lg leading-none mt-0.5">
              {alert.type === "success" ? "✅" : "❌"}
            </span>
            <span className="flex-1">{alert.message}</span>
            <button
              type="button"
              onClick={() => setAlert(null)}
              className="ml-auto text-gray-400 hover:text-gray-600 leading-none text-base"
            >
              ✕
            </button>
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-error font-semibold text-white mt-2 disabled:opacity-60"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/register" className="text-red-400 font-medium hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;