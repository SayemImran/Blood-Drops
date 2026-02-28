const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-[600px] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] left-[-60px] w-64 h-64 bg-red-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-40px] right-[-40px] w-72 h-72 bg-red-200 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-6 py-12 z-10 max-w-6xl mx-auto w-full">
        {/* Illustration side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-60" />
            <div className="absolute inset-6 bg-red-200 rounded-full opacity-50" />
            <span className="text-8xl md:text-9xl z-10 select-none">🩸</span>
          </div>
        </div>

        {/* Text side */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
            Save Lives Today
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-400 leading-tight">
            BloodDrops
          </h1>
          <p className="py-5 text-gray-500 font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
            A smart blood bank management system designed to connect donors,
            recipients, and hospitals efficiently. Manage blood stock, donor
            records, and urgent requests in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <button className="btn btn-error text-white font-semibold px-8">
              Request for Blood
            </button>
            <button className="btn btn-outline border-red-300 text-red-400 hover:bg-red-400 hover:text-white hover:border-red-400 font-semibold">
              Become a Donor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;