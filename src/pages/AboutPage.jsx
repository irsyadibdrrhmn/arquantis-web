import Layout from "../components/Layout";
import About from "../components/About";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const AboutPage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.about", k);

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