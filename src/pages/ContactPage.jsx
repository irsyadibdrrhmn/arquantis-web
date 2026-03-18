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
      <section className="bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Hubungi Kami
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#D9DEE7]">
            Kami siap menjawab pertanyaan Anda dan mendiskusikan potensi
            kolaborasi.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F7FB] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#081526]">
                Saluran Komunikasi
              </h2>

              <div className="mt-8 space-y-6">
                {contactCards.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-[#C9A45C]/15 bg-white p-8 shadow-[0_10px_30px_rgba(8,21,38,0.08)]"
                  >
                    <div className="mb-5 h-14 w-14 rounded-2xl bg-[#EEF3F8]" />
                    <h3 className="text-2xl font-bold text-[#081526]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[#5A6B7F]">{item.desc}</p>
                    <p className="mt-5 font-medium text-[#102845]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#C9A45C]/15 bg-white p-8 shadow-[0_10px_30px_rgba(8,21,38,0.08)]">
              <h2 className="text-4xl font-bold text-[#081526]">
                Kirim Pesan
              </h2>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-[#081526]">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-[#D9DEE7] bg-[#F8FAFC] px-4 py-4 text-[#081526] outline-none placeholder:text-[#7C8896] focus:border-[#C9A45C]"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-[#081526]">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-[#D9DEE7] bg-[#F8FAFC] px-4 py-4 text-[#081526] outline-none placeholder:text-[#7C8896] focus:border-[#C9A45C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#081526]">
                    Subjek
                  </label>
                  <input
                    type="text"
                    placeholder="Pertanyaan tentang kemitraan"
                    className="w-full rounded-xl border border-[#D9DEE7] bg-[#F8FAFC] px-4 py-4 text-[#081526] outline-none placeholder:text-[#7C8896] focus:border-[#C9A45C]"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-[#081526]">
                    Pesan
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Tulis pesan Anda di sini..."
                    className="w-full rounded-xl border border-[#D9DEE7] bg-[#F8FAFC] px-4 py-4 text-[#081526] outline-none placeholder:text-[#7C8896] focus:border-[#C9A45C]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-[#102845] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#081526]"
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