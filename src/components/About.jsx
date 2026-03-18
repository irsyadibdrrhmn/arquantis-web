const stats = [
  { value: "12+", label: "Model Strategi" },
  { value: "24/7", label: "Monitoring Sistem" },
  { value: "Low Latency", label: "Execution Engine" },
  { value: "Global", label: "Market Coverage" },
];

const About = () => {
  return (
    <section className="bg-[#F5F7FB] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#081526] md:text-5xl">
            Tentang Arquantis
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#5A6B7F]">
            PT Arquantis Teknologi Investama adalah perusahaan teknologi keuangan yang berfokus pada pengembangan sistem perdagangan kuantitatif dan algoritmik untuk pasar keuangan global.
          </p>

          <p className="mt-4 text-lg leading-8 text-[#5A6B7F]">
            Didirikan oleh tim ahli matematika, ilmuwan data, dan praktisi pasar keuangan, kami menerapkan pendekatan ilmiah yang ketat dalam menganalisis data pasar untuk menemukan pola yang dapat diprediksi dan dieksploitasi secara sistematis.
          </p>

          <p className="mt-4 text-lg leading-8 text-[#5A6B7F]">
            Fokus utama kami adalah menghilangkan bias emosional dari keputusan investasi melalui otomatisasi penuh, mulai dari generasi sinyal hingga eksekusi order dan manajemen risiko, memastikan disiplin yang konsisten dalam setiap kondisi pasar.
          </p>
        </div>

        <div className="rounded-[32px] border border-[#C9A45C]/15 bg-white p-8 shadow-[0_12px_32px_rgba(8,21,38,0.08)]">
          <div className="grid grid-cols-2 gap-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#D9DEE7] bg-[#F8FAFC] p-6"
              >
                <p className="text-2xl font-bold text-[#102845] md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5A6B7F]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;