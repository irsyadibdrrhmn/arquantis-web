import Layout from "../components/Layout";

const highlights = [
  {
    number: "1",
    title: "Riset Mendalam",
    desc: "Strategi dibangun di atas validasi empiris dan pengujian statistik yang disiplin.",
  },
  {
    number: "2",
    title: "Manajemen Risiko Ketat",
    desc: "Setiap strategi dipantau dengan parameter risiko yang terukur dan real-time.",
  },
  {
    number: "3",
    title: "Diversifikasi Portofolio",
    desc: "Penyebaran risiko lintas aset dan strategi untuk menjaga ketahanan kinerja.",
  },
  {
    number: "4",
    title: "Eksekusi Trading Sistematis",
    desc: "Otomatisasi penuh untuk konsistensi keputusan dan presisi eksekusi.",
  },
];

const partners = [
  {
    title: "Investor Institusi",
    desc: "Kemitraan strategis untuk alokasi dana pada strategi kuantitatif berkapasitas tinggi.",
  },
  {
    title: "Mitra Teknologi Strategis",
    desc: "Kolaborasi infrastruktur, penyediaan likuiditas, dan integrasi sistem perdagangan.",
  },
];

const InvestorPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Investor Relations
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Hubungan Investor
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#D9DEE7]">
            Membangun kemitraan jangka panjang melalui transparansi, keselarasan
            kepentingan, dan keunggulan teknologi.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F7FB] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#081526]">
                Filosofi Investasi
              </h2>
              <p className="mt-5 text-lg leading-9 text-[#5A6B7F]">
                Kami percaya bahwa pasar keuangan pada dasarnya efisien, namun
                anomali jangka pendek selalu ada. Pendekatan sistematis kami
                dirancang untuk menangkap anomali ini secara konsisten melalui
                riset kuantitatif, automasi, dan kontrol risiko yang terukur.
              </p>

              <div className="mt-10 space-y-5">
                {highlights.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-5 rounded-2xl border border-[#C9A45C]/12 bg-[#EEF3F8] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#081526] text-lg font-bold text-white">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#081526]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[#5A6B7F]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#C9A45C]/20 bg-white p-8 shadow-[0_10px_30px_rgba(8,21,38,0.08)]">
              <h2 className="text-3xl font-bold text-[#081526]">
                Kerjasama Investasi
              </h2>
              <p className="mt-5 text-lg leading-9 text-[#5A6B7F]">
                Arquantis membuka peluang kemitraan strategis dengan entitas
                yang memahami nilai dari pendekatan investasi kuantitatif dan
                infrastruktur eksekusi sistematis.
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {partners.map((item, index) => (
                  <div key={index}>
                    <div className="mb-4 h-12 w-12 rounded-2xl bg-[#EEF3F8]" />
                    <h3 className="text-2xl font-bold text-[#081526]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[#5A6B7F]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[32px] bg-gradient-to-r from-[#081526] to-[#102845] px-8 py-14 text-center shadow-[0_20px_80px_rgba(8,21,38,0.18)]">
            <h2 className="text-4xl font-bold text-white">
              Tertarik Menjadi Mitra?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#D9DEE7]">
              Tim hubungan investor kami siap mendiskusikan bagaimana teknologi
              Arquantis dapat diselaraskan dengan tujuan investasi Anda.
            </p>

            <button className="mt-8 rounded-xl bg-[#C9A45C] px-8 py-4 text-lg font-semibold text-[#081526] transition hover:bg-[#E0C68A]">
              Hubungi Tim Kami →
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorPage;