import Card from "./Card";

const Features = () => {
  return (
    <section className="bg-[#050B14] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">
          Keunggulan Teknologi Kami
        </h2>
        <p className="mt-3 text-center text-gray-400">
          Infrastruktur modern untuk trading kuantitatif yang efisien dan
          adaptif.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Riset Kuantitatif"
            desc="Model statistik dan analitik mendalam untuk menemukan peluang alpha."
          />
          <Card
            title="Low Latency Execution"
            desc="Mesin eksekusi cepat dengan fokus pada konsistensi dan efisiensi."
          />
          <Card
            title="Risk Monitoring"
            desc="Pemantauan eksposur dan anomali strategi secara real-time."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;