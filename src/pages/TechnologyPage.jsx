import Layout from "../components/Layout";
import Technology from "../components/Technology";
import PageHero from "../components/PageHero";

const TechnologyPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Core_Systems"
        title={<>Teknologi <span className="neon-cyan">Kami</span></>}
        subtitle="Infrastruktur, model AI, dan lapisan manajemen risiko yang menopang performa sistem trading modern."
        accent="cyan"
      />
      <Technology />
    </Layout>
  );
};

export default TechnologyPage;