import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const researchItems = [
  {
    title: "Strategi Trading Algoritmik",
    desc: "Pengembangan model kuantitatif berbasis statistik sinyal pasar dan data historis untuk membangun strategi yang adaptif dan konsisten.",
    color: "#00e5ff",
    code: "R-001",
  },
  {
    title: "Machine Learning dalam Pasar Keuangan",
    desc: "Penerapan deep learning, classification model, dan feature engineering untuk meningkatkan akurasi prediksi dan ketahanan model.",
    color: "#c9a45c",
    code: "R-002",
  },
  {
    title: "Optimasi Portofolio",
    desc: "Alokasi aset dinamis berbasis risk budgeting, covariance analysis, dan objective function optimization.",
    color: "#ff2d78",
    code: "R-003",
  },
  {
    title: "Analisis Mikrostruktur Pasar",
    desc: "Studi mendalam tentang order flow, spread, dan dinamika likuiditas untuk meminimalkan biaya eksekusi.",
    color: "#9b5de5",
    code: "R-004",
  },
  {
    title: "Model Manajemen Risiko",
    desc: "Kuantifikasi drawdown, tail risk, korelasi ekstrem, dan stress testing untuk memastikan stabilitas portofolio.",
    color: "#00e5ff",
    code: "R-005",
  },
];

const bgDark = "#050d1a";
const bgCard = "rgba(8,21,38,0.85)";

const ResearchPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Research"
        title={
          <>
            Riset{" "}
            <span style={{ background: "linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Kuantitatif
            </span>
          </>
        }
        subtitle="Riset adalah inti dari DNA kami. Kami terus mengeksplorasi batas-batas ilmu data keuangan untuk menemukan sumber alpha baru."
        accent="gold"
      />

      <section style={{ background: bgDark, position: "relative", padding: "96px 0", overflow: "hidden" }}>
        {/* grid overlay */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* glow blobs */}
        <div style={{ position: "absolute", top: "30%", right: 0, width: 400, height: 400, background: "#c9a45c", opacity: 0.025, filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "10%", width: 300, height: 300, background: "#9b5de5", opacity: 0.025, filter: "blur(90px)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          {/* label */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ height: 1, width: 40, background: "linear-gradient(90deg,transparent,rgba(201,164,92,0.5))" }} />
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#c9a45c" }}>
              // Active_Research_Areas
            </span>
            <div style={{ height: 1, flex: 1, background: "rgba(201,164,92,0.1)" }} />
          </div>

          {/* cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
            {researchItems.map((item, i) => (
              <div
                key={i}
                className="card-hover group"
                style={{
                  position: "relative", borderRadius: 16, padding: 32,
                  background: bgCard, border: "1px solid rgba(255,255,255,0.06)",
                  overflow: "hidden",
                }}
              >
                {/* hover overlay via inline — use CSS var trick */}
                <div style={{
                  position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none",
                  background: `radial-gradient(circle at top left, ${item.color}12 0%, transparent 60%)`,
                  opacity: 0, transition: "opacity 0.4s",
                }}
                  className="group-hover:opacity-100"
                />
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 1, pointerEvents: "none",
                  background: `linear-gradient(90deg,transparent,${item.color},transparent)`,
                  opacity: 0, transition: "opacity 0.4s",
                }}
                  className="group-hover:opacity-100"
                />

                {/* code badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: item.color, border: `1px solid ${item.color}30`, background: `${item.color}10`,
                    borderRadius: 8, padding: "5px 12px",
                  }}>
                    {item.code}
                  </span>
                  <div className="animate-pulse-glow" style={{ width: 8, height: 8, borderRadius: "50%", background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                </div>

                {/* ghost number */}
                <div style={{ fontFamily: "'Orbitron',monospace", fontSize: 52, fontWeight: 900, color: item.color, opacity: 0.08, lineHeight: 1, marginBottom: 6, userSelect: "none" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.5 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.85, color: "#7a8fa6" }}>{item.desc}</p>

                <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ height: 1, flex: 1, background: `linear-gradient(90deg,${item.color}40,transparent)` }} />
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: item.color }}>
                    Active
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 64, textAlign: "center" }}>
            <div style={{
              display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 20,
              borderRadius: 16, padding: "40px 56px",
              border: "1px solid rgba(201,164,92,0.2)", background: "rgba(8,21,38,0.7)",
              backdropFilter: "blur(20px)",
            }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a45c" }}>
                // Collaboration_Open
              </span>
              <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: 20, fontWeight: 900, color: "#fff", margin: 0 }}>
                Tertarik Berkolaborasi dalam Riset?
              </h3>
              <p style={{ fontSize: 13, color: "#7a8fa6", maxWidth: 400, lineHeight: 1.8, margin: 0 }}>
                Kami membuka peluang kolaborasi dengan akademisi, praktisi pasar, dan institusi keuangan.
              </p>
              <button className="relative overflow-hidden rounded-xl" style={{ marginTop: 4 }}>
                <span className="absolute inset-0 btn-shimmer" />
                <span className="relative block" style={{ padding: "12px 28px", fontFamily: "'Orbitron',monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#050d1a" }}>
                  Hubungi Tim Riset
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchPage;