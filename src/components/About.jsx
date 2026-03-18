const stats = [
  { value: "12+", label: "Model Strategi", color: "#00e5ff" },
  { value: "24/7", label: "Monitoring Sistem", color: "#c9a45c" },
  { value: "<1ms", label: "Execution Latency", color: "#ff2d78" },
  { value: "Global", label: "Market Coverage", color: "#00e5ff" },
];

const About = () => {
  return (
    <section className="relative bg-[#050d1a] py-28 overflow-hidden">
      {/* grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* glow */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#c9a45c] opacity-[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[rgba(201,164,92,0.5)]" />
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c]">
            // About_Us
          </span>
          <div className="h-px flex-1 bg-[rgba(201,164,92,0.15)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <h2 className="font-display text-3xl font-black leading-tight text-white md:text-4xl xl:text-5xl">
              Tentang{" "}
              <span className="text-gradient-gold">Arquantis</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#7a8fa6]">
              PT Arquantis Teknologi Investama adalah perusahaan teknologi keuangan yang berfokus pada pengembangan sistem perdagangan kuantitatif dan algoritmik untuk pasar keuangan global.
            </p>
            <p className="mt-4 text-base leading-8 text-[#7a8fa6]">
              Didirikan oleh tim ahli matematika, ilmuwan data, dan praktisi pasar keuangan, kami menerapkan pendekatan ilmiah yang ketat dalam menganalisis data pasar untuk menemukan{" "}
              <span className="text-[#c9a45c] font-semibold">pola yang dapat diprediksi</span> dan dieksploitasi secara sistematis.
            </p>
            <p className="mt-4 text-base leading-8 text-[#7a8fa6]">
              Fokus utama kami adalah menghilangkan bias emosional dari keputusan investasi melalui{" "}
              <span className="text-[#00e5ff] font-semibold">otomatisasi penuh</span>, mulai dari generasi sinyal hingga eksekusi order dan manajemen risiko.
            </p>

            {/* CTA */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[rgba(201,164,92,0.3)] bg-[rgba(201,164,92,0.05)] px-5 py-3 group cursor-pointer hover:border-[rgba(201,164,92,0.6)] hover:bg-[rgba(201,164,92,0.1)] transition-all">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-[#c9a45c]">
                Pelajari Lebih Lanjut
              </span>
              <span className="text-[#c9a45c] group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="h-80 w-80 rounded-full border border-[rgba(0,229,255,0.05)] animate-rotate-slow" />
              <div className="absolute h-60 w-60 rounded-full border border-[rgba(201,164,92,0.05)]" style={{ animation: "rotate-slow 30s linear infinite reverse" }} />
            </div>

            <div className="relative grid grid-cols-2 gap-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 card-hover group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="font-display text-3xl font-black md:text-4xl"
                    style={{ color: item.color, textShadow: `0 0 20px ${item.color}60` }}
                  >
                    {item.value}
                  </div>
                  <div className="mt-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a8fa6]">
                    {item.label}
                  </div>
                  {/* Corner accent */}
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

export default About;