import { useLanguage } from '@/lib/LanguageContext';
import aboutImg from '@/assets/about-section.jpg';

const About = () => {
  const { t } = useLanguage();
  const stats = [t.stats.s1, t.stats.s2, t.stats.s3];

  return (
    <>
      <style>{`
        .about-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .about-shell {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          min-height: 900px;
          background: #000;
          overflow: hidden;
        }

        .about-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .about-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0,0,0,0.42) 0%,
              rgba(0,0,0,0.26) 24%,
              rgba(0,0,0,0.16) 52%,
              rgba(0,0,0,0.28) 100%
            ),
            linear-gradient(
              180deg,
              rgba(0,0,0,0.08) 0%,
              rgba(0,0,0,0.18) 100%
            );
        }

        .about-inner {
          position: relative;
          z-index: 2;
          min-height: 900px;
          display: flex;
          align-items: center;
          padding: 72px 86px;
        }

        .about-layout {
          width: 100%;
          display: grid;
          grid-template-columns: 320px minmax(0, 1fr);
          align-items: center;
          gap: 42px;
        }

        .about-stats-wrap {
          display: flex;
          align-items: center;
          min-height: 100%;
        }

        .about-stats {
          width: 100%;
          max-width: 326px;
        }

        .about-stat {
          padding: 30px 0 30px;
          border-bottom: 1px solid rgba(255,255,255,0.18);
        }

        .about-stat-value {
          margin: 0 0 22px;
          color: #f5f5f5;
          font-size: clamp(58px, 5vw, 78px);
          line-height: 0.9;
          font-weight: 400;
          letter-spacing: -0.055em;
        }

        .about-stat-label {
          margin: 0;
          color: rgba(255,255,255,0.95);
          font-size: 18px;
          line-height: 1.2;
          font-weight: 400;
        }

        .about-panel-wrap {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-panel {
          position: relative;
          width: 100%;
          max-width: 620px;
          padding: 78px 64px 68px;
          background: rgba(120, 120, 124, 0.38);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 24px 70px rgba(0,0,0,0.20);
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-panel::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 82%, rgba(255,90,31,0.12), transparent 24%);
          pointer-events: none;
        }

        .about-title {
          position: relative;
          z-index: 1;
          margin: 0 0 28px;
          color: #f4f4f4;
          font-size: clamp(40px, 4vw, 56px);
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -0.045em;
          text-align: center;
        }

        .about-copy {
          position: relative;
          z-index: 1;
          margin: 0 auto;
          max-width: 470px;
        }

        .about-desc {
          margin: 0;
          color: rgba(255,255,255,0.88);
          font-size: 15px;
          line-height: 1.62;
          font-weight: 400;
          text-align: center;
        }

        .about-desc + .about-desc {
          margin-top: 24px;
        }

        .about-cta-wrap {
          position: relative;
          z-index: 1;
          margin-top: 42px;
          display: flex;
          justify-content: center;
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          height: 50px;
          padding: 0 26px;
          border-radius: 3px;
          background: #ff5a1f;
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
        }

        .about-cta:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .about-cta:active {
          transform: translateY(1px);
        }

        @media (max-width: 1200px) {
          .about-inner {
            padding: 56px 48px;
          }

          .about-layout {
            grid-template-columns: 280px minmax(0, 1fr);
            gap: 30px;
          }

          .about-panel {
            max-width: 560px;
            padding: 62px 46px 54px;
          }
        }

        @media (max-width: 1024px) {
          .about-shell,
          .about-inner {
            min-height: auto;
          }

          .about-inner {
            padding: 40px 24px;
          }

          .about-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about-stats-wrap {
            align-items: stretch;
          }

          .about-stats {
            max-width: 100%;
          }

          .about-panel-wrap {
            justify-content: center;
          }

          .about-panel {
            max-width: 100%;
            padding: 48px 28px 42px;
          }

          .about-stat-value {
            font-size: 48px;
            margin-bottom: 14px;
          }
        }

        @media (max-width: 768px) {
          .about-shell {
            min-height: auto;
          }

          .about-bg::after {
            background:
              linear-gradient(
                180deg,
                rgba(0,0,0,0.20) 0%,
                rgba(0,0,0,0.28) 100%
              );
          }

          .about-inner {
            min-height: auto;
            padding: 20px 16px;
          }

          .about-stat {
            padding: 18px 0 20px;
          }

          .about-stat-value {
            font-size: 40px;
            margin-bottom: 10px;
          }

          .about-stat-label {
            font-size: 16px;
          }

          .about-panel {
            padding: 34px 18px 30px;
            background: rgba(22, 22, 24, 0.72);
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            box-shadow: 0 14px 34px rgba(0,0,0,0.18);
          }

          .about-title {
            font-size: 34px;
            margin-bottom: 18px;
          }

          .about-desc {
            font-size: 14px;
          }

          .about-cta-wrap {
            margin-top: 28px;
          }

          .about-cta {
            min-width: 190px;
            height: 46px;
            font-size: 14px;
          }
        }

        @media (hover: none) and (pointer: coarse) {
          .about-cta:hover {
            transform: none;
            background: #ff5a1f;
          }
        }
      `}</style>

      <section id="about" className="relative bg-black py-24 text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="about-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="about-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="about-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="about-grid-line left-[7.5%]" />
          <div className="about-grid-line left-[28.5%]" />
          <div className="about-grid-line left-1/2" />
          <div className="about-grid-line right-[28.5%]" />
          <div className="about-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-6 md:px-10 lg:px-0">
          <div className="about-shell">
            <div className="about-bg">
              <img src={aboutImg} alt="Technician inspection" />
            </div>

            <div className="about-inner">
              <div className="about-layout">
                <div className="about-stats-wrap animate-on-scroll">
                  <div className="about-stats">
                    {stats.map((s, i) => (
                      <div
                        key={i}
                        className="about-stat"
                        style={{ transitionDelay: `${i * 80}ms` }}
                      >
                        <p className="about-stat-value">{s.val}</p>
                        <p className="about-stat-label">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="about-panel-wrap animate-on-scroll"
                  style={{ transitionDelay: '140ms' }}
                >
                  <div className="about-panel">
                    <h2 className="about-title">
                      {t.about.title1}
                      <br />
                      {t.about.title2}
                    </h2>

                    <div className="about-copy">
                      <p className="about-desc">{t.about.desc1}</p>
                      <p className="about-desc">{t.about.desc2}</p>
                    </div>

                    <div className="about-cta-wrap">
                      <a href="#contact" className="about-cta">
                        {t.about.cta}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;