const techSections = [
  {
    label: "Trading Engine",
    title: "Mesin Eksekusi Modern",
    color: "#00e5ff",
    points: [
      "FIX API latency rendah",
      "Smart order routing",
      "Slippage control",
      "Modular microservices architecture",
    ],
    reverse: false,
    code: `// Order Execution Engine
const executeOrder = async (signal) => {
  const order = await router.route({
    symbol: signal.pair,
    type: signal.direction,
    volume: riskManager.calcSize(),
    slippage: MAX_SLIPPAGE,
  });
  return order.fill();
};`,
  },
  {
    label: "Machine Learning",
    title: "Model Adaptif Berbasis AI",
    color: "#c9a45c",
    points: [
      "Neural network forecasting",
      "Feature engineering pipeline",
      "Sentiment analysis",
      "Reinforcement learning",
    ],
    reverse: true,
    code: `# ML Signal Generator
model = QuantModel(
  features=['RSI','MACD','VOL'],
  lookback=240,
  threshold=0.72
)
signal = model.predict(market_data)
if signal.confidence > THRESH:
  emit_signal(signal)`,
  },
  {
    label: "Risk Layer",
    title: "Manajemen Risiko Real-Time",
    color: "#ff2d78",
    points: [
      "Value at Risk (VaR)",
      "Kill-switch automation",
      "Portfolio diversification",
      "Real-time exposure monitoring",
    ],
    reverse: false,
    code: `// Risk Controller
const riskCheck = (portfolio) => {
  const var95 = calcVaR(portfolio, 0.95);
  const exposure = getExposure();
  
  if (var95 > MAX_VAR || 
      exposure > MAX_EXPOSURE) {
    killSwitch.trigger('RISK_BREACH');
  }
};`,
  },
];

const Technology = () => {
  return (
    <section className="relative bg-[#050d1a] py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6 space-y-24">
        {techSections.map((section, i) => (
          <div
            key={i}
            className={`grid items-center gap-12 lg:grid-cols-2 ${section.reverse ? "lg:grid-flow-dense" : ""}`}
          >
            {/* Code block */}
            <div className={section.reverse ? "lg:col-start-2" : ""}>
              <div
                className="rounded-2xl border bg-[rgba(5,13,26,0.9)] overflow-hidden"
                style={{ borderColor: `${section.color}25`, boxShadow: `0 0 40px ${section.color}08` }}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: `${section.color}15`, background: `${section.color}08` }}>
                  <div className="h-3 w-3 rounded-full bg-[#ff2d78] opacity-80" />
                  <div className="h-3 w-3 rounded-full bg-[#c9a45c] opacity-80" />
                  <div className="h-3 w-3 rounded-full bg-[#00e5ff] opacity-80" />
                  <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: section.color }}>
                    {section.label.toLowerCase().replace(" ", "_")}.{i === 1 ? "py" : "js"}
                  </span>
                </div>
                {/* Code */}
                <pre
                  className="font-mono text-[11px] leading-6 p-6 overflow-x-auto"
                  style={{ color: `${section.color}cc` }}
                >
                  <code>{section.code}</code>
                </pre>
                {/* Glow bottom */}
                <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${section.color}40, transparent)` }} />
              </div>
            </div>

            {/* Text */}
            <div className={section.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: section.color }} />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: section.color }}>
                  {section.label}
                </span>
              </div>

              <h3 className="font-display text-2xl font-black text-white md:text-3xl xl:text-4xl mb-5">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className="mt-1 text-xs shrink-0"
                      style={{ color: section.color, textShadow: `0 0 8px ${section.color}` }}
                    >
                      ◆
                    </span>
                    <span className="text-[#a0b4c8]">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Progress bar decoration */}
              <div className="mt-8 space-y-2">
                {[90, 85, 78].map((w, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-[rgba(255,255,255,0.06)]">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${w}%`, background: `linear-gradient(90deg, ${section.color}80, ${section.color})`, boxShadow: `0 0 8px ${section.color}40` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-[#7a8fa6]">{w}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* CTA banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#081526] via-[#0d2040] to-[#081526]" />
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-64 w-96 rounded-full bg-[#00e5ff] opacity-[0.04] blur-[80px]" />
          </div>
          <div className="relative px-8 py-14 text-center">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c]">
              // Integrated_Infrastructure
            </span>
            <h2 className="mt-4 font-display text-3xl font-black text-white md:text-4xl">
              Dirancang untuk <span className="neon-cyan">Presisi</span> dan <span className="text-gradient-gold">Skalabilitas</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#7a8fa6]">
              Arsitektur teknologi kami menghubungkan riset, machine learning, eksekusi, dan kontrol risiko dalam satu alur sistematis.
            </p>
            <div className="mt-8 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.4)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;