import Layout from "../components/Layout";
import Technology from "../components/Technology";

const TechnologyPage = () => {
  return (
    <Layout>
      <section className="bg-[#050B14] pt-32 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Core Systems
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Teknologi</h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Infrastruktur, model AI, dan lapisan manajemen risiko yang
            menopang performa sistem trading.
          </p>
        </div>
      </section>

      <Technology />
    </Layout>
  );
};

export default TechnologyPage;