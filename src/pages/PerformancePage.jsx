import Layout from "../components/Layout";
import Performance from "../components/Performance";

const PerformancePage = () => {
  return (
    <Layout>
      <section className="bg-[#050B14] pt-32 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Metrics
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Kinerja</h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Ringkasan metrik performa strategi untuk membantu menunjukkan
            kualitas eksekusi dan stabilitas sistem.
          </p>
        </div>
      </section>

      <Performance />
    </Layout>
  );
};

export default PerformancePage;