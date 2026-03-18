import Layout from "../components/Layout";

const contactCards = [
  {
    title: "Informasi Umum",
    desc: "Pertanyaan umum tentang perusahaan dan layanan kami.",
    value: "info@arquantis.com",
  },
  {
    title: "Kerjasama Bisnis",
    desc: "Untuk peluang kolaborasi, partnership, dan integrasi bisnis.",
    value: "partnership@arquantis.com",
  },
  {
    title: "Hubungan Investor",
    desc: "Komunikasi terkait kemitraan investasi dan institusional.",
    value: "investor@arquantis.com",
  },
];

const ContactPage = () => {
  return (
    <Layout>
      <section className="bg-[#050B14] pt-32 pb-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">
            Hubungi Kami
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg text-gray-400">
            Kami siap menjawab pertanyaan Anda dan mendiskusikan potensi
            kolaborasi.
          </p>
        </div>
      </section>

      <section className="bg-[#050B14] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl font-bold">Saluran Komunikasi</h2>

              <div className="mt-8 space-y-6">
                {contactCards.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
                  >
                    <div className="mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-gray-400">{item.desc}</p>
                    <p className="mt-5 font-medium text-cyan-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <h2 className="text-4xl font-bold">Kirim Pesan</h2>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-white">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-[#0C1528] px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-white">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#0C1528] px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Subjek
                  </label>
                  <input
                    type="text"
                    placeholder="Pertanyaan tentang kemitraan"
                    className="w-full rounded-xl border border-white/10 bg-[#0C1528] px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-white">
                    Pesan
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full rounded-xl border border-white/10 bg-[#0C1528] px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-[#08111F] transition hover:bg-yellow-400"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;