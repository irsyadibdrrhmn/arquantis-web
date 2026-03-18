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
      <section className="bg-[#050B14] pt-32 pb-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Investor Relations
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Hubungan Investor
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg text-gray-400">
            Membangun kemitraan jangka panjang melalui transparansi, keselarasan
            kepentingan, dan keunggulan teknologi.
          </p>
        </div>
      </section>

      <section className="bg-[#050B14] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Filosofi Investasi</h2>
              <p className="mt-5 text-lg leading-9 text-gray-400">
                Kami percaya bahwa pasar keuangan pada dasarnya efisien, namun
                anomali jangka pendek selalu ada. Pendekatan sistematis kami
                dirancang untuk menangkap anomali ini secara konsisten melalui
                riset kuantitatif, automasi, dan kontrol risiko yang terukur.
              </p>

              <div className="mt-10 space-y-5">
                {highlights.map((item) => (
                  <div
                    key={item.number}
                    className="flex items-start gap-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#08111F] text-lg font-bold text-white">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-yellow-400/20 bg-white/[0.03] p-8">
              <h2 className="text-3xl font-bold">Kerjasama Investasi</h2>
              <p className="mt-5 text-lg leading-9 text-gray-400">
                Arquantis membuka peluang kemitraan strategis dengan entitas
                yang memahami nilai dari pendekatan investasi kuantitatif dan
                infrastruktur eksekusi sistematis.
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {partners.map((item, index) => (
                  <div key={index}>
                    <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[32px] bg-[#101C35] px-8 py-14 text-center shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <h2 className="text-4xl font-bold text-white">
              Tertarik Menjadi Mitra?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-300">
              Tim hubungan investor kami siap mendiskusikan bagaimana teknologi
              Arquantis dapat diselaraskan dengan tujuan investasi Anda.
            </p>

            <button className="mt-8 rounded-xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-[#08111F] transition hover:bg-yellow-400">
              Hubungi Tim Kami →
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorPage;