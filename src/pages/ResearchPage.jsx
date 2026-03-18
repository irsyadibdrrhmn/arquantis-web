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
      <section className="bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Research
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Riset Kuantitatif
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#D9DEE7]">
            Riset adalah inti dari DNA kami. Kami terus mengeksplorasi
            batas-batas ilmu data keuangan untuk menemukan sumber alpha baru.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F7FB] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {researchItems.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-[#C9A45C]/15 bg-white p-8 shadow-[0_10px_30px_rgba(8,21,38,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102845] text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold leading-snug text-[#081526]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-[#5A6B7F]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResearchPage;