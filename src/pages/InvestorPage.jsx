import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const bgDark = "#050d1a";
const bgCard = "rgba(8,21,38,0.85)";

const highlightNums = ["01","02","03","04"];
const highlightColors = ["#00e5ff","#c9a45c","#ff2d78","#9b5de5"];
const highlightTitleKeys = ["h1title","h2title","h3title","h4title"];
const highlightDescKeys  = ["h1desc","h2desc","h3desc","h4desc"];

const InvestorPage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.investor", k);
  const ti = (k) => t("investor", k);

  const keyMetrics = [
    { val:"4+",    lblKey:"metricAssets" },
    { val:"12+",   lblKey:"metricStrategies" },
    { val:"1.87",  lblKey:"metricSharpe" },
    { val:"99.97%",lblKey:"metricUptime" },
  ];

  const partners = [
    { titleKey:"p1title", descKey:"p1desc", color:"#00e5ff", icon:"◈" },
    { titleKey:"p2title", descKey:"p2desc", color:"#c9a45c", icon:"⬡" },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow={ph("eyebrow")}
        title={
          <>
            <span style={{ color:"#00e5ff", textShadow:"0 0 20px rgba(0,229,255,0.5)" }}>
              {ph("title")}
            </span>
          </>
        }
        subtitle={ph("subtitle")}
        accent="cyan"
      />

      <section className="investor-section" style={{ background:bgDark, position:"relative", padding:"96px 0", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute", top:0, left:"20%", width:500, height:500, background:"#00e5ff", opacity:0.02, filter:"blur(120px)", borderRadius:"50%", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"20%", right:0, width:400, height:400, background:"#c9a45c", opacity:0.025, filter:"blur(100px)", borderRadius:"50%", pointerEvents:"none" }} />

        <div style={{ position:"relative", maxWidth:1152, margin:"0 auto", padding:"0 24px" }}>

          {/* Metrics bar */}
          <div className="investor-metrics-wrap" style={{ borderRadius:16, border:"1px solid rgba(0,229,255,0.12)", background:"rgba(8,21,38,0.7)", padding:"24px 32px", marginBottom:56, backdropFilter:"blur(20px)" }}>
            <div className="investor-metrics-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0 }}>
              {keyMetrics.map((m, i) => (
                <div key={i} style={{ textAlign:"center", borderRight: i < keyMetrics.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none", padding:"8px 0" }}>
                  <div style={{ fontFamily:"'Orbitron',monospace", fontSize:28, fontWeight:900, background:"linear-gradient(135deg,#00e5ff,#4dd9ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{m.val}</div>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.2em", textTransform:"uppercase", color:"#7a8fa6", marginTop:4 }}>{ti(m.lblKey)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-col */}
          <div className="investor-main-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }}>

            {/* LEFT */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ height:1, width:24, background:"#00e5ff" }} />
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.25em", textTransform:"uppercase", color:"#00e5ff" }}>
                  // {ti("philosophyLabel")}
                </span>
              </div>
              <h2 style={{ fontFamily:"'Orbitron',monospace", fontSize:28, fontWeight:900, color:"#fff", marginBottom:20, lineHeight:1.2 }}>
                {ti("philosophyTitle")}{" "}
                <span style={{ color:"#00e5ff", textShadow:"0 0 15px rgba(0,229,255,0.4)" }}>{ti("philosophyAccent")}</span>
              </h2>
              <p style={{ fontSize:14, lineHeight:1.85, color:"#7a8fa6", marginBottom:32 }}>
                {ti("philosophyDesc")}{" "}
                <span style={{ color:"#00e5ff", fontWeight:600 }}>{ti("philAccent1")}</span>
                {ti("philDesc2")}{" "}
                <span style={{ color:"#c9a45c", fontWeight:600 }}>{ti("philAccent2")}</span>
                {ti("philDesc3")}
              </p>

              {highlightTitleKeys.map((tk, i) => (
                <div
                  key={i}
                  className="card-hover"
                  style={{ display:"flex", alignItems:"flex-start", gap:16, borderRadius:12, border:"1px solid rgba(255,255,255,0.05)", background:"rgba(8,21,38,0.7)", padding:20, marginBottom:12 }}
                >
                  <div style={{ width:36, height:36, borderRadius:10, flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'JetBrains Mono',monospace", fontSize:11, fontWeight:700, color:highlightColors[i], border:`1px solid ${highlightColors[i]}30`, background:`${highlightColors[i]}10` }}>
                    {highlightNums[i]}
                  </div>
                  <div style={{ flex:1 }}>
                    <h3 style={{ fontFamily:"'Orbitron',monospace", fontSize:13, fontWeight:700, color:"#fff", marginBottom:6 }}>{ti(tk)}</h3>
                    <p style={{ fontSize:12, lineHeight:1.7, color:"#7a8fa6", margin:0 }}>{ti(highlightDescKeys[i])}</p>
                  </div>
                  <div style={{ width:6, height:6, borderRadius:"50%", background:highlightColors[i], boxShadow:`0 0 6px ${highlightColors[i]}`, flexShrink:0, marginTop:4 }} />
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <div style={{ height:1, width:24, background:"#c9a45c" }} />
                <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.25em", textTransform:"uppercase", color:"#c9a45c" }}>
                  // {ti("partnerLabel")}
                </span>
              </div>
              <h2 style={{ fontFamily:"'Orbitron',monospace", fontSize:28, fontWeight:900, color:"#fff", marginBottom:20, lineHeight:1.2 }}>
                {ti("partnerTitle")}{" "}
                <span style={{ background:"linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{ti("partnerAccent")}</span>
              </h2>
              <p style={{ fontSize:14, lineHeight:1.85, color:"#7a8fa6", marginBottom:32 }}>{ti("partnerDesc")}</p>

              {partners.map((item, i) => (
                <div key={i} className="card-hover group" style={{ position:"relative", borderRadius:16, border:"1px solid rgba(255,255,255,0.06)", background:bgCard, padding:28, marginBottom:20, overflow:"hidden" }}>
                  <div style={{ position:"absolute", inset:0, borderRadius:16, pointerEvents:"none", background:`radial-gradient(circle at top left, ${item.color}0c 0%, transparent 60%)`, opacity:0, transition:"opacity 0.4s" }} className="group-hover:opacity-100" />
                  <div style={{ width:48, height:48, borderRadius:12, marginBottom:16, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, color:item.color, border:`1px solid ${item.color}30`, background:`${item.color}10`, textShadow:`0 0 10px ${item.color}` }}>{item.icon}</div>
                  <h3 style={{ fontFamily:"'Orbitron',monospace", fontSize:15, fontWeight:700, color:"#fff", marginBottom:10 }}>{ti(item.titleKey)}</h3>
                  <p style={{ fontSize:13, lineHeight:1.75, color:"#7a8fa6", margin:0 }}>{ti(item.descKey)}</p>
                </div>
              ))}

              {/* Terminal */}
              <div style={{ borderRadius:12, border:"1px solid rgba(0,229,255,0.12)", background:"rgba(5,13,26,0.9)", overflow:"hidden" }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 16px", borderBottom:"1px solid rgba(255,255,255,0.04)", background:"rgba(0,229,255,0.03)" }}>
                  {["#ff2d78","#c9a45c","#00e5ff"].map((c,i)=><div key={i} style={{ width:10, height:10, borderRadius:"50%", background:c, opacity:0.8 }} />)}
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:9, letterSpacing:"0.2em", color:"#7a8fa6", marginLeft:8 }}>investor_summary.json</span>
                </div>
                <div style={{ padding:"20px", fontFamily:"'JetBrains Mono',monospace", fontSize:11, lineHeight:2, color:"#7a8fa6" }}>
                  <span style={{ color:"#3a5070" }}>{"{"}</span><br/>
                  <span style={{ paddingLeft:20 }}><span style={{ color:"#00e5ff" }}>"strategies"</span><span style={{ color:"#c9a45c" }}>: </span><span style={{ color:"#e0c68a" }}>"12+"</span>,</span><br/>
                  <span style={{ paddingLeft:20 }}><span style={{ color:"#00e5ff" }}>"avg_sharpe"</span><span style={{ color:"#c9a45c" }}>: </span><span style={{ color:"#e0c68a" }}>1.87</span>,</span><br/>
                  <span style={{ paddingLeft:20 }}><span style={{ color:"#00e5ff" }}>"markets"</span><span style={{ color:"#c9a45c" }}>: </span><span style={{ color:"#e0c68a" }}>["FX","CRYPTO","GOLD","DERIV"]</span>,</span><br/>
                  <span style={{ paddingLeft:20 }}><span style={{ color:"#00e5ff" }}>"status"</span><span style={{ color:"#c9a45c" }}>: </span><span style={{ color:"#ff2d78" }}>"OPEN_TO_PARTNERS"</span></span><br/>
                  <span style={{ color:"#3a5070" }}>{"}"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div style={{ marginTop:64, borderRadius:20, overflow:"hidden", position:"relative", background:"linear-gradient(135deg, #081526 0%, #0d2040 50%, #081526 100%)" }}>
            <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(201,164,92,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,164,92,0.05) 1px,transparent 1px)", backgroundSize:"60px 60px", pointerEvents:"none" }} />
            <div style={{ position:"absolute", top:0, left:0, right:0, height:1, background:"linear-gradient(90deg,transparent,rgba(201,164,92,0.5),transparent)" }} />
            <div className="investor-cta-inner" style={{ position:"relative", textAlign:"center", padding:"64px 32px" }}>
              <h2 className="investor-cta-title" style={{ fontFamily:"'Orbitron',monospace", fontSize:32, fontWeight:900, color:"#fff", marginBottom:16 }}>
                {ti("ctaTitle")}{" "}
                <span style={{ background:"linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  {ti("ctaAccent")}
                </span>
                {ti("ctaQ")}
              </h2>
              <p style={{ fontSize:14, lineHeight:1.85, color:"#7a8fa6", maxWidth:560, margin:"0 auto 32px" }}>{ti("ctaDesc")}</p>
              <button className="relative overflow-hidden rounded-xl">
                <span className="absolute inset-0 btn-shimmer" />
                <span className="relative block" style={{ padding:"14px 36px", fontFamily:"'Orbitron',monospace", fontSize:11, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#050d1a" }}>
                  {ti("ctaBtn")}
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
