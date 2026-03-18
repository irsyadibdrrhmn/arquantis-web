const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-28">
      
      {/* subtle glow background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C9A45C]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        
        {/* label */}
        <span className="inline-block rounded-full border border-[#C9A45C]/20 bg-white/5 px-4 py-1 text-sm text-[#E0C68A] backdrop-blur">
          Sistem Trading Generasi Berikutnya
        </span>

        {/* heading */}
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
          Teknologi Perdagangan Kuantitatif untuk{" "}
          <span className="bg-gradient-to-r from-[#E0C68A] to-[#C9A45C] bg-clip-text text-transparent">
            Pasar Keuangan Global
          </span>
        </h1>

        {/* description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#D9DEE7]">
          Kami membangun sistem perdagangan algoritmik canggih yang menggabungkan riset kuantitatif mendalam, kecerdasan buatan, dan infrastruktur berkinerja tinggi untuk menghasilkan alpha yang konsisten.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          {/* primary */}
          <button className="rounded-xl bg-[#C9A45C] px-6 py-3 font-semibold text-[#081526] shadow-[0_10px_30px_rgba(201,164,92,0.25)] transition hover:bg-[#E0C68A]">
            Jelajahi Teknologi
          </button>

          {/* secondary */}
          <button className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Lihat Produk
          </button>
        </div>
      </div>

      {/* bottom fade biar nyatu ke section berikutnya */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-transparent to-[#081526]" />
    </section>
  );
};

export default Hero;