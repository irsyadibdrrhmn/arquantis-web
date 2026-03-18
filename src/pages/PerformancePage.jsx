import Layout from "../components/Layout";
import Performance from "../components/Performance";

const PerformancePage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Performance
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Kinerja
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#D9DEE7]">
            Ringkasan metrik performa strategi untuk membantu menunjukkan
            kualitas eksekusi, stabilitas sistem, dan disiplin pengelolaan
            risiko.
          </p>
        </div>
      </section>

      <Performance />
    </Layout>
  );
};

export default PerformancePage;