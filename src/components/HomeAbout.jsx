import { useLang } from "../context/LangContext";

const HomeAbout = () => {
  const { t } = useLang();

  const stats = [
    { value: "12+", labelKey: "stat1Label", color: "#00e5ff" },
    { value: "24/7", labelKey: "stat2Label", color: "#c9a45c" },
    { value: "<1ms", labelKey: "stat3Label", color: "#ff2d78" },
    { value: "Global", labelKey: "stat4Label", color: "#00e5ff" },
  ];

  return (
    <section className="relative bg-[#050d1a] py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#c9a45c] opacity-[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[rgba(201,164,92,0.5)]" />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c]">
            // {t("homeAbout", "sectionLabel").replace(/ /g, "_")}
          </span>
          <div className="h-px flex-1 bg-[rgba(201,164,92,0.15)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-display text-3xl font-black leading-tight text-white md:text-4xl xl:text-5xl">
              {t("homeAbout", "heading")}{" "}
              <span className="text-gradient-gold">{t("homeAbout", "headingAccent")}</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-[#7a8fa6]">{t("homeAbout", "p1")}</p>
            <p className="mt-4 text-base leading-8 text-[#7a8fa6]">
              {t("homeAbout", "p2")}{" "}
              <span className="text-[#c9a45c] font-semibold">{t("homeAbout", "p2Accent")}</span>{" "}
              {t("homeAbout", "p2b")}
            </p>
            <p className="mt-4 text-base leading-8 text-[#7a8fa6]">
              {t("homeAbout", "p3")}{" "}
              <span className="text-[#00e5ff] font-semibold">{t("homeAbout", "p3Accent")}</span>
              {t("homeAbout", "p3b")}
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[rgba(201,164,92,0.3)] bg-[rgba(201,164,92,0.05)] px-5 py-3 group cursor-pointer hover:border-[rgba(201,164,92,0.6)] hover:bg-[rgba(201,164,92,0.1)] transition-all">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#c9a45c]">{t("homeAbout", "cta")}</span>
              <span className="text-[#c9a45c] group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-80 w-80 rounded-full border border-[rgba(0,229,255,0.05)] animate-rotate-slow" />
              <div
                className="absolute h-60 w-60 rounded-full border border-[rgba(201,164,92,0.05)]"
                style={{ animation: "rotate-slow 30s linear infinite reverse" }}
              />
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 card-hover group relative">
                  <div
                    className="font-display text-3xl font-black md:text-4xl"
                    style={{ color: item.color, textShadow: `0 0 20px ${item.color}60` }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a8fa6]">
                    {t("homeAbout", item.labelKey)}
                  </div>
                  <div
                    className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full opacity-60"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 6px ${item.color}` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
