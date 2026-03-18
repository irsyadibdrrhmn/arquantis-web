const Card = ({ title, desc, color = "#00e5ff", icon }) => {
  return (
    <div
      className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(8,21,38,0.7)] p-6 card-hover group overflow-hidden"
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at top left, ${color}0c 0%, transparent 60%)` }}
      />
      {/* top border on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {icon && (
        <div
          className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl border"
          style={{ color, borderColor: `${color}30`, backgroundColor: `${color}10`, textShadow: `0 0 10px ${color}` }}
        >
          {icon}
        </div>
      )}

      <h3 className="font-display text-lg font-bold text-white mb-3">{title}</h3>
      <p className="text-sm leading-7" style={{ color: "#7a8fa6" }}>{desc}</p>

      {/* corner dot */}
      <div
        className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full opacity-40"
        style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
      />
    </div>
  );
};

export default Card;