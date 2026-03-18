import Layout from "../components/Layout";
import About from "../components/About";

const AboutPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Company Profile
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Tentang Kami
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#D9DEE7]">
            Profil perusahaan dengan pendekatan teknologi, riset kuantitatif,
            dan sistem perdagangan modern yang dirancang untuk skala global.
          </p>
        </div>
      </section>

      <About />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[32px] bg-gradient-to-r from-[#081526] to-[#102845] px-8 py-14 text-center shadow-[0_20px_80px_rgba(8,21,38,0.16)]">
            <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
              Positioning Statement
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-4xl">
              Innovative Investment Solutions. Global Vision, Quant Precision.
            </h2>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;