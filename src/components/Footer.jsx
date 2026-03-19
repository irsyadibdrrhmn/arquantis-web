import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="relative bg-[#030912] border-t border-[rgba(201,164,92,0.1)] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#c9a45c] opacity-[0.02] blur-[100px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,164,92,0.4)] to-transparent" />

      {/* CTA banner */}
      <div className="relative border-b border-[rgba(255,255,255,0.04)] py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c] mb-4">// Ready_To_Start</p>
          <h2 className="font-display text-2xl font-black text-white md:text-4xl">
            {t("footer", "boostHeading")}<br />
            <span className="text-gradient-gold">{t("footer", "boostSub")}</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="relative overflow-hidden rounded-xl group">
              <span className="absolute inset-0 btn-shimmer" />
              <span className="relative flex items-center gap-2 px-7 py-3.5 font-display text-xs font-bold tracking-[0.15em] uppercase text-[#050d1a]">
                {t("footer", "ctaPrimary")}
              </span>
            </Link>
            <Link to="/products" className="rounded-xl border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.04)] px-7 py-3.5 font-display text-xs font-bold tracking-[0.15em] uppercase text-[#00e5ff] hover:bg-[rgba(0,229,255,0.08)] transition-all">
              {t("footer", "ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(201,164,92,0.4)] bg-[rgba(201,164,92,0.1)]">
                <span className="font-display text-sm font-bold text-[#c9a45c]">AQ</span>
              </div>
              <span className="font-display text-sm font-bold tracking-[0.1em] text-[#c9a45c] uppercase">Arquantis</span>
            </div>
            <p className="text-sm leading-7 text-[#7a8fa6]">{t("footer", "tagline")}</p>
            <div className="mt-4 font-mono text-[9px] tracking-[0.2em] text-[#3a5070]">{t("footer", "copyright")}</div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#c9a45c] mb-5">{t("footer", "colCompany")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("footer","aboutLink"),  path: "/about" },
                { label: t("footer","techLink"),   path: "/technology" },
                { label: t("footer","prodLink"),   path: "/products" },
              ].map((l, i) => (
                <li key={i}><Link to={l.path} className="text-sm text-[#7a8fa6] hover:text-[#c9a45c] transition-colors flex items-center gap-2 group">
                  <span className="h-px w-3 bg-[rgba(201,164,92,0.3)] group-hover:w-5 group-hover:bg-[#c9a45c] transition-all" />{l.label}
                </Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#c9a45c] mb-5">{t("footer", "colInfo")}</h4>
            <ul className="space-y-3">
              {[
                { label: t("footer","perfLink"),  path: "/performance" },
                { label: t("footer","resLink"),   path: "/research" },
                { label: t("footer","invLink"),   path: "/investor" },
              ].map((l, i) => (
                <li key={i}><Link to={l.path} className="text-sm text-[#7a8fa6] hover:text-[#c9a45c] transition-colors flex items-center gap-2 group">
                  <span className="h-px w-3 bg-[rgba(201,164,92,0.3)] group-hover:w-5 group-hover:bg-[#c9a45c] transition-all" />{l.label}
                </Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#c9a45c] mb-5">{t("footer", "colContact")}</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-sm text-[#7a8fa6] hover:text-[#c9a45c] transition-colors flex items-center gap-2 group">
                <span className="h-px w-3 bg-[rgba(201,164,92,0.3)] group-hover:w-5 group-hover:bg-[#c9a45c] transition-all" />{t("footer","contactLink")}
              </Link></li>
              {["info@arquantis.com","Jakarta, Indonesia"].map((txt, i) => (
                <li key={i} className="text-sm text-[#3a5070] flex items-center gap-2">
                  <span className="h-px w-3 bg-[rgba(58,80,112,0.5)]" />{txt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[rgba(255,255,255,0.04)] py-4">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#3a5070]">
            System Status: <span className="text-[#00e5ff]">● {t("footer","statusOnline")}</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#3a5070]">
            ARQUANTIS v2.0 · QUANT ENGINE ACTIVE
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;