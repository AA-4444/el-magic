import { useLanguage } from '@/lib/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();
  const stats = [t.stats.s1, t.stats.s2, t.stats.s3];

  return (
    <>
      <style>{`
        .stats-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .stats-card {
          position: relative;
          min-height: 295px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.92);
          padding: 42px 32px 30px;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .stats-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
          background: rgba(5,5,5,0.96);
        }

        .stats-value {
          font-size: clamp(54px, 5.4vw, 74px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -0.04em;
          color: #f5f5f5;
        }

        .stats-divider {
          width: 100%;
          height: 1px;
          margin-top: 30px;
          margin-bottom: 28px;
          background: linear-gradient(90deg, #ff5a1f 0%, #ff5a1f 72%, rgba(255,90,31,0.15) 100%);
        }

        .stats-label {
          font-size: 18px;
          line-height: 1.3;
          font-weight: 400;
          color: rgba(255,255,255,0.92);
        }

        .stats-desc {
          margin-top: 18px;
          max-width: 320px;
          font-size: 15px;
          line-height: 1.55;
          font-weight: 400;
          color: rgba(255,255,255,0.68);
        }

        @media (max-width: 1024px) {
          .stats-card {
            min-height: 270px;
            padding: 34px 26px 28px;
          }

          .stats-divider {
            margin-top: 24px;
            margin-bottom: 22px;
          }
        }

        @media (max-width: 767px) {
          .stats-card {
            min-height: auto;
            padding: 28px 22px 24px;
          }

          .stats-value {
            font-size: 48px;
          }

          .stats-label {
            font-size: 17px;
          }

          .stats-desc {
            font-size: 14px;
            max-width: none;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-black text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-[1] md:hidden">
          <div
            className="stats-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="stats-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="stats-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines unchanged */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
          <div className="stats-grid-line left-[7.5%]" />
          <div className="stats-grid-line left-[28.5%]" />
          <div className="stats-grid-line left-1/2" />
          <div className="stats-grid-line right-[28.5%]" />
          <div className="stats-grid-line right-[7.5%]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 py-10 md:px-10 md:py-14 lg:px-0 lg:py-16">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="stats-card animate-on-scroll"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="stats-value">{s.val}</p>
                <div className="stats-divider" />
                <p className="stats-label">{s.label}</p>
                <p className="stats-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;