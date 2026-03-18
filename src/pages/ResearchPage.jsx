import Layout from "../components/Layout";

const researchItems = [
  {
    title: "Strategi Trading Algoritmik",
    desc: "Pengembangan model kuantitatif berbasis statistik sinyal pasar dan data historis untuk membangun strategi yang adaptif dan konsisten.",
  },
  {
    title: "Machine Learning dalam Pasar Keuangan",
    desc: "Penerapan deep learning, classification model, dan feature engineering untuk meningkatkan akurasi prediksi dan ketahanan model.",
  },
  {
    title: "Optimasi Portofolio",
    desc: "Alokasi aset dinamis berbasis risk budgeting, covariance analysis, dan objective function optimization.",
  },
  {
    title: "Analisis Mikrostruktur Pasar",
    desc: "Studi mendalam tentang order flow, spread, dan dinamika likuiditas untuk meminimalkan biaya eksekusi.",
  },
  {
    title: "Model Manajemen Risiko",
    desc: "Kuantifikasi drawdown, tail risk, korelasi ekstrem, dan stress testing untuk memastikan stabilitas portofolio.",
  },
];

const ResearchPage = () => {
  return (
    <Layout>
      <section className="bg-[#050B14] pt-32 pb-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Research
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Riset Kuantitatif
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg text-gray-400">
            Riset adalah inti dari DNA kami. Kami terus mengeksplorasi
            batas-batas ilmu data keuangan untuk menemukan sumber alpha baru.
          </p>
        </div>
      </section>

      <section className="bg-[#050B14] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {researchItems.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold leading-snug">{item.title}</h3>
                <p className="mt-4 leading-8 text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchPage;