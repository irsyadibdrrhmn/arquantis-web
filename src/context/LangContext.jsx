import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const translations = {
  // ─── NAVBAR ───────────────────────────────────────────────
  nav: {
    home: { id: "Beranda", en: "Home" },
    about: { id: "Tentang", en: "About" },
    technology: { id: "Teknologi", en: "Technology" },
    products: { id: "Produk", en: "Products" },
    performance: { id: "Kinerja", en: "Performance" },
    research: { id: "Riset", en: "Research" },
    investor: { id: "Investor", en: "Investor" },
    contact: { id: "Kontak", en: "Contact" },
    cta: { id: "Hubungi Kami", en: "Contact Us" },
  },

  // ─── HERO ─────────────────────────────────────────────────
  hero: {
    badge: {
      id: "Sistem Trading Generasi Berikutnya",
      en: "Next Generation Trading System",
    },
    h1a: {
      id: "Teknologi Perdagangan Kuantitatif untuk",
      en: "Quantitative Trading Technology for",
    },
    h1b: { id: "Pasar Keuangan Global", en: "Global Financial Markets" },
    desc: {
      id: "Sistem algoritmik generasi berikutnya yang menggabungkan riset kuantitatif mendalam, kecerdasan buatan, dan infrastruktur berkinerja tinggi untuk",
      en: "Next-generation algorithmic systems combining deep quantitative research, artificial intelligence, and high-performance infrastructure for",
    },
    descAccent: { id: "alpha yang konsisten", en: "consistent alpha" },
    btn1: { id: "Jelajahi Teknologi", en: "Explore Technology" },
    btn2: { id: "Lihat Demo", en: "View Demo" },
    stat1: { id: "Strategi Aktif", en: "Active Strategies" },
    stat2: { id: "Live Monitor", en: "Live Monitor" },
    stat3: { id: "Uptime", en: "Uptime" },
    stat4: { id: "Cakupan Pasar", en: "Market Coverage" },
    chartLabel: { id: "Kinerja Portofolio", en: "Portfolio Performance" },
    live: { id: "Langsung", en: "Live" },
  },

  // ─── ABOUT ────────────────────────────────────────────────
  about: {
    sectionLabel: { id: "Tentang Kami", en: "About Us" },
    heading: { id: "Tentang", en: "About" },
    headingAccent: { id: "Arquantis", en: "Arquantis" },
    p1: {
      id: "PT Arquantis Teknologi Investama adalah perusahaan teknologi keuangan yang berfokus pada pengembangan sistem perdagangan kuantitatif dan algoritmik untuk pasar keuangan global.",
      en: "PT Arquantis Teknologi Investama is a financial technology company focused on developing quantitative and algorithmic trading systems for global financial markets.",
    },
    p2: {
      id: "Didirikan oleh tim ahli matematika, ilmuwan data, dan praktisi pasar keuangan, kami menerapkan pendekatan ilmiah yang ketat dalam menganalisis data pasar untuk menemukan",
      en: "Founded by a team of mathematicians, data scientists, and financial market practitioners, we apply a rigorous scientific approach to analyzing market data to discover",
    },
    p2Accent: { id: "pola yang dapat diprediksi", en: "predictable patterns" },
    p2b: {
      id: "dan dieksploitasi secara sistematis.",
      en: "that can be systematically exploited.",
    },
    p3: {
      id: "Fokus utama kami adalah menghilangkan bias emosional dari keputusan investasi melalui",
      en: "Our primary focus is eliminating emotional bias from investment decisions through",
    },
    p3Accent: { id: "otomatisasi penuh", en: "full automation" },
    p3b: {
      id: ", mulai dari generasi sinyal hingga eksekusi order dan manajemen risiko.",
      en: ", from signal generation to order execution and risk management.",
    },
    cta: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
    stat1Label: { id: "Model Strategi", en: "Strategy Models" },
    stat2Label: { id: "Monitoring Sistem", en: "System Monitoring" },
    stat3Label: { id: "Execution Latency", en: "Execution Latency" },
    stat4Label: { id: "Market Coverage", en: "Market Coverage" },
  },

  // ─── FEATURES ─────────────────────────────────────────────
  features: {
    sectionLabel: { id: "Keunggulan", en: "Advantages" },
    heading: { id: "Keunggulan", en: "Our Technology" },
    headingAccent: { id: "Teknologi", en: "Advantages" },
    headingAccent2: { id: "Kami", en: "" },
    sub: {
      id: "Infrastruktur modern untuk quantitative trading yang efisien, adaptif, dan dibangun untuk skala institusional.",
      en: "Modern infrastructure for quantitative trading that is efficient, adaptive, and built for institutional scale.",
    },
    f1title: { id: "Riset Kuantitatif", en: "Quantitative Research" },
    f1desc: {
      id: "Model statistik dan analitik mendalam untuk menemukan peluang alpha di pasar kompleks.",
      en: "Deep statistical and analytical models to discover alpha opportunities in complex markets.",
    },
    f2title: { id: "Perdagangan Algoritmik", en: "Algorithmic Trading" },
    f2desc: {
      id: "Mesin eksekusi modern dengan fokus pada konsistensi, presisi, dan efisiensi biaya.",
      en: "Modern execution engine focused on consistency, precision, and cost efficiency.",
    },
    f3title: { id: "Manajemen Risiko", en: "Risk Management" },
    f3desc: {
      id: "Pemantauan eksposur, volatilitas, dan stabilitas strategi secara real-time.",
      en: "Real-time monitoring of exposure, volatility, and strategy stability.",
    },
    learnMore: { id: "Pelajari →", en: "Explore →" },
    s1val: { id: "4+", en: "4+" },
    s1lbl: { id: "Kelas Aset", en: "Asset Classes" },
    s2lbl: { id: "System Uptime", en: "System Uptime" },
    s3lbl: { id: "Order Latency", en: "Order Latency" },
    s4lbl: { id: "Automated", en: "Automated" },
  },

  // ─── MARKETS ──────────────────────────────────────────────
  markets: {
    sectionLabel: { id: "Cakupan Pasar", en: "Market Coverage" },
    heading: { id: "Cakupan", en: "Global" },
    headingAccent: { id: "Pasar Global", en: "Market Coverage" },
    sub: {
      id: "Strategi lintas aset yang dirancang untuk merespons berbagai karakter pasar dengan disiplin eksekusi dan manajemen risiko.",
      en: "Cross-asset strategies designed to respond to diverse market conditions with execution discipline and risk management.",
    },
    m1title: { id: "Forex", en: "Forex" },
    m1desc: {
      id: "Strategi tren, mean reversion, dan liquidity-driven execution untuk pasar valuta asing global.",
      en: "Trend, mean reversion, and liquidity-driven execution strategies for global foreign exchange markets.",
    },
    m2title: { id: "Crypto", en: "Crypto" },
    m2desc: {
      id: "Model adaptif untuk memanfaatkan volatilitas tinggi dan market inefficiency pada aset digital.",
      en: "Adaptive models to exploit high volatility and market inefficiency in digital assets.",
    },
    m3title: { id: "Commodities", en: "Commodities" },
    m3desc: {
      id: "Eksposur terukur pada energi, logam, dan komoditas utama dengan pendekatan kuantitatif.",
      en: "Measured exposure to energy, metals, and key commodities with a quantitative approach.",
    },
    m4title: { id: "Derivatives", en: "Derivatives" },
    m4desc: {
      id: "Optimasi hedging, spread, dan pendekatan risiko sistematis untuk instrumen turunan.",
      en: "Hedging optimization, spread strategies, and systematic risk approaches for derivative instruments.",
    },
  },

  // ─── FOOTER ───────────────────────────────────────────────
  footer: {
    boostHeading: { id: "Boost Trading Anda.", en: "Boost Your Trading." },
    boostSub: { id: "Mulai dengan Arquantis.", en: "Start with Arquantis." },
    ctaPrimary: { id: "Hubungi Kami Sekarang →", en: "Contact Us Now →" },
    ctaSecondary: { id: "Lihat Produk", en: "View Products" },
    tagline: {
      id: "Innovative investment solutions with global vision and quant precision.",
      en: "Innovative investment solutions with global vision and quant precision.",
    },
    colCompany: { id: "Perusahaan", en: "Company" },
    colInfo: { id: "Informasi", en: "Information" },
    colContact: { id: "Kontak", en: "Contact" },
    aboutLink: { id: "Tentang Kami", en: "About Us" },
    techLink: { id: "Teknologi", en: "Technology" },
    prodLink: { id: "Produk", en: "Products" },
    perfLink: { id: "Kinerja", en: "Performance" },
    resLink: { id: "Riset", en: "Research" },
    invLink: { id: "Investor", en: "Investor" },
    contactLink: { id: "Hubungi Kami", en: "Contact Us" },
    statusOnline: { id: "ONLINE", en: "ONLINE" },
    copyright: {
      id: "© 2025 ARQUANTIS TEKNOLOGI INVESTAMA",
      en: "© 2025 ARQUANTIS TEKNOLOGI INVESTAMA",
    },
  },

  // ─── PAGE HEROES ──────────────────────────────────────────
  pageHeroes: {
    about: {
      eyebrow: { id: "Company_Profile", en: "Company_Profile" },
      title: { id: "Tentang Kami", en: "About Us" },
      subtitle: {
        id: "PT Arquantis Teknologi Investama adalah pelopor dalam pengembangan teknologi perdagangan kuantitatif di Indonesia, berfokus pada penciptaan alpha melalui algoritma sistematis.",
        en: "PT Arquantis Teknologi Investama is a pioneer in quantitative trading technology development in Indonesia, focused on alpha creation through systematic algorithms.",
      },
    },
    technology: {
      eyebrow: { id: "Core_Systems", en: "Core_Systems" },
      title: { id: "Teknologi Kami", en: "Our Technology" },
      subtitle: {
        id: "Infrastruktur, model AI, dan lapisan manajemen risiko yang menopang performa sistem trading modern.",
        en: "Infrastructure, AI models, and risk management layers that underpin modern trading system performance.",
      },
    },
    products: {
      eyebrow: { id: "Products", en: "Products" },
      title: { id: "Produk Kami", en: "Our Products" },
      subtitle: {
        id: "Kumpulan solusi trading sistematis, analitik performa, dan monitoring risiko yang dibangun untuk kebutuhan pasar modern.",
        en: "A suite of systematic trading solutions, performance analytics, and risk monitoring built for modern market needs.",
      },
    },
    performance: {
      eyebrow: { id: "Performance", en: "Performance" },
      title: { id: "Kinerja Strategi", en: "Strategy Performance" },
      subtitle: {
        id: "Ringkasan metrik performa strategi untuk membantu menunjukkan kualitas eksekusi, stabilitas sistem, dan disiplin pengelolaan risiko.",
        en: "A summary of strategy performance metrics to demonstrate execution quality, system stability, and risk management discipline.",
      },
    },
    research: {
      eyebrow: { id: "Research", en: "Research" },
      title: { id: "Riset Kuantitatif", en: "Quantitative Research" },
      subtitle: {
        id: "Riset adalah inti dari DNA kami. Kami terus mengeksplorasi batas-batas ilmu data keuangan untuk menemukan sumber alpha baru.",
        en: "Research is at the core of our DNA. We continuously explore the frontiers of financial data science to discover new alpha sources.",
      },
    },
    investor: {
      eyebrow: { id: "Investor_Relations", en: "Investor_Relations" },
      title: { id: "Hubungan Investor", en: "Investor Relations" },
      subtitle: {
        id: "Membangun kemitraan jangka panjang melalui transparansi, keselarasan kepentingan, dan keunggulan teknologi.",
        en: "Building long-term partnerships through transparency, aligned interests, and technological excellence.",
      },
    },
    contact: {
      eyebrow: { id: "Contact", en: "Contact" },
      title: { id: "Hubungi Kami", en: "Contact Us" },
      subtitle: {
        id: "Kami siap menjawab pertanyaan Anda dan mendiskusikan potensi kolaborasi bersama tim ahli kami.",
        en: "We are ready to answer your questions and discuss potential collaboration with our expert team.",
      },
    },
  },

  // ─── TECHNOLOGY PAGE ──────────────────────────────────────
  technology: {
    s1label: { id: "Trading Engine", en: "Trading Engine" },
    s1title: { id: "Mesin Eksekusi Modern", en: "Modern Execution Engine" },
    s1p1: { id: "FIX API latency rendah", en: "Low-latency FIX API" },
    s1p2: { id: "Smart order routing", en: "Smart order routing" },
    s1p3: { id: "Slippage control", en: "Slippage control" },
    s1p4: {
      id: "Modular microservices architecture",
      en: "Modular microservices architecture",
    },
    s2label: { id: "Machine Learning", en: "Machine Learning" },
    s2title: {
      id: "Model Adaptif Berbasis AI",
      en: "AI-Based Adaptive Models",
    },
    s2p1: {
      id: "Neural network forecasting",
      en: "Neural network forecasting",
    },
    s2p2: {
      id: "Feature engineering pipeline",
      en: "Feature engineering pipeline",
    },
    s2p3: { id: "Sentiment analysis", en: "Sentiment analysis" },
    s2p4: { id: "Reinforcement learning", en: "Reinforcement learning" },
    s3label: { id: "Risk Layer", en: "Risk Layer" },
    s3title: {
      id: "Manajemen Risiko Real-Time",
      en: "Real-Time Risk Management",
    },
    s3p1: { id: "Value at Risk (VaR)", en: "Value at Risk (VaR)" },
    s3p2: { id: "Kill-switch automation", en: "Kill-switch automation" },
    s3p3: { id: "Portfolio diversification", en: "Portfolio diversification" },
    s3p4: {
      id: "Real-time exposure monitoring",
      en: "Real-time exposure monitoring",
    },
    ctaEyebrow: {
      id: "Integrated_Infrastructure",
      en: "Integrated_Infrastructure",
    },
    ctaTitle: { id: "Dirancang untuk", en: "Designed for" },
    ctaPreci: { id: "Presisi", en: "Precision" },
    ctaAnd: { id: "dan", en: "and" },
    ctaScale: { id: "Skalabilitas", en: "Scalability" },
    ctaSub: {
      id: "Arsitektur teknologi kami menghubungkan riset, machine learning, eksekusi, dan kontrol risiko dalam satu alur sistematis.",
      en: "Our technology architecture connects research, machine learning, execution, and risk control in one systematic flow.",
    },
  },

  // ─── PRODUCTS PAGE ────────────────────────────────────────
  products: {
    sectionLabel: { id: "Solutions", en: "Solutions" },
    heading: { id: "Solusi", en: "Systematic" },
    headingAccent: { id: "Perdagangan", en: "Trading" },
    headingAccent2: { id: "Sistematis", en: "Solutions" },
    p1title: { id: "Algoritma Forex", en: "Forex Algorithm" },
    p1desc: {
      id: "Strategi otomatis berbasis momentum, mean reversion, dan liquidity pattern pada pasar valuta asing global.",
      en: "Automated strategies based on momentum, mean reversion, and liquidity patterns in global foreign exchange markets.",
    },
    p2title: { id: "Algoritma Crypto", en: "Crypto Algorithm" },
    p2desc: {
      id: "Model kuantitatif untuk pasar digital yang memanfaatkan volatilitas tinggi dan peluang arbitrase sistematis.",
      en: "Quantitative models for digital markets that exploit high volatility and systematic arbitrage opportunities.",
    },
    p3title: { id: "Platform Analitik", en: "Analytics Platform" },
    p3desc: {
      id: "Dashboard observasi performa, monitoring risiko, dan evaluasi strategi untuk kebutuhan institusional.",
      en: "Performance observation dashboard, risk monitoring, and strategy evaluation for institutional needs.",
    },
    learnMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
    tagMomentum: { id: "Momentum", en: "Momentum" },
    tagMeanRev: { id: "Mean Reversion", en: "Mean Reversion" },
    tagVol: { id: "Volatility", en: "Volatility" },
    tagArb: { id: "Arbitrage", en: "Arbitrage" },
    tagAnalytics: { id: "Analytics", en: "Analytics" },
    tagRisk: { id: "Risk", en: "Risk" },
    tagDash: { id: "Dashboard", en: "Dashboard" },
  },

  // ─── PERFORMANCE PAGE ─────────────────────────────────────
  performance: {
    sectionLabel: { id: "Metrics", en: "Metrics" },
    heading: { id: "Kinerja &", en: "Performance &" },
    headingAccent: { id: "Evaluasi", en: "Strategy" },
    headingAccent2: { id: "Strategi", en: "Evaluation" },
    sub: {
      id: "Transparansi dalam pengukuran hasil adalah kunci. Kami menggunakan metrik standar industri untuk mengevaluasi ketahanan algoritma kami.",
      en: "Transparency in measuring results is key. We use industry-standard metrics to evaluate the resilience of our algorithms.",
    },
    terminalLabel: {
      id: "Live Strategy Performance Dashboard",
      en: "Live Strategy Performance Dashboard",
    },
    colName: { id: "Nama Strategi", en: "Strategy Name" },
    colAsset: { id: "Kelas Aset", en: "Asset Class" },
    colReturn: { id: "Return (Tahunan)", en: "Return (Annual)" },
    colDD: { id: "Max Drawdown", en: "Max Drawdown" },
    colSharpe: { id: "Sharpe Ratio", en: "Sharpe Ratio" },
    disclaimer: {
      id: "Data kinerja di atas hanya contoh ilustratif berdasarkan backtesting historis dan tidak menjamin hasil di masa depan. Kinerja aktual dapat bervariasi.",
      en: "The performance data above is illustrative only, based on historical backtesting and does not guarantee future results. Actual performance may vary.",
    },
    m1title: { id: "Return Tahunan", en: "Annual Return" },
    m1desc: {
      id: "Tingkat pertumbuhan majemuk tahunan (CAGR) dari strategi setelah memperhitungkan estimasi biaya transaksi dan slippage.",
      en: "Compound annual growth rate (CAGR) of the strategy after accounting for estimated transaction costs and slippage.",
    },
    m2title: { id: "Maximum Drawdown", en: "Maximum Drawdown" },
    m2desc: {
      id: "Penurunan persentase terbesar dari puncak tertinggi ke titik terendah portofolio sebagai indikator toleransi risiko.",
      en: "The largest percentage decline from the highest peak to the lowest trough in the portfolio, as a risk tolerance indicator.",
    },
    rowStrategy1: { id: "Trend Forex", en: "Trend Forex" },
    rowStrategy2: { id: "Momentum Gold", en: "Momentum Gold" },
    rowStrategy3: { id: "Crypto Momentum", en: "Crypto Momentum" },
    rowAsset1: { id: "Forex", en: "Forex" },
    rowAsset2: { id: "Commodities", en: "Commodities" },
    rowAsset3: { id: "Crypto", en: "Crypto" },
  },

  // ─── RESEARCH PAGE ────────────────────────────────────────
  research: {
    areaLabel: { id: "Active_Research_Areas", en: "Active_Research_Areas" },
    r1title: {
      id: "Strategi Trading Algoritmik",
      en: "Algorithmic Trading Strategies",
    },
    r1desc: {
      id: "Pengembangan model kuantitatif berbasis statistik sinyal pasar dan data historis untuk membangun strategi yang adaptif dan konsisten.",
      en: "Development of quantitative models based on market signal statistics and historical data to build adaptive and consistent strategies.",
    },
    r2title: {
      id: "Machine Learning dalam Pasar Keuangan",
      en: "Machine Learning in Financial Markets",
    },
    r2desc: {
      id: "Penerapan deep learning, classification model, dan feature engineering untuk meningkatkan akurasi prediksi dan ketahanan model.",
      en: "Application of deep learning, classification models, and feature engineering to improve prediction accuracy and model robustness.",
    },
    r3title: { id: "Optimasi Portofolio", en: "Portfolio Optimization" },
    r3desc: {
      id: "Alokasi aset dinamis berbasis risk budgeting, covariance analysis, dan objective function optimization.",
      en: "Dynamic asset allocation based on risk budgeting, covariance analysis, and objective function optimization.",
    },
    r4title: {
      id: "Analisis Mikrostruktur Pasar",
      en: "Market Microstructure Analysis",
    },
    r4desc: {
      id: "Studi mendalam tentang order flow, spread, dan dinamika likuiditas untuk meminimalkan biaya eksekusi.",
      en: "In-depth study of order flow, spread, and liquidity dynamics to minimize execution costs.",
    },
    r5title: { id: "Model Manajemen Risiko", en: "Risk Management Models" },
    r5desc: {
      id: "Kuantifikasi drawdown, tail risk, korelasi ekstrem, dan stress testing untuk memastikan stabilitas portofolio.",
      en: "Quantification of drawdown, tail risk, extreme correlations, and stress testing to ensure portfolio stability.",
    },
    ctaEyebrow: { id: "Collaboration_Open", en: "Collaboration_Open" },
    ctaTitle: {
      id: "Tertarik Berkolaborasi dalam Riset?",
      en: "Interested in Research Collaboration?",
    },
    ctaSub: {
      id: "Kami membuka peluang kolaborasi dengan akademisi, praktisi pasar, dan institusi keuangan.",
      en: "We welcome collaboration with academics, market practitioners, and financial institutions.",
    },
    ctaBtn: { id: "Hubungi Tim Riset", en: "Contact Research Team" },
    active: { id: "Aktif", en: "Active" },
  },

  // ─── INVESTOR PAGE ────────────────────────────────────────
  investor: {
    philosophyLabel: { id: "Filosofi_Investasi", en: "Investment_Philosophy" },
    philosophyTitle: { id: "Filosofi", en: "Investment" },
    philosophyAccent: { id: "Investasi", en: "Philosophy" },
    philosophyDesc: {
      id: "Kami percaya bahwa pasar keuangan pada dasarnya efisien, namun anomali jangka pendek selalu ada. Pendekatan sistematis kami dirancang untuk menangkap anomali ini secara konsisten melalui",
      en: "We believe financial markets are fundamentally efficient, yet short-term anomalies always exist. Our systematic approach is designed to consistently capture these anomalies through",
    },
    philAccent1: { id: "riset kuantitatif", en: "quantitative research" },
    philDesc2: { id: ", automasi, dan", en: ", automation, and" },
    philAccent2: {
      id: "kontrol risiko yang terukur",
      en: "measured risk control",
    },
    philDesc3: { id: ".", en: "." },
    h1title: { id: "Riset Mendalam", en: "Deep Research" },
    h1desc: {
      id: "Strategi dibangun di atas validasi empiris dan pengujian statistik yang disiplin.",
      en: "Strategies built on empirical validation and disciplined statistical testing.",
    },
    h2title: { id: "Manajemen Risiko Ketat", en: "Strict Risk Management" },
    h2desc: {
      id: "Setiap strategi dipantau dengan parameter risiko yang terukur dan real-time.",
      en: "Each strategy is monitored with measurable, real-time risk parameters.",
    },
    h3title: {
      id: "Diversifikasi Portofolio",
      en: "Portfolio Diversification",
    },
    h3desc: {
      id: "Penyebaran risiko lintas aset dan strategi untuk menjaga ketahanan kinerja.",
      en: "Risk spread across assets and strategies to maintain performance resilience.",
    },
    h4title: {
      id: "Eksekusi Trading Sistematis",
      en: "Systematic Trade Execution",
    },
    h4desc: {
      id: "Otomatisasi penuh untuk konsistensi keputusan dan presisi eksekusi.",
      en: "Full automation for decision consistency and execution precision.",
    },
    partnerLabel: { id: "Kerjasama_Investasi", en: "Investment_Partnership" },
    partnerTitle: { id: "Kerjasama", en: "Investment" },
    partnerAccent: { id: "Investasi", en: "Partnership" },
    partnerDesc: {
      id: "Arquantis membuka peluang kemitraan strategis dengan entitas yang memahami nilai dari pendekatan investasi kuantitatif dan infrastruktur eksekusi sistematis.",
      en: "Arquantis opens strategic partnership opportunities with entities that understand the value of quantitative investment approaches and systematic execution infrastructure.",
    },
    p1title: { id: "Investor Institusi", en: "Institutional Investors" },
    p1desc: {
      id: "Kemitraan strategis untuk alokasi dana pada strategi kuantitatif berkapasitas tinggi.",
      en: "Strategic partnerships for capital allocation in high-capacity quantitative strategies.",
    },
    p2title: {
      id: "Mitra Teknologi Strategis",
      en: "Strategic Technology Partners",
    },
    p2desc: {
      id: "Kolaborasi infrastruktur, penyediaan likuiditas, dan integrasi sistem perdagangan.",
      en: "Infrastructure collaboration, liquidity provision, and trading system integration.",
    },
    ctaTitle: { id: "Tertarik Menjadi", en: "Interested in Becoming" },
    ctaAccent: { id: "Mitra", en: "a Partner" },
    ctaQ: { id: "?", en: "?" },
    ctaDesc: {
      id: "Tim hubungan investor kami siap mendiskusikan bagaimana teknologi Arquantis dapat diselaraskan dengan tujuan investasi Anda.",
      en: "Our investor relations team is ready to discuss how Arquantis technology can be aligned with your investment goals.",
    },
    ctaBtn: { id: "Hubungi Tim Kami →", en: "Contact Our Team →" },
    metricStrategies: { id: "Strategi", en: "Strategies" },
    metricAssets: { id: "Kelas Aset", en: "Asset Classes" },
    metricSharpe: { id: "Avg Sharpe", en: "Avg Sharpe" },
    metricUptime: { id: "Uptime", en: "Uptime" },
  },

  // ─── CONTACT PAGE ─────────────────────────────────────────
  contact: {
    channelLabel: { id: "Saluran_Komunikasi", en: "Communication_Channels" },
    ch1title: { id: "Informasi Umum", en: "General Information" },
    ch1desc: {
      id: "Pertanyaan umum tentang perusahaan dan layanan kami.",
      en: "General questions about our company and services.",
    },
    ch2title: { id: "Kerjasama Bisnis", en: "Business Partnership" },
    ch2desc: {
      id: "Untuk peluang kolaborasi, partnership, dan integrasi bisnis.",
      en: "For collaboration opportunities, partnerships, and business integration.",
    },
    ch3title: { id: "Hubungan Investor", en: "Investor Relations" },
    ch3desc: {
      id: "Komunikasi terkait kemitraan investasi dan institusional.",
      en: "Communication regarding investment and institutional partnerships.",
    },
    officeLabel: { id: "Kantor", en: "Office" },
    officeCity: { id: "Jakarta, Indonesia", en: "Jakarta, Indonesia" },
    officeHours: {
      id: "GMT+7 · Sen–Jum 09:00–18:00 WIB",
      en: "GMT+7 · Mon–Fri 09:00–18:00 WIB",
    },
    formTitle: { id: "Kirim", en: "Send" },
    formTitleAccent: { id: "Pesan", en: "Message" },
    fieldName: { id: "Nama Lengkap", en: "Full Name" },
    fieldEmail: { id: "Alamat Email", en: "Email Address" },
    fieldSubject: { id: "Subjek", en: "Subject" },
    fieldCat: { id: "Kategori", en: "Category" },
    catPlaceholder: { id: "Pilih kategori...", en: "Select category..." },
    cat1: { id: "Informasi Umum", en: "General Information" },
    cat2: { id: "Kerjasama Bisnis", en: "Business Partnership" },
    cat3: { id: "Hubungan Investor", en: "Investor Relations" },
    cat4: { id: "Teknologi", en: "Technology" },
    fieldMsg: { id: "Pesan", en: "Message" },
    msgPlaceholder: {
      id: "Tulis pesan Anda di sini...",
      en: "Write your message here...",
    },
    sendBtn: { id: "Kirim Pesan", en: "Send Message" },
    responseNote: {
      id: "Kami merespons dalam 1-2 hari kerja",
      en: "We respond within 1-2 business days",
    },
    namePlaceholder: { id: "John Doe", en: "John Doe" },
    emailPlaceholder: { id: "john@example.com", en: "john@example.com" },
    subjectPlaceholder: {
      id: "Pertanyaan tentang kemitraan",
      en: "Question about partnership",
    },
  },

  // ─── ABOUT PAGE POSITIONING ───────────────────────────────
  aboutPage: {
    posLabel: { id: "Positioning_Statement", en: "Positioning_Statement" },
    posLine1: {
      id: "Innovative Investment Solutions.",
      en: "Innovative Investment Solutions.",
    },
    posAccent1: { id: "Global Vision", en: "Global Vision" },
    posAccent2: { id: "Quant Precision", en: "Quant Precision" },
  },
};

// Helper: get translation value
export const t = (lang, section, key) => {
  // Support dot notation e.g. "pageHeroes.about"
  const parts = section.split(".");
  let s = translations;
  for (const part of parts) {
    if (!s[part]) return key;
    s = s[part];
  }
  const entry = s[key];
  if (!entry) return key;
  return entry[lang] ?? entry.id;
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("id");
  const toggle = () => setLang((l) => (l === "id" ? "en" : "id"));
  return (
    <LangContext.Provider
      value={{ lang, toggle, t: (section, key) => t(lang, section, key) }}
    >
      {children}
    </LangContext.Provider>
  );
};
