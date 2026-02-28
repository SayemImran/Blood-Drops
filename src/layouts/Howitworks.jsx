const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: "📝",
      title: "Register",
      desc: "Create your account as a donor or recipient in under a minute.",
    },
    {
      step: "02",
      icon: "🔍",
      title: "Find a Match",
      desc: "Our system instantly matches blood requests with compatible donors nearby.",
    },
    {
      step: "03",
      icon: "🏥",
      title: "Connect",
      desc: "Get in touch with verified donors or hospitals through our platform.",
    },
    {
      step: "04",
      icon: "🩸",
      title: "Save a Life",
      desc: "Complete the donation and track the impact you've made.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-500 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From registration to donation, we've made the process as simple and fast as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ step, icon, title, desc }) => (
            <div key={step} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
              <span className="text-4xl mb-3">{icon}</span>
              <span className="text-xs font-bold text-red-300 tracking-widest mb-1">STEP {step}</span>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;