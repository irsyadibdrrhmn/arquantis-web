import Layout from "../components/Layout";
import About from "../components/About";

const AboutPage = () => {
  return (
    <Layout>
      <section className="bg-[#050B14] pt-32 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Company Profile
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Tentang Kami</h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Profil perusahaan dengan pendekatan teknologi, riset kuantitatif,
            dan sistem perdagangan modern.
          </p>
        </div>
      </section>

      <About />
    </Layout>
  );
};

export default AboutPage;