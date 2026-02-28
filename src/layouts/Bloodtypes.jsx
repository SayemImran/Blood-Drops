const BloodTypes = () => {
  const types = [
    { type: "A+",  canGiveTo: "A+, AB+",          canReceiveFrom: "A+, A-, O+, O-" },
    { type: "A-",  canGiveTo: "A+, A-, AB+, AB-",  canReceiveFrom: "A-, O-" },
    { type: "B+",  canGiveTo: "B+, AB+",           canReceiveFrom: "B+, B-, O+, O-" },
    { type: "B-",  canGiveTo: "B+, B-, AB+, AB-",  canReceiveFrom: "B-, O-" },
    { type: "O+",  canGiveTo: "A+, B+, O+, AB+",   canReceiveFrom: "O+, O-" },
    { type: "O-",  canGiveTo: "Everyone",           canReceiveFrom: "O-" },
    { type: "AB+", canGiveTo: "AB+",                canReceiveFrom: "Everyone" },
    { type: "AB-", canGiveTo: "AB+, AB-",           canReceiveFrom: "AB-, A-, B-, O-" },
  ];

  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Compatibility Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Blood Type Chart</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Know who you can donate to and receive from.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {types.map(({ type, canGiveTo, canReceiveFrom }) => (
            <div key={type} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-200 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  {type}
                </div>
                <span className="font-semibold text-gray-700">Blood Type</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Gives to</span>
                  <p className="text-gray-700 font-medium">{canGiveTo}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Receives from</span>
                  <p className="text-gray-700 font-medium">{canReceiveFrom}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BloodTypes;