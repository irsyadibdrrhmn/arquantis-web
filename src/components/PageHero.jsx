const PageHero = ({ eyebrow, title, subtitle, accent = "cyan" }) => {
  const accentColor = accent === "gold" ? "#c9a45c" : "#00e5ff";
  const accentColor2 = accent === "gold" ? "#00e5ff" : "#c9a45c";

  return (
    <section
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
      style={{ background: "linear-gradient(160deg, #050d1a 0%, #081526 50%, #050d1a 100%)" }}
    >
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, ${accentColor2}, transparent)` }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full blur-[130px] pointer-events-none" style={{ background: accentColor, opacity: 0.05 }} />
      <div className="absolute bottom-0 left-1/4 h-[300px] w-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: accentColor2, opacity: 0.03 }} />
      <div className="absolute top-24 left-4 sm:left-8 w-10 sm:w-14 h-10 sm:h-14 border-l-2 border-t-2 rounded-tl-lg" style={{ borderColor: `${accentColor}40` }} />
      <div className="absolute top-24 right-4 sm:right-8 w-10 sm:w-14 h-10 sm:h-14 border-r-2 border-t-2 rounded-tr-lg" style={{ borderColor: `${accentColor2}40` }} />
      <div className="absolute bottom-6 left-8 w-10 h-10 border-l-2 border-b-2 rounded-bl-lg" style={{ borderColor: `${accentColor2}30` }} />
      <div className="absolute bottom-6 right-8 w-10 h-10 border-r-2 border-b-2 rounded-br-lg" style={{ borderColor: `${accentColor}30` }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, ${accentColor}08 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-8" style={{ borderColor: `${accentColor}30`, backgroundColor: `${accentColor}08` }}>
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}` }} />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: accentColor }}>// {eyebrow}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-black leading-[1.05] text-white md:text-6xl xl:text-7xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-5 sm:mt-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8" style={{ color: "#7a8fa6" }}>{subtitle}</p>
        )}

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-px w-20" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}60)` }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }} />
          <div className="h-px w-20" style={{ background: `linear-gradient(90deg, ${accentColor}60, transparent)` }} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #050d1a)" }} />
    </section>
  );
};

export default PageHero;
