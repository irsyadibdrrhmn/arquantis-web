import Layout from "../components/Layout";
import Performance from "../components/Performance";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const PerformancePage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.performance", k);

  return (
    <Layout>
      <PageHero
        eyebrow={ph("eyebrow")}
        title={
          <>
            <span style={{ color:"#00e5ff", textShadow:"0 0 20px rgba(0,229,255,0.4)" }}>
              {ph("title")}
            </span>
          </>
        }
        subtitle={ph("subtitle")}
        accent="cyan"
      />
      <Performance />
    </Layout>
  );
};

export default PerformancePage;