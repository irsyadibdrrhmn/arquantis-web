import { useLang } from "../context/LangContext";

const Features = () => {
  const { t } = useLang();

  const features = [
    { icon: "◈", titleKey: "f1title", descKey: "f1desc", color: "#00e5ff", accent: "rgba(0,229,255,0.1)" },
    { icon: "⬡", titleKey: "f2title", descKey: "f2desc", color: "#c9a45c", accent: "rgba(201,164,92,0.1)" },
    { icon: "◉", titleKey: "f3title", descKey: "f3desc", color: "#ff2d78", accent: "rgba(255,45,120,0.1)" },
  ];

  const statsBar = [
    { val: "4+",     lblKey: "s1lbl" },
    { val: "99.97%", lblKey: "s2lbl" },
    { val: "< 1ms",  lblKey: "s3lbl" },
    { val: "100%",   lblKey: "s4lbl" },
  ];

  return (
    <section className="relative bg-[#081526] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.4)] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#00e5ff] opacity-[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(0,229,255,0.5)]" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#00e5ff]">// {t("features", "sectionLabel")}</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(0,229,255,0.5)]" />
          </div>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl xl:text-5xl">
            {t("features", "heading")}{" "}
            <span className="neon-cyan">{t("features", "headingAccent")}</span>{" "}
            <span className="text-gradient-gold">{t("features", "headingAccent2")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#7a8fa6]">{t("features", "sub")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, i) => (
            <div key={i} className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(5,13,26,0.8)] p-8 card-hover group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `radial-gradient(circle at center, ${item.accent} 0%, transparent 70%)` }} />
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl text-2xl border" style={{ borderColor: `${item.color}30`, backgroundColor: `${item.color}10`, color: item.color, textShadow: `0 0 12px ${item.color}` }}>
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-3">{t("features", item.titleKey)}</h3>
              <p className="text-sm leading-7 text-[#7a8fa6]">{t("features", item.descKey)}</p>
              <div className="mt-6 flex items-center gap-2">
                <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${item.color}40, transparent)` }} />
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: item.color }}>{t("features", "learnMore")}</span>
              </div>
              <div className="absolute bottom-4 right-4 h-2 w-2 rounded-full opacity-50" style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }} />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[rgba(201,164,92,0.15)] bg-[rgba(8,21,38,0.6)] p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[rgba(255,255,255,0.06)]">
            {statsBar.map((s, i) => (
              <div key={i} className={`text-center ${i > 0 ? "pl-8" : ""}`}>
                <div className="font-display text-2xl font-black text-gradient-gold">{s.val}</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a8fa6]">{t("features", s.lblKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,164,92,0.3)] to-transparent" />
    </section>
  );
};

export default Features;