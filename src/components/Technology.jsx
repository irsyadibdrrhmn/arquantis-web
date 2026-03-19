import { useLang } from "../context/LangContext";

const Technology = () => {
  const { t } = useLang();

  const sections = [
    {
      labelKey: "s1label", titleKey: "s1title", color: "#00e5ff", reverse: false,
      points: ["s1p1","s1p2","s1p3","s1p4"],
      code: `// Order Execution Engine\nconst executeOrder = async (signal) => {\n  const order = await router.route({\n    symbol: signal.pair,\n    type: signal.direction,\n    volume: riskManager.calcSize(),\n    slippage: MAX_SLIPPAGE,\n  });\n  return order.fill();\n};`,
      ext: "js",
    },
    {
      labelKey: "s2label", titleKey: "s2title", color: "#c9a45c", reverse: true,
      points: ["s2p1","s2p2","s2p3","s2p4"],
      code: `# ML Signal Generator\nmodel = QuantModel(\n  features=['RSI','MACD','VOL'],\n  lookback=240,\n  threshold=0.72\n)\nsignal = model.predict(market_data)\nif signal.confidence > THRESH:\n  emit_signal(signal)`,
      ext: "py",
    },
    {
      labelKey: "s3label", titleKey: "s3title", color: "#ff2d78", reverse: false,
      points: ["s3p1","s3p2","s3p3","s3p4"],
      code: `// Risk Controller\nconst riskCheck = (portfolio) => {\n  const var95 = calcVaR(portfolio, 0.95);\n  const exposure = getExposure();\n\n  if (var95 > MAX_VAR ||\n      exposure > MAX_EXPOSURE) {\n    killSwitch.trigger('RISK_BREACH');\n  }\n};`,
      ext: "js",
    },
  ];

  return (
    <section className="relative bg-[#050d1a] py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 space-y-24">
        {sections.map((s, i) => (
          <div key={i} className={`grid items-center gap-12 lg:grid-cols-2 ${s.reverse ? "lg:grid-flow-dense" : ""}`}>
            <div className={s.reverse ? "lg:col-start-2" : ""}>
              <div className="rounded-2xl border bg-[rgba(5,13,26,0.9)] overflow-hidden" style={{ borderColor: `${s.color}25`, boxShadow: `0 0 40px ${s.color}08` }}>
                <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: `${s.color}15`, background: `${s.color}08` }}>
                  {["#ff2d78","#c9a45c","#00e5ff"].map((c, j) => <div key={j} className="h-3 w-3 rounded-full opacity-80" style={{ backgroundColor: c }} />)}
                  <span className="ml-3 font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: s.color }}>
                    {t("technology", s.labelKey).toLowerCase().replace(/ /g,"_")}.{s.ext}
                  </span>
                </div>
                <pre className="font-mono text-[11px] leading-6 p-6 overflow-x-auto" style={{ color: `${s.color}cc` }}>
                  <code>{s.code}</code>
                </pre>
                <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.color}40, transparent)` }} />
              </div>
            </div>
            <div className={s.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-px w-6" style={{ background: s.color }} />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase" style={{ color: s.color }}>{t("technology", s.labelKey)}</span>
              </div>
              <h3 className="font-display text-2xl font-black text-white md:text-3xl xl:text-4xl mb-5">{t("technology", s.titleKey)}</h3>
              <ul className="space-y-4">
                {s.points.map((pk, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-1 text-xs shrink-0" style={{ color: s.color, textShadow: `0 0 8px ${s.color}` }}>◆</span>
                    <span className="text-[#a0b4c8]">{t("technology", pk)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2">
                {[90,85,78].map((w, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="h-1.5 flex-1 rounded-full bg-[rgba(255,255,255,0.06)]">
                      <div className="h-full rounded-full" style={{ width:`${w}%`, background:`linear-gradient(90deg,${s.color}80,${s.color})`, boxShadow:`0 0 8px ${s.color}40` }} />
                    </div>
                    <span className="font-mono text-[10px] text-[#7a8fa6]">{w}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#081526] via-[#0d2040] to-[#081526]" />
          <div className="absolute inset-0 grid-bg opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-64 w-96 rounded-full bg-[#00e5ff] opacity-[0.04] blur-[80px]" />
          </div>
          <div className="relative px-8 py-14 text-center">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c]">
              // {t("technology","ctaEyebrow")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-black text-white md:text-4xl">
              {t("technology","ctaTitle")}{" "}
              <span className="neon-cyan">{t("technology","ctaPreci")}</span>{" "}
              {t("technology","ctaAnd")}{" "}
              <span className="text-gradient-gold">{t("technology","ctaScale")}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#7a8fa6]">{t("technology","ctaSub")}</p>
            <div className="mt-8 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.4)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;