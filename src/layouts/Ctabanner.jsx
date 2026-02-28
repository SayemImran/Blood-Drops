const CTABanner = () => (
  <section className="bg-gray-700 py-14 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Every Drop Counts 🩸
      </h2>
      <p className="text-red-100 font-medium mb-8 max-w-xl mx-auto leading-relaxed">
        Whether you need blood urgently or want to become a life-saving donor,
        BloodDrops connects you to the right people at the right time.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn bg-white text-red-400 hover:bg-red-50 border-none font-semibold px-8">
          Request Blood
        </button>
        <button className="btn btn-outline border-white text-white hover:bg-white hover:text-red-400 font-semibold px-8">
          Register as Donor
        </button>
      </div>
    </div>
  </section>
);

export default CTABanner;