const WhyDonate = () => {
  const reasons = [
    { icon: "❤️", title: "Save Up to 3 Lives", desc: "A single donation can save up to three lives through separation into components." },
    { icon: "⏱️", title: "Only 10 Minutes",    desc: "The donation itself takes around 10 minutes. A small time for a huge impact." },
    { icon: "🔬", title: "Free Health Check",  desc: "Donors get a mini health screening including blood pressure and hemoglobin check." },
    { icon: "🌍", title: "Community Impact",   desc: "Blood cannot be manufactured. Voluntary donations are the only source." },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
              Make a Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Should You Donate Blood?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              Every two seconds someone needs blood. Donating blood is one of the most impactful things you can do for your community.
            </p>
            <button className="btn btn-error text-white font-semibold px-8">
              Donate Now
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {reasons.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                <span className="text-3xl shrink-0">{icon}</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;