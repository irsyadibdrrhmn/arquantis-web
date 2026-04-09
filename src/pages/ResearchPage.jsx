import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const bgDark = "#050d1a";
const bgCard = "rgba(8,21,38,0.85)";

const researchCodes = ["R-001","R-002","R-003","R-004","R-005"];
const researchColors = ["#00e5ff","#c9a45c","#ff2d78","#9b5de5","#00e5ff"];
const titleKeys = ["r1title","r2title","r3title","r4title","r5title"];
const descKeys  = ["r1desc", "r2desc", "r3desc", "r4desc", "r5desc"];

const ResearchPage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.research", k);
  const tr = (k) => t("research", k);

  return (
    <Layout>
      <PageHero
        eyebrow={ph("eyebrow")}
        title={
          <>
            <span style={{ background:"linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              {ph("title")}
            </span>
          </>
        }
        subtitle={ph("subtitle")}
        accent="gold"
      />

      <section className="research-section" style={{ background: bgDark, position:"relative", padding:"96px 0", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute", top:"30%", right:0, width:400, height:400, background:"#c9a45c", opacity:0.025, filter:"blur(100px)", borderRadius:"50%", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"10%", left:"10%", width:300, height:300, background:"#9b5de5", opacity:0.025, filter:"blur(90px)", borderRadius:"50%", pointerEvents:"none" }} />

        <div style={{ position:"relative", maxWidth:1152, margin:"0 auto", padding:"0 24px" }}>
          {/* Section label */}
          <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:48 }}>
            <div style={{ height:1, width:40, background:"linear-gradient(90deg,transparent,rgba(201,164,92,0.5))" }} />
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.3em", textTransform:"uppercase", color:"#c9a45c" }}>
              // {tr("areaLabel")}
            </span>
            <div style={{ height:1, flex:1, background:"rgba(201,164,92,0.1)" }} />
          </div>

          {/* Cards grid */}
          <div className="research-grid" style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:24 }}>
            {titleKeys.map((tk, i) => {
              const color = researchColors[i];
              return (
                <div
                  key={i}
                  className="card-hover group"
                  style={{ position:"relative", borderRadius:16, padding:32, background:bgCard, border:"1px solid rgba(255,255,255,0.06)", overflow:"hidden" }}
                >
                  <div style={{ position:"absolute", inset:0, borderRadius:16, pointerEvents:"none", background:`radial-gradient(circle at top left, ${color}12 0%, transparent 60%)`, opacity:0, transition:"opacity 0.4s" }} className="group-hover:opacity-100" />
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:1, pointerEvents:"none", background:`linear-gradient(90deg,transparent,${color},transparent)`, opacity:0, transition:"opacity 0.4s" }} className="group-hover:opacity-100" />

                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color, border:`1px solid ${color}30`, background:`${color}10`, borderRadius:8, padding:"5px 12px" }}>
                      {researchCodes[i]}
                    </span>
                    <div className="animate-pulse-glow" style={{ width:8, height:8, borderRadius:"50%", background:color, boxShadow:`0 0 8px ${color}` }} />
                  </div>

                  <div style={{ fontFamily:"'Orbitron',monospace", fontSize:52, fontWeight:900, color, opacity:0.08, lineHeight:1, marginBottom:6, userSelect:"none" }}>
                    {String(i+1).padStart(2,"0")}
                  </div>

                  <h3 style={{ fontFamily:"'Orbitron',monospace", fontSize:14, fontWeight:700, color:"#fff", marginBottom:10, lineHeight:1.5 }}>
                    {tr(tk)}
                  </h3>
                  <p style={{ fontSize:13, lineHeight:1.85, color:"#7a8fa6" }}>{tr(descKeys[i])}</p>

                  <div style={{ marginTop:24, display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ height:1, flex:1, background:`linear-gradient(90deg,${color}40,transparent)` }} />
                    <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color }}>{tr("active")}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{ marginTop:64, textAlign:"center" }}>
            <div className="research-cta-card" style={{ display:"inline-flex", flexDirection:"column", alignItems:"center", gap:20, borderRadius:16, padding:"40px 56px", border:"1px solid rgba(201,164,92,0.2)", background:"rgba(8,21,38,0.7)", backdropFilter:"blur(20px)" }}>
              <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", color:"#c9a45c" }}>
                // {tr("ctaEyebrow")}
              </span>
              <h3 style={{ fontFamily:"'Orbitron',monospace", fontSize:20, fontWeight:900, color:"#fff", margin:0 }}>
                {tr("ctaTitle")}
              </h3>
              <p style={{ fontSize:13, color:"#7a8fa6", maxWidth:400, lineHeight:1.8, margin:0 }}>
                {tr("ctaSub")}
              </p>
              <button className="relative overflow-hidden rounded-xl" style={{ marginTop:4 }}>
                <span className="absolute inset-0 btn-shimmer" />
                <span className="relative block" style={{ padding:"12px 28px", fontFamily:"'Orbitron',monospace", fontSize:11, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#050d1a" }}>
                  {tr("ctaBtn")}
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
