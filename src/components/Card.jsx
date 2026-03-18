const Card = ({ title, desc }) => {
  return (
    <div className="rounded-3xl border border-[#C9A45C]/15 bg-white p-6 shadow-[0_10px_30px_rgba(8,21,38,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(8,21,38,0.12)]">
      <h3 className="text-lg font-bold text-[#081526]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5A6B7F]">{desc}</p>
    </div>
  );
};

export default Card;