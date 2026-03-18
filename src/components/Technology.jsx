const techSections = [
  {
    label: "Trading Engine",
    title: "Mesin Eksekusi Modern",
    points: [
      "FIX API latency rendah",
      "Smart order routing",
      "Slippage control",
      "Modular microservices architecture",
    ],
    reverse: false,
  },
  {
    label: "Machine Learning",
    title: "Model Adaptif Berbasis AI",
    points: [
      "Neural network forecasting",
      "Feature engineering pipeline",
      "Sentiment analysis",
      "Reinforcement learning experimentation",
    ],
    reverse: true,
  },
  {
    label: "Risk Layer",
    title: "Manajemen Risiko Real-Time",
    points: [
      "Value at Risk (VaR)",
      "Kill-switch automation",
      "Portfolio diversification signals",
      "Real-time exposure monitoring",
    ],
    reverse: false,
  },
];

const Technology = () => {
  return (
    <section className="bg-[#F5F7FB] py-16">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        {techSections.map((section, index) => (
          <div
            key={index}
            className={`grid items-center gap-10 lg:grid-cols-2 ${
              section.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="rounded-[30px] border border-[#C9A45C]/15 bg-white p-6 shadow-[0_10px_30px_rgba(8,21,38,0.08)]">
              <div className="flex h-[280px] items-center justify-center rounded-[24px] bg-gradient-to-br from-[#102845] to-[#1C3557]">
                <div className="h-28 w-28 rounded-full border border-white/10 bg-white/5" />
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#C9A45C]">
                {section.label}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-[#081526]">
                {section.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {section.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 text-lg text-[#5A6B7F]"
                  >
                    <span className="mt-1 text-[#C9A45C]">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="rounded-[32px] bg-gradient-to-r from-[#081526] to-[#102845] px-8 py-14 text-center shadow-[0_20px_80px_rgba(8,21,38,0.18)]">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Integrated Infrastructure
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Dirancang untuk Presisi dan Skalabilitas
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#D9DEE7]">
            Arsitektur teknologi kami menghubungkan riset, machine learning,
            eksekusi, dan kontrol risiko dalam satu alur sistematis yang
            efisien.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;