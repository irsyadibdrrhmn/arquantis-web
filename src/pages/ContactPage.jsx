import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import { useLang } from "../context/LangContext";

const bgDark = "#050d1a";
const bgCard = "rgba(8,21,38,0.85)";

const channelColors = ["#00e5ff", "#c9a45c", "#ff2d78"];
const channelIcons = ["◈", "⬡", "◉"];
const channelCodes = ["CH-01", "CH-02", "CH-03"];
const channelEmails = [
  "info@arquantis.com",
  "partnership@arquantis.com",
  "investor@arquantis.com",
];
const channelTitleKeys = ["ch1title", "ch2title", "ch3title"];
const channelDescKeys = ["ch1desc", "ch2desc", "ch3desc"];

const ContactPage = () => {
  const { t } = useLang();
  const ph = (k) => t("pageHeroes.contact", k);
  const tc = (k) => t("contact", k);

  const inputStyle = {
    width: "100%",
    borderRadius: 12,
    padding: "14px 16px",
    background: "rgba(5,13,26,0.9)",
    border: "1px solid rgba(255,255,255,0.07)",
    color: "#e8edf5",
    fontSize: 13,
    outline: "none",
    fontFamily: "'JetBrains Mono',monospace",
    boxSizing: "border-box",
  };
  const labelStyle = {
    display: "block",
    fontFamily: "'JetBrains Mono',monospace",
    fontSize: 9,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#7a8fa6",
    marginBottom: 8,
  };

  return (
    <Layout>
      <PageHero
        eyebrow={ph("eyebrow")}
        title={
          <>
            <span
              style={{
                color: "#00e5ff",
                textShadow: "0 0 20px rgba(0,229,255,0.5)",
              }}
            >
              {ph("title")}
            </span>
          </>
        }
        subtitle={ph("subtitle")}
        accent="cyan"
      />

      <section
        style={{
          background: bgDark,
          position: "relative",
          padding: "96px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: 0,
            width: 400,
            height: 400,
            background: "#00e5ff",
            opacity: 0.02,
            filter: "blur(100px)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: 350,
            height: 350,
            background: "#c9a45c",
            opacity: 0.025,
            filter: "blur(90px)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1152,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* LEFT: channels */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                <div style={{ height: 1, width: 24, background: "#00e5ff" }} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 10,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#00e5ff",
                  }}
                >
                  // {tc("channelLabel")}
                </span>
              </div>

              {channelTitleKeys.map((tk, i) => {
                const color = channelColors[i];
                return (
                  <div
                    key={i}
                    className="card-hover group"
                    style={{
                      position: "relative",
                      borderRadius: 16,
                      border: "1px solid rgba(255,255,255,0.06)",
                      background: bgCard,
                      padding: 24,
                      marginBottom: 16,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 16,
                        pointerEvents: "none",
                        background: `radial-gradient(circle at top left, ${color}0c 0%, transparent 60%)`,
                        opacity: 0,
                        transition: "opacity 0.4s",
                      }}
                      className="group-hover:opacity-100"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        pointerEvents: "none",
                        background: `linear-gradient(90deg,transparent,${color},transparent)`,
                        opacity: 0,
                        transition: "opacity 0.4s",
                      }}
                      className="group-hover:opacity-100"
                    />
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 16,
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          color,
                          border: `1px solid ${color}30`,
                          background: `${color}10`,
                          textShadow: `0 0 10px ${color}`,
                        }}
                      >
                        {channelIcons[i]}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: 6,
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "'Orbitron',monospace",
                              fontSize: 13,
                              fontWeight: 700,
                              color: "#fff",
                              margin: 0,
                            }}
                          >
                            {tc(tk)}
                          </h3>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono',monospace",
                              fontSize: 9,
                              letterSpacing: "0.15em",
                              color,
                            }}
                          >
                            {channelCodes[i]}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: 12,
                            lineHeight: 1.7,
                            color: "#7a8fa6",
                            marginBottom: 10,
                          }}
                        >
                          {tc(channelDescKeys[i])}
                        </p>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono',monospace",
                            fontSize: 11,
                            color,
                            textShadow: `0 0 8px ${color}40`,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {channelEmails[i]}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Office */}
              <div
                style={{
                  borderRadius: 16,
                  border: "1px solid rgba(201,164,92,0.15)",
                  background: "rgba(8,21,38,0.7)",
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <div
                    className="animate-pulse-glow"
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#c9a45c",
                      boxShadow: "0 0 6px #c9a45c",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 9,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#c9a45c",
                    }}
                  >
                    // {tc("officeLabel")}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Orbitron',monospace",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 6px",
                  }}
                >
                  {tc("officeCity")}
                </p>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 11,
                    color: "#7a8fa6",
                    margin: 0,
                  }}
                >
                  {tc("officeHours")}
                </p>
              </div>
            </div>

            {/* RIGHT: form */}
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                border: "1px solid rgba(0,229,255,0.15)",
                background: "rgba(8,21,38,0.75)",
                padding: 36,
                overflow: "hidden",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 60px rgba(0,229,255,0.04)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 28,
                  paddingBottom: 20,
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  {["#ff2d78", "#c9a45c", "#00e5ff"].map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.8,
                      }}
                    />
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 9,
                    letterSpacing: "0.25em",
                    color: "#7a8fa6",
                    marginLeft: 8,
                  }}
                >
                  message_composer.jsx
                </span>
              </div>

              <h2
                style={{
                  fontFamily: "'Orbitron',monospace",
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#fff",
                  marginBottom: 28,
                }}
              >
                {tc("formTitle")}{" "}
                <span
                  style={{
                    color: "#00e5ff",
                    textShadow: "0 0 15px rgba(0,229,255,0.4)",
                  }}
                >
                  {tc("formTitleAccent")}
                </span>
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div>
                  <label style={labelStyle}>{tc("fieldName")}</label>
                  <input
                    type="text"
                    placeholder={tc("namePlaceholder")}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{tc("fieldEmail")}</label>
                  <input
                    type="email"
                    placeholder={tc("emailPlaceholder")}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>{tc("fieldSubject")}</label>
                <input
                  type="text"
                  placeholder={tc("subjectPlaceholder")}
                  style={inputStyle}
                />
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>{tc("fieldCat")}</label>
                <select
                  style={{
                    ...inputStyle,
                    color: "#7a8fa6",
                    appearance: "none",
                  }}
                >
                  <option value="">{tc("catPlaceholder")}</option>
                  <option value="general">{tc("cat1")}</option>
                  <option value="partner">{tc("cat2")}</option>
                  <option value="investor">{tc("cat3")}</option>
                  <option value="tech">{tc("cat4")}</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={labelStyle}>{tc("fieldMsg")}</label>
                <textarea
                  rows={5}
                  placeholder={tc("msgPlaceholder")}
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                className="relative overflow-hidden rounded-xl"
                style={{ width: "100%" }}
              >
                <span className="absolute inset-0 btn-shimmer" />
                <span
                  className="relative flex items-center justify-center gap-3"
                  style={{
                    padding: "15px 28px",
                    fontFamily: "'Orbitron',monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#050d1a",
                  }}
                >
                  {tc("sendBtn")}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <p
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: 9,
                  color: "#3a5070",
                  textAlign: "center",
                  marginTop: 16,
                  letterSpacing: "0.1em",
                }}
              >
                {tc("responseNote")}
              </p>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 80,
                  height: 80,
                  borderRight: "2px solid rgba(0,229,255,0.08)",
                  borderBottom: "2px solid rgba(0,229,255,0.08)",
                  borderBottomRightRadius: 20,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
