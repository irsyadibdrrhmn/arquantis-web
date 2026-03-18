const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050B14] pt-32 pb-24">
      <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"></div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1 text-sm backdrop-blur">
          Sistem Trading Generasi Berikutnya
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
          Teknologi Perdagangan Kuantitatif untuk{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Pasar Keuangan Global
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Menggabungkan riset kuantitatif, AI, dan infrastruktur trading
          ultra-cepat untuk membangun strategi yang adaptif, presisi, dan
          scalable.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(0,209,255,0.35)]">
            Jelajahi Teknologi
          </button>

          <button className="rounded-lg border border-white/20 px-6 py-3 hover:bg-white/5">
            Lihat Solusi Trading
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;