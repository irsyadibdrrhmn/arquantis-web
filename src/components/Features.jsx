import Card from "./Card";

const features = [
  {
    title: "Riset Kuantitatif",
    desc: "Model statistik dan analitik mendalam untuk menemukan peluang alpha di pasar kompleks.",
  },
  {
    title: "Perdaganan Algoritmik",
    desc: "Mesin eksekusi modern dengan fokus pada konsistensi, presisi, dan efisiensi biaya.",
  },
  {
    title: "Manajemen Risiko",
    desc: "Pemantauan eksposur, volatilitas, dan stabilitas strategi secara real-time.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#C9A45C]">
            Keunggulan
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#081526] md:text-5xl">
            Keunggulan Teknologi Kami
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#5A6B7F]">
            Infrastruktur modern untuk quantitative trading yang efisien,
            adaptif, dan dibangun untuk skala institusional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <Card key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;