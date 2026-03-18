import { useEffect, useRef } from "react";

const tickerItems = [
  { label: "FOREX", value: "+28.4%", positive: true },
  { label: "CRYPTO", value: "+41.2%", positive: true },
  { label: "GOLD", value: "+34.1%", positive: true },
  { label: "SHARPE", value: "1.87", positive: true },
  { label: "DRAWDOWN", value: "-15.2%", positive: false },
  { label: "WIN RATE", value: "68.4%", positive: true },
  { label: "STRATEGIES", value: "12+", positive: true },
  { label: "UPTIME", value: "99.97%", positive: true },
];

const StatBox = ({ value, label, delay }) => (
  <div
    className={`glass-card-cyan rounded-xl p-4 card-hover animate-fade-in-up opacity-0`}
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <div className="font-display text-2xl font-bold text-gradient-cyan">{value}</div>
    <div className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a8fa6]">{label}</div>
  </div>
);

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.5 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "#c9a45c" : "#00e5ff",
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050d1a] flex flex-col">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Grid bg */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a45c] opacity-[0.04] blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 h-[200px] w-[200px] rounded-full bg-[#00e5ff] opacity-[0.04] blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/2 h-[100px] w-[100px] rounded-full bg-[#ff2d78] opacity-[0.03] blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Corner decorations */}
      <div className="absolute top-20 left-6 w-16 h-16 border-l-2 border-t-2 border-[rgba(0,229,255,0.3)] rounded-tl-lg" />
      <div className="absolute top-20 right-6 w-16 h-16 border-r-2 border-t-2 border-[rgba(201,164,92,0.3)] rounded-tr-lg" />
      <div className="absolute bottom-20 left-6 w-16 h-16 border-l-2 border-b-2 border-[rgba(201,164,92,0.3)] rounded-bl-lg" />
      <div className="absolute bottom-20 right-6 w-16 h-16 border-r-2 border-b-2 border-[rgba(0,229,255,0.3)] rounded-br-lg" />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.05)] px-4 py-2 animate-fade-in-up opacity-0"
                style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
              >
                <span className="h-2 w-2 rounded-full bg-[#00e5ff] animate-pulse-glow shadow-[0_0_6px_#00e5ff]" />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#00e5ff]">
                  Sistem Trading Generasi Berikutnya
                </span>
              </div>

              {/* Heading */}
              <h1
                className="mt-6 font-display text-4xl font-black leading-[1.1] md:text-5xl xl:text-6xl animate-fade-in-up opacity-0"
                style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
              >
                <span className="text-white">Teknologi Perdagangan Kuantitaif untuk</span>
                <br />
                <span className="text-gradient-gold">Pasar Keuangan Global</span>
                <br />
              </h1>

              <p
                className="mt-6 text-base leading-8 text-[#7a8fa6] max-w-lg animate-fade-in-up opacity-0"
                style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
              >
                Sistem algoritmik generasi berikutnya yang menggabungkan riset kuantitatif mendalam, kecerdasan buatan, dan infrastruktur berkinerja tinggi untuk{" "}
                <span className="text-[#c9a45c] font-semibold">alpha yang konsisten</span>.
              </p>

              {/* Buttons */}
              <div
                className="mt-8 flex flex-wrap gap-4 animate-fade-in-up opacity-0"
                style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
              >
                <button className="relative group rounded-xl overflow-hidden">
                  <span className="absolute inset-0 btn-shimmer" />
                  <span className="relative flex items-center gap-2 px-7 py-3.5 font-display text-xs font-bold tracking-[0.15em] uppercase text-[#050d1a]">
                    Jelajahi Teknologi
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                <button className="relative group rounded-xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] px-7 py-3.5 font-display text-xs font-bold tracking-[0.15em] uppercase text-white transition-all hover:border-[rgba(0,229,255,0.35)] hover:bg-[rgba(0,229,255,0.05)] hover:text-[#00e5ff]">
                  <span className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full border-2 border-current flex items-center justify-center">
                      <span className="block h-1.5 w-1 ml-0.5 border-t-transparent border-l-current border-r-transparent border-b-transparent" style={{borderWidth:'3px', borderStyle:'solid', borderColor:'transparent transparent transparent currentColor'}} />
                    </span>
                    Lihat Demo
                  </span>
                </button>
              </div>

              {/* Stats row */}
              <div
                className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up opacity-0"
                style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
              >
                <StatBox value="12+" label="Strategi Aktif" delay={400} />
                <StatBox value="24/7" label="Live Monitor" delay={500} />
                <StatBox value="99.97%" label="Uptime" delay={600} />
                <StatBox value="Global" label="Cakupan Pasar" delay={700} />
              </div>
            </div>

            {/* Right — chart visualization */}
            <div
              className="relative animate-fade-in-up opacity-0"
              style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
            >
              <div className="relative rounded-2xl border border-[rgba(0,229,255,0.2)] bg-[rgba(8,21,38,0.8)] backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(0,229,255,0.08)]">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a8fa6]">Portfolio Performance</div>
                    <div className="font-display text-2xl font-bold text-gradient-cyan mt-1">+38.7%</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#00e5ff] animate-pulse" />
                    <span className="font-mono text-[9px] tracking-widest text-[#00e5ff] uppercase">Live</span>
                  </div>
                </div>

                {/* Fake chart bars */}
                <div className="flex items-end gap-1.5 h-36 mb-4">
                  {[40,55,35,70,50,80,60,90,65,100,75,88,70,95,85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t relative overflow-hidden" style={{ height: `${h}%` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff] to-[#4dd9ff] opacity-70 rounded-t" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00e5ff] to-transparent opacity-30" />
                      {i === 14 && (
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#c9a45c] shadow-[0_0_8px_#c9a45c]" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Strategy list */}
                <div className="space-y-2">
                  {[
                    { name: "Trend Forex", val: "+28.4%", color: "#00e5ff" },
                    { name: "Crypto Momentum", val: "+41.2%", color: "#c9a45c" },
                    { name: "Gold Mean Rev.", val: "+34.1%", color: "#ff2d78" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg bg-[rgba(255,255,255,0.03)] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color, boxShadow: `0 0 6px ${s.color}` }} />
                        <span className="font-mono text-xs text-[#7a8fa6]">{s.name}</span>
                      </div>
                      <span className="font-mono text-xs font-bold" style={{ color: s.color }}>{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-px rounded-2xl border border-[rgba(0,229,255,0.1)] pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-[#00e5ff] to-transparent opacity-60" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-xl border border-[rgba(201,164,92,0.4)] bg-[rgba(5,13,26,0.9)] px-4 py-3 backdrop-blur animate-float shadow-[0_0_20px_rgba(201,164,92,0.2)]">
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#7a8fa6] uppercase">Sharpe Ratio</div>
                <div className="font-display text-xl font-bold neon-gold">1.87</div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-xl border border-[rgba(255,45,120,0.3)] bg-[rgba(5,13,26,0.9)] px-4 py-3 backdrop-blur animate-float shadow-[0_0_20px_rgba(255,45,120,0.15)]" style={{ animationDelay: "1s" }}>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#7a8fa6] uppercase">Win Rate</div>
                <div className="font-display text-xl font-bold" style={{ color: "#ff2d78", textShadow: "0 0 15px rgba(255,45,120,0.5)" }}>68.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative border-t border-[rgba(201,164,92,0.1)] bg-[rgba(8,21,38,0.8)] backdrop-blur py-3">
        <div className="ticker-wrap">
          <div className="ticker-inner animate-ticker">
            {doubled.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-6">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#7a8fa6]">{item.label}</span>
                <span className={`font-mono text-[10px] font-bold ${item.positive ? "text-[#00e5ff]" : "text-[#ff2d78]"}`}
                  style={{ textShadow: item.positive ? "0 0 8px rgba(0,229,255,0.5)" : "0 0 8px rgba(255,45,120,0.5)" }}>
                  {item.value}
                </span>
                <span className="text-[rgba(201,164,92,0.3)] text-xs">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;