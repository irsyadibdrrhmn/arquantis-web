import Layout from "../components/Layout";
import About from "../components/About";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const AboutPage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.about", k);
  const values = [
    { title: t("aboutPage", "value1Title"), text: t("aboutPage", "value1Text"), color: "#00e5ff" },
    { title: t("aboutPage", "value2Title"), text: t("aboutPage", "value2Text"), color: "#c9a45c" },
    { title: t("aboutPage", "value3Title"), text: t("aboutPage", "value3Text"), color: "#ff2d78" },
    { title: t("aboutPage", "value4Title"), text: t("aboutPage", "value4Text"), color: "#4ade80" },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow={ph("eyebrow")}
        title={
          <>
            <span style={{ background: "linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {ph("title")}
            </span>
          </>
        }
        subtitle={ph("subtitle")}
        accent="gold"
      />

      <About />

      <section style={{ background: "#050d1a", position: "relative", padding: "96px 0 72px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "absolute", top: "18%", left: "10%", width: 320, height: 320, borderRadius: "50%", background: "#00e5ff", opacity: 0.05, filter: "blur(90px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#00e5ff" }}>
              // {t("aboutPage", "vmLabel")}
            </span>
            <h2 style={{ fontFamily: "'Orbitron',monospace", marginTop: 18, fontSize: 34, lineHeight: 1.3, fontWeight: 900, color: "#fff" }}>
              {t("aboutPage", "vmHeading")}
            </h2>
            <p style={{ marginTop: 18, color: "#7a8fa6", lineHeight: 1.8 }}>
              {t("aboutPage", "vmSub")}
            </p>
          </div>

          <div style={{ marginTop: 42, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <div style={{ borderRadius: 20, border: "1px solid rgba(0,229,255,0.2)", background: "rgba(0,229,255,0.05)", padding: "28px 26px" }}>
              <h3 style={{ color: "#00e5ff", fontFamily: "'Orbitron',monospace", fontSize: 22, fontWeight: 800, margin: 0 }}>
                {t("aboutPage", "visionTitle")}
              </h3>
              <p style={{ marginTop: 14, color: "#9cb0c4", lineHeight: 1.8 }}>
                {t("aboutPage", "visionText")}
              </p>
            </div>
            <div style={{ borderRadius: 20, border: "1px solid rgba(201,164,92,0.25)", background: "rgba(201,164,92,0.06)", padding: "28px 26px" }}>
              <h3 style={{ color: "#c9a45c", fontFamily: "'Orbitron',monospace", fontSize: 22, fontWeight: 800, margin: 0 }}>
                {t("aboutPage", "missionTitle")}
              </h3>
              <ul style={{ marginTop: 14, color: "#9cb0c4", lineHeight: 1.8, paddingLeft: 20 }}>
                {[1, 2, 3, 4].map((point) => (
                  <li key={point} style={{ marginBottom: 8 }}>
                    {t("aboutPage", `missionPoint${point}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase", color: "#c9a45c" }}>
                // {t("aboutPage", "valuesLabel")}
              </span>
              <h3 style={{ fontFamily: "'Orbitron',monospace", marginTop: 16, fontSize: 28, lineHeight: 1.3, fontWeight: 900, color: "#fff" }}>
                {t("aboutPage", "valuesHeading")}
              </h3>
              <p style={{ marginTop: 14, color: "#7a8fa6", lineHeight: 1.8 }}>
                {t("aboutPage", "valuesSub")}
              </p>
            </div>

            <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
              {values.map((value) => (
                <div key={value.title} style={{ borderRadius: 16, border: "1px solid rgba(122,143,166,0.25)", background: "rgba(5,13,26,0.75)", padding: "22px 20px", backdropFilter: "blur(14px)" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: value.color, boxShadow: `0 0 14px ${value.color}`, marginBottom: 14 }} />
                  <h4 style={{ margin: 0, color: "#fff", fontSize: 19, fontWeight: 800, fontFamily: "'Orbitron',monospace" }}>
                    {value.title}
                  </h4>
                  <p style={{ marginTop: 10, color: "#8fa2b7", lineHeight: 1.7, fontSize: 14 }}>
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#081526", position: "relative", padding: "80px 0", overflow: "hidden" }}>
        <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"linear-gradient(rgba(201,164,92,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,164,92,0.05) 1px,transparent 1px)", backgroundSize:"60px 60px" }} />
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:500, height:500, background:"#c9a45c", opacity:0.02, filter:"blur(120px)", borderRadius:"50%", pointerEvents:"none" }} />
        <div style={{ position:"relative", maxWidth:896, margin:"0 auto", padding:"0 24px" }}>
          <div style={{ borderRadius:20, border:"1px solid rgba(201,164,92,0.2)", background:"rgba(5,13,26,0.8)", padding:"56px 48px", textAlign:"center", backdropFilter:"blur(20px)" }}>
            <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:10, letterSpacing:"0.35em", textTransform:"uppercase", color:"#c9a45c" }}>
              // {t("aboutPage","posLabel")}
            </span>
            <h2 style={{ fontFamily:"'Orbitron',monospace", fontSize:28, fontWeight:900, color:"#fff", marginTop:20, marginBottom:0, lineHeight:1.3 }}>
              {t("aboutPage","posLine1")}
              <br />
              <span style={{ background:"linear-gradient(135deg,#e0c68a,#c9a45c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                {t("aboutPage","posAccent1")}
              </span>
              {", "}
              <span style={{ color:"#00e5ff", textShadow:"0 0 15px rgba(0,229,255,0.4)" }}>
                {t("aboutPage","posAccent2")}
              </span>
              .
            </h2>
            <div style={{ marginTop:28, height:1, width:120, margin:"28px auto 0", background:"linear-gradient(90deg,transparent,rgba(201,164,92,0.5),transparent)" }} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
