const About = () => {
  return (
    <section className="bg-[#050B14] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Tentang Kami
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Membangun Infrastruktur Trading yang Cepat, Presisi, dan Cerdas
          </h2>
          <p className="mt-5 text-gray-400">
            Arquantis adalah perusahaan teknologi keuangan yang berfokus pada
            quantitative trading, machine learning, dan risk intelligence untuk
            menghadirkan sistem perdagangan modern.
          </p>
          <p className="mt-4 text-gray-400">
            Kami merancang strategi sistematis berbasis data dengan eksekusi
            real-time untuk berbagai kelas aset global.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-cyan-400">12+</p>
              <p className="mt-2 text-sm text-gray-400">Model Strategi</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-cyan-400">24/7</p>
              <p className="mt-2 text-sm text-gray-400">Monitoring Sistem</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-cyan-400">Low Latency</p>
              <p className="mt-2 text-sm text-gray-400">Execution Engine</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-3xl font-bold text-cyan-400">Global</p>
              <p className="mt-2 text-sm text-gray-400">Market Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;