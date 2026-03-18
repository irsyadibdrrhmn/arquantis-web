import Layout from "../components/Layout";
import Performance from "../components/Performance";
import PageHero from "../components/PageHero";

const PerformancePage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Performance"
        title={<>Kinerja <span className="neon-cyan">Strategi</span></>}
        subtitle="Ringkasan metrik performa strategi untuk membantu menunjukkan kualitas eksekusi, stabilitas sistem, dan disiplin pengelolaan risiko."
        accent="cyan"
      />
      <Performance />
    </Layout>
  );
};

export default PerformancePage;