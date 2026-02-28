import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hook/useAuthContext";

const Register = () => {
  const { registerUser } = useAuthContext();
  const [alert, setAlert] = useState(null); // { type: "success" | "error", message: string }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);
      setAlert({ type: "success", message: "Account created successfully! You can now sign in." });
      reset();
    } catch (err) {
      const data = err?.response?.data;
      const message = data
        ? Object.values(data).flat()[0]
        : "Registration failed. Please try again.";
      setAlert({ type: "error", message });
    }
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-red-400">
          🩸 Register
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

        {/* Username */}
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
            })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* First & Last Name */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <input
              type="text"
              placeholder="First name"
              {...register("first_name", { required: "Required" })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
            {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name.message}</p>}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <input
              type="text"
              placeholder="Last name"
              {...register("last_name", { required: "Required" })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
            {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name.message}</p>}
          </div>
        </div>

        {/* Password & Confirm */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Min 8 characters" },
              })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <input
              type="password"
              placeholder="Confirm password"
              {...register("confirm_password", {
                required: "Please confirm password",
                validate: (v) => v === password || "Passwords do not match",
              })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
            {errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password.message}</p>}
          </div>
        </div>

        {/* Age & Address */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1 sm:w-1/3">
            <input
              type="number"
              placeholder="Age"
              {...register("age", {
                required: "Required",
                min: { value: 1, message: "Invalid" },
                max: { value: 120, message: "Invalid" },
              })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <input
              type="text"
              placeholder="Address"
              {...register("address")}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full"
            />
          </div>
        </div>

        {/* Blood Group & Gender */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1 flex-1">
            <select
              {...register("blood_group", { required: "Required" })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full bg-white text-gray-500"
            >
              <option value="">Blood Group</option>
              {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.blood_group && <p className="text-red-500 text-sm">{errors.blood_group.message}</p>}
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <select
              {...register("gender", { required: "Required" })}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400 w-full bg-white text-gray-500"
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-error font-semibold text-white mt-2 disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-red-400 font-medium hover:underline">Sign in</a>
        </p>
      </form>
    </div>
  );
};

export default Register;