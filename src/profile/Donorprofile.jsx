import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Camera, CheckCircle, XCircle, Droplets, MapPin, Calendar, User } from "lucide-react";
import useAuthContext from "../hook/useAuthContext";

// ── mock initial data (replace with your API fetch) ──────────────────────────
const mockProfile = {
  username: "rahim_bd",
  email: "rahim@example.com",
  first_name: "Rahim",
  last_name: "Uddin",
  age: 28,
  address: "Mirpur, Dhaka",
  blood_group: "O+",
  gender: "Male",
  last_donated: "2025-11-15",
  is_active: true,
  image: null,
};


// ── Alert ────────────────────────────────────────────────────────────────────
const Alert = ({ alert, onClose }) => {
  if (!alert) return null;
  const isSuccess = alert.type === "success";
  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-lg text-sm font-medium border mb-4
      ${isSuccess ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-600"}`}>
      {isSuccess ? <CheckCircle size={18} className="shrink-0 mt-0.5" /> : <XCircle size={18} className="shrink-0 mt-0.5" />}
      <span className="flex-1">{alert.message}</span>
      <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 text-base leading-none">✕</button>
    </div>
  );
};

// ── Field wrapper ─────────────────────────────────────────────────────────────
const Field = ({ label, error, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
    {children}
    {error && <p className="text-red-500 text-xs">{error.message}</p>}
  </div>
);

const inputCls = "border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 bg-white w-full transition";

// ── DonorProfile ──────────────────────────────────────────────────────────────
const DonorProfile = () => {
  const { updateUser } = useAuthContext?.() ?? {};
  const [alert, setAlert] = useState(null);
  const [preview, setPreview] = useState(mockProfile.image);
  const fileRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({ defaultValues: mockProfile });

  const password = watch("password");
  const firstName = watch("first_name");
  const lastName = watch("last_name");
  const bloodGroup = watch("blood_group");
  const isActive = watch("is_active");

  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== null && k !== "image") formData.append(k, v);
      });
      if (fileRef.current?.files[0]) formData.append("image", fileRef.current.files[0]);
      // await updateUser(formData); // ← uncomment when wired to API
      await new Promise((r) => setTimeout(r, 800)); // mock delay
      setAlert({ type: "success", message: "Profile updated successfully!" });
    } catch (err) {
      const msg = err?.response?.data
        ? Object.values(err.response.data).flat()[0]
        : "Failed to update profile. Please try again.";
      setAlert({ type: "error", message: msg });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto space-y-5">

        {/* ── Header card ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-center gap-5">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-red-100 border-4 border-white shadow-md">
              {preview ? (
                <img src={preview} alt="avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-red-400">
                  {firstName?.[0]?.toUpperCase() ?? "?"}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="absolute bottom-0 right-0 w-7 h-7 bg-red-400 rounded-full flex items-center justify-center shadow hover:bg-red-500 transition"
            >
              <Camera size={13} className="text-white" />
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onImageChange} />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl font-bold text-gray-800">
              {firstName} {lastName}
            </h1>
            <p className="text-gray-400 text-sm">@{watch("username")}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold bg-red-50 text-red-500 border border-red-100 px-3 py-1 rounded-full">
                <Droplets size={12} /> {bloodGroup || "—"}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold bg-gray-50 text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                <MapPin size={12} /> {watch("address") || "No address"}
              </span>
              <span className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border
                ${isActive ? "bg-green-50 text-green-600 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-500" : "bg-gray-400"}`} />
                {isActive ? "Active Donor" : "Inactive"}
              </span>
            </div>
          </div>
        </div>

        {/* ── Form card ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-base font-bold text-gray-800 mb-5 pb-3 border-b border-gray-100">
            Update Profile
          </h2>

          <Alert alert={alert} onClose={() => setAlert(null)} />

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

            {/* Section: Account */}
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <User size={12} /> Account Info
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Username" error={errors.username}>
                  <input type="text" {...register("username", { required: "Required" })} className={inputCls} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" {...register("email", {
                    required: "Required",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                  })} className={inputCls} />
                </Field>
              </div>
            </div>

            {/* Section: Personal */}
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <User size={12} /> Personal Info
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="First Name" error={errors.first_name}>
                  <input type="text" {...register("first_name", { required: "Required" })} className={inputCls} />
                </Field>
                <Field label="Last Name" error={errors.last_name}>
                  <input type="text" {...register("last_name", { required: "Required" })} className={inputCls} />
                </Field>
                <Field label="Age" error={errors.age}>
                  <input type="number" {...register("age", {
                    required: "Required",
                    min: { value: 1, message: "Invalid" },
                    max: { value: 120, message: "Invalid" },
                  })} className={inputCls} />
                </Field>
                <Field label="Gender" error={errors.gender}>
                  <select {...register("gender", { required: "Required" })} className={inputCls}>
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Address" error={errors.address}>
                  <input type="text" {...register("address")} className={`${inputCls} sm:col-span-2`} />
                </Field>
              </div>
            </div>

            {/* Section: Donor Info */}
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Droplets size={12} /> Donor Info
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Blood Group" error={errors.blood_group}>
                  <select {...register("blood_group", { required: "Required" })} className={inputCls}>
                    <option value="">Select blood group</option>
                    {["A+","A-","B+","B-","O+","O-","AB+","AB-"].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Last Donated" error={errors.last_donated}>
                  <input type="date" {...register("last_donated")} className={inputCls} />
                </Field>

                {/* is_active toggle */}
                <div className="flex flex-col gap-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Donor Status</label>
                  <label className="flex items-center gap-3 cursor-pointer w-fit">
                    <div className="relative">
                      <input type="checkbox" {...register("is_active")} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-red-400 transition-colors" />
                      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform peer-checked:translate-x-5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {isActive ? "Available to donate" : "Not available"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Section: Change Password */}
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
                Change Password <span className="text-gray-400 font-normal normal-case tracking-normal">(leave blank to keep current)</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="New Password" error={errors.password}>
                  <input type="password" placeholder="••••••••"
                    {...register("password", {
                      minLength: { value: 8, message: "Min 8 characters" },
                    })} className={inputCls} />
                </Field>
                <Field label="Confirm Password" error={errors.confirm_password}>
                  <input type="password" placeholder="••••••••"
                    {...register("confirm_password", {
                      validate: (v) => !password || v === password || "Passwords do not match",
                    })} className={inputCls} />
                </Field>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-error text-white font-semibold flex-1 disabled:opacity-60"
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => setAlert(null)}
                className="btn btn-outline border-gray-300 text-gray-500 hover:bg-gray-50 font-semibold sm:w-32"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default DonorProfile;