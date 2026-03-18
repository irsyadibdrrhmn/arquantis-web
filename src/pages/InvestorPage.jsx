import Layout from "../components/Layout";
import PageHero from "../components/PageHero";

const highlights = [
  { title: "Riset Mendalam", desc: "Strategi dibangun di atas validasi empiris dan pengujian statistik yang disiplin.", color: "#00e5ff", num: "01" },
  { title: "Manajemen Risiko Ketat", desc: "Setiap strategi dipantau dengan parameter risiko yang terukur dan real-time.", color: "#c9a45c", num: "02" },
  { title: "Diversifikasi Portofolio", desc: "Penyebaran risiko lintas aset dan strategi untuk menjaga ketahanan kinerja.", color: "#ff2d78", num: "03" },
  { title: "Eksekusi Trading Sistematis", desc: "Otomatisasi penuh untuk konsistensi keputusan dan presisi eksekusi.", color: "#9b5de5", num: "04" },
];

const partners = [
  { title: "Investor Institusi", desc: "Kemitraan strategis untuk alokasi dana pada strategi kuantitatif berkapasitas tinggi.", color: "#00e5ff", icon: "◈" },
  { title: "Mitra Teknologi Strategis", desc: "Kolaborasi infrastruktur, penyediaan likuiditas, dan integrasi sistem perdagangan.", color: "#c9a45c", icon: "⬡" },
];

const keyMetrics = [
  { val: "4+", label: "Kelas Aset" },
  { val: "12+", label: "Strategi" },
  { val: "1.87", label: "Avg Sharpe" },
  { val: "99.97%", label: "Uptime" },
];

const bgDark = "#050d1a";
const bgCard = "rgba(8,21,38,0.85)";

const InvestorPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Investor_Relations"
        title={
          <>
            Hubungan{" "}
            <span style={{ color: "#00e5ff", textShadow: "0 0 20px rgba(0,229,255,0.5)" }}>
              Investor
            </span>
          </>
        }
        subtitle="Membangun kemitraan jangka panjang melalui transparansi, keselarasan kepentingan, dan keunggulan teknologi."
        accent="cyan"
      />

      <section style={{ background: bgDark, position: "relative", padding: "96px 0", overflow: "hidden" }}>
        {/* bg layers */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div style={{ position: "absolute", top: 0, left: "20%", width: 500, height: 500, background: "#00e5ff", opacity: 0.02, filter: "blur(120px)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "20%", right: 0, width: 400, height: 400, background: "#c9a45c", opacity: 0.025, filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>

          {/* top key metrics bar */}
          <div style={{ borderRadius: 16, border: "1px solid rgba(0,229,255,0.12)", background: "rgba(8,21,38,0.7)", padding: "24px 32px", marginBottom: 56, backdropFilter: "blur(20px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
              {keyMetrics.map((m, i) => (
                <div key={i} style={{ textAlign: "center", borderRight: i < keyMetrics.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", padding: "8px 0" }}>
                  <div style={{ fontFamily: "'Orbitron',monospace", fontSize: 28, fontWeight: 900, background: "linear-gradient(135deg,#00e5ff,#4dd9ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {m.val}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#7a8fa6", marginTop: 4 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* two-col layout */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>

            {/* LEFT: Philosophy + highlights */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 24, background: "#00e5ff" }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#00e5ff" }}>
                  // Filosofi_Investasi
                </span>
              </div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                Filosofi{" "}
                <span style={{ color: "#00e5ff", textShadow: "0 0 15px rgba(0,229,255,0.4)" }}>Investasi</span>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "#7a8fa6", marginBottom: 32 }}>
                Kami percaya bahwa pasar keuangan pada dasarnya efisien, namun anomali jangka pendek selalu ada. Pendekatan sistematis kami dirancang untuk menangkap anomali ini secara konsisten melalui{" "}
                <span style={{ color: "#00e5ff", fontWeight: 600 }}>riset kuantitatif</span>,{" "}
                automasi, dan{" "}
                <span style={{ color: "#c9a45c", fontWeight: 600 }}>kontrol risiko yang terukur</span>.
              </p>

              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 16, borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.05)", background: "rgba(8,21,38,0.7)",
                    padding: 20, marginBottom: 12,
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 700,
                    color: item.color, border: `1px solid ${item.color}30`, background: `${item.color}10`,
                  }}>
                    {item.num}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: 12, lineHeight: 1.7, color: "#7a8fa6", margin: 0 }}>{item.desc}</p>
                  </div>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, boxShadow: `0 0 6px ${item.color}`, flexShrink: 0, marginTop: 4 }} />
                </div>
              ))}
            </div>

            {/* RIGHT: Partnership */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 24, background: "#c9a45c" }} />
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9a45c" }}>
                  // Kerjasama_Investasi
                </span>
              </div>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                Kerjasama{" "}
                <span style={{ background: "linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Investasi
                </span>
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "#7a8fa6", marginBottom: 32 }}>
                Arquantis membuka peluang kemitraan strategis dengan entitas yang memahami nilai dari pendekatan investasi kuantitatif dan infrastruktur eksekusi sistematis.
              </p>

              {partners.map((item, i) => (
                <div
                  key={i}
                  className="card-hover group"
                  style={{
                    position: "relative", borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.06)", background: bgCard,
                    padding: 28, marginBottom: 20, overflow: "hidden",
                  }}
                >
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none",
                    background: `radial-gradient(circle at top left, ${item.color}0c 0%, transparent 60%)`,
                    opacity: 0, transition: "opacity 0.4s",
                  }} className="group-hover:opacity-100" />

                  <div style={{
                    width: 48, height: 48, borderRadius: 12, marginBottom: 16,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, color: item.color,
                    border: `1px solid ${item.color}30`, background: `${item.color}10`,
                    textShadow: `0 0 10px ${item.color}`,
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Orbitron',monospace", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 10 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "#7a8fa6", margin: 0 }}>{item.desc}</p>
                </div>
              ))}

              {/* Terminal window */}
              <div style={{ borderRadius: 12, border: "1px solid rgba(0,229,255,0.12)", background: "rgba(5,13,26,0.9)", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,229,255,0.03)" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff2d78", opacity: 0.8 }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#c9a45c", opacity: 0.8 }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#00e5ff", opacity: 0.8 }} />
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.2em", color: "#7a8fa6", marginLeft: 8 }}>
                    investor_summary.json
                  </span>
                </div>
                <div style={{ padding: "20px 20px", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, lineHeight: 2, color: "#7a8fa6" }}>
                  <span style={{ color: "#3a5070" }}>{"{"}</span><br />
                  <span style={{ paddingLeft: 20 }}><span style={{ color: "#00e5ff" }}>"strategies"</span><span style={{ color: "#c9a45c" }}>: </span><span style={{ color: "#e0c68a" }}>"12+"</span>,</span><br />
                  <span style={{ paddingLeft: 20 }}><span style={{ color: "#00e5ff" }}>"avg_sharpe"</span><span style={{ color: "#c9a45c" }}>: </span><span style={{ color: "#e0c68a" }}>1.87</span>,</span><br />
                  <span style={{ paddingLeft: 20 }}><span style={{ color: "#00e5ff" }}>"markets"</span><span style={{ color: "#c9a45c" }}>: </span><span style={{ color: "#e0c68a" }}>["FX","CRYPTO","GOLD","DERIV"]</span>,</span><br />
                  <span style={{ paddingLeft: 20 }}><span style={{ color: "#00e5ff" }}>"status"</span><span style={{ color: "#c9a45c" }}>: </span><span style={{ color: "#ff2d78" }}>"OPEN_TO_PARTNERS"</span></span><br />
                  <span style={{ color: "#3a5070" }}>{"}"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{
            marginTop: 64, borderRadius: 20, overflow: "hidden", position: "relative",
            background: "linear-gradient(135deg, #081526 0%, #0d2040 50%, #081526 100%)",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(rgba(201,164,92,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,164,92,0.05) 1px,transparent 1px)",
              backgroundSize: "60px 60px", pointerEvents: "none",
            }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(201,164,92,0.5),transparent)" }} />
            <div style={{ position: "relative", textAlign: "center", padding: "64px 32px" }}>
              <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: 32, fontWeight: 900, color: "#fff", marginBottom: 16 }}>
                Tertarik Menjadi{" "}
                <span style={{ background: "linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Mitra
                </span>?
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.85, color: "#7a8fa6", maxWidth: 560, margin: "0 auto 32px" }}>
                Tim hubungan investor kami siap mendiskusikan bagaimana teknologi Arquantis dapat diselaraskan dengan tujuan investasi Anda.
              </p>
              <button className="relative overflow-hidden rounded-xl">
                <span className="absolute inset-0 btn-shimmer" />
                <span className="relative block" style={{ padding: "14px 36px", fontFamily: "'Orbitron',monospace", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#050d1a" }}>
                  Hubungi Tim Kami →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorPage;