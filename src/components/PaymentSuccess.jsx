import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const p = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 3}s`,
      size: `${14 + Math.random() * 14}px`,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-red-50 to-rose-100 px-4 py-10 relative overflow-hidden font-sans">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

        .font-display { font-family: 'DM Serif Display', Georgia, serif; }

        @keyframes floatUp {
          0%   { transform: translateY(100vh); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-80px); opacity: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          0%   { transform: scale(0) rotate(-10deg); opacity: 0; }
          60%  { transform: scale(1.15) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset: 100; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ringPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(225,29,72,0.3); }
          50%      { box-shadow: 0 0 0 14px rgba(225,29,72,0); }
        }
        @keyframes ringExpand {
          0%   { transform: scale(0.6); opacity: 0.6; }
          100% { transform: scale(2);   opacity: 0; }
        }
        .float-up    { animation: floatUp linear infinite; }
        .scale-in    { animation: scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.3s both; }
        .ring-pulse  { animation: ringPulse 2s ease 0.8s infinite; }
        .ring-expand  { animation: ringExpand 1s ease 0.3s forwards; }
        .ring-expand2 { animation: ringExpand 1s ease 0.5s forwards; }
        .check-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: checkDraw 0.4s ease 0.7s forwards;
        }
        .card-enter { animation: fadeSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .anim-1 { animation: fadeSlideUp 0.5s ease 0.4s both; }
        .anim-2 { animation: fadeSlideUp 0.5s ease 0.55s both; }
        .anim-3 { animation: fadeSlideUp 0.5s ease 0.7s both; }
        .anim-4 { animation: fadeSlideUp 0.5s ease 0.85s both; }
        .anim-5 { animation: fadeSlideUp 0.5s ease 1s both; }
        .anim-6 { animation: fadeSlideUp 0.5s ease 1.15s both; }
      `}</style>

      {/* Floating hearts */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="fixed bottom-0 text-rose-500 float-up pointer-events-none select-none z-0"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
            opacity: p.opacity,
          }}
        >
          ♥
        </span>
      ))}

      {/* Card */}
      <div className={`relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden ${visible ? "card-enter" : "opacity-0"}`}>

        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-rose-600 via-rose-400 to-rose-600" />

        <div className="px-10 pb-10 pt-8 text-center">

          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative scale-in ring-pulse w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center">
              <div className="ring-expand absolute inset-0 rounded-full border-2 border-rose-400" />
              <div className="ring-expand2 absolute inset-0 rounded-full border-2 border-rose-300" />
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <polyline
                  className="check-path"
                  points="4,13 9,18 20,7"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Tag */}
          <div className="anim-1 inline-block bg-rose-50 text-rose-500 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-rose-100 mb-4">
            Payment Confirmed
          </div>

          {/* Title */}
          <h1 className="anim-2 font-display text-4xl text-gray-900 leading-tight mb-3">
            Thank you for<br />
            <em className="text-rose-500 not-italic font-display">your kindness</em>
          </h1>

          {/* Subtitle */}
          <p className="anim-3 text-gray-400 text-sm leading-relaxed mb-6 font-light">
            Your donation has been received and will help<br />save lives across Bangladesh.
          </p>

          {/* Divider */}
          <div className="anim-3 flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-rose-400 text-sm">♥</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Stats */}
          <div className="anim-4 flex items-center justify-center mb-8">
            <div className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-xl">🩸</span>
              <span className="text-gray-400 text-xs font-medium tracking-wide">Donation logged</span>
            </div>
            <div className="w-px h-9 bg-gray-100" />
            <div className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-xl">📧</span>
              <span className="text-gray-400 text-xs font-medium tracking-wide">Receipt sent</span>
            </div>
            <div className="w-px h-9 bg-gray-100" />
            <div className="flex-1 flex flex-col items-center gap-1.5">
              <span className="text-xl">💛</span>
              <span className="text-gray-400 text-xs font-medium tracking-wide">Lives impacted</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="anim-5 flex flex-col gap-3 mb-5">
            <button
              onClick={() => window.location.href = "/"}
              className="w-full py-4 bg-gradient-to-br from-rose-500 to-rose-700 text-white font-semibold text-base rounded-2xl shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Back to Home
            </button>
            <button
              onClick={() => window.location.href = "/donate"}
              className="w-full py-4 bg-transparent text-gray-400 font-semibold text-base rounded-2xl border-2 border-gray-100 hover:border-rose-300 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200"
            >
              Donate Again
            </button>
          </div>

          {/* Footer */}
          <p className="anim-6 text-xs text-gray-300">
            Secured by <span className="text-rose-400 font-semibold">SSLCommerz</span> · Transaction ID saved
          </p>

        </div>
      </div>
    </div>
  );
}