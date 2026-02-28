import { MapPin, Droplets, Calendar } from "lucide-react";

const Donorcard = ({
  name,
  address,
  age,
  gender,
  blood_group,
  is_available,
  last_donation_date,
  image,
}) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?";

  const formatDate = (d) => {
    if (!d) return "Never";
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow w-full max-w-sm">
      {/* Top band */}
      <div className="h-16 bg-red-400 relative">
        {/* Avatar */}
        <div className="absolute -bottom-8 left-5">
          <div className="w-16 h-16 rounded-full border-4 border-white shadow bg-red-100 overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-red-400 font-bold text-xl">
                {initials}
              </div>
            )}
          </div>
        </div>

        {/* Blood group badge */}
        <div className="absolute top-3 right-4">
          <span className="w-10 h-10 rounded-full bg-white text-red-400 font-bold text-sm flex items-center justify-center shadow border border-red-100">
            {blood_group}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="pt-10 px-5 pb-5">
        {/* Name & status */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-gray-800 text-base leading-tight">
            {name}
          </h3>
          <span
            className={`shrink-0 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border mt-0.5
            ${
              is_available
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-gray-100 text-gray-400 border-gray-200"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${is_available ? "bg-green-500" : "bg-gray-400"}`}
            />
            {is_available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="border-t border-gray-100 my-3" />

        {/* Details */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} className="text-red-300 shrink-0" />
            <span className="truncate">{address}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Droplets size={14} className="text-red-300 shrink-0" />
            <span>
              {gender}, {age} years old
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={14} className="text-red-300 shrink-0" />
            <span>Last donated: {formatDate(last_donation_date)}</span>
          </div>
        </div>

        <div className="border-t border-gray-100 my-4" />

        {/* Action */}
        <button
          disabled={!is_available}
          className="w-full btn btn-error text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {is_available ? "Request Blood" : "Currently Unavailable"}
        </button>
      </div>
    </div>
  );
};

export default Donorcard;
