import { MapPin, FileText, Droplets } from "lucide-react";

const RequestCard = ({ blood_group, location, description, is_active }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow w-full max-w-sm">
      {/* Top band */}
      <div className="bg-red-400 px-5 py-4 flex items-center justify-between">
        <div>
          <p className="text-red-100 text-xs font-semibold uppercase tracking-widest mb-0.5">
            Blood Request
          </p>
          <h2 className="text-white font-bold text-lg leading-tight">
            {blood_group} Required
          </h2>
        </div>
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
          <span className="text-red-400 font-bold text-sm">{blood_group}</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        <div className="flex items-start gap-2 text-sm text-gray-500">
          <MapPin size={15} className="text-red-300 shrink-0 mt-0.5" />
          <span>{location}</span>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-500">
          <FileText size={15} className="text-red-300 shrink-0 mt-0.5" />
          <span className="line-clamp-2">{description}</span>
        </div>

        <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
          <span
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border
            ${
              is_active
                ? "bg-green-50 text-green-600 border-green-200"
                : "bg-gray-100 text-gray-400 border-gray-200"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${is_active ? "bg-green-500" : "bg-gray-400"}`}
            />
            {is_active ? "Active" : "Closed"}
          </span>

          <button
            disabled={!is_active}
            className="btn btn-error btn-sm text-white font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Respond
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
