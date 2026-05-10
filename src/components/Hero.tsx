import { useLanguage } from '@/lib/LanguageContext';
import heroBg from '@/assets/hero-test.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <>
      <style>{`
        .hero-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 172px;
          height: 50px;
          padding: 0 26px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0;
          text-decoration: none;
          overflow: hidden;
          transition:
            transform 0.18s ease,
            box-shadow 0.18s ease,
            background-color 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease;
          will-change: transform;
        }

        .hero-btn span {
          position: relative;
          z-index: 2;
        }

        .hero-btn-primary {
          color: #ffffff;
          background: #ff5a1f;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.14),
            0 6px 14px rgba(255, 90, 31, 0.16);
        }

        .hero-btn-primary:hover {
          background: #ff6229;
          transform: translateY(-1px);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.08),
            inset 0 -1px 0 rgba(0, 0, 0, 0.14),
            0 8px 18px rgba(255, 90, 31, 0.2);
        }

        .hero-btn-primary:active {
          transform: translateY(1px);
          box-shadow:
            inset 0 2px 3px rgba(0, 0, 0, 0.12),
            0 4px 10px rgba(255, 90, 31, 0.14);
        }

        .hero-btn-outline {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.03),
            0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .hero-btn-outline:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 255, 255, 0.88);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 6px 14px rgba(0, 0, 0, 0.16);
        }

        .hero-btn-outline:active {
          transform: translateY(1px);
          box-shadow:
            inset 0 2px 3px rgba(0, 0, 0, 0.14),
            0 3px 8px rgba(0, 0, 0, 0.12);
        }

        .hero-guide-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          pointer-events: none;
        }

        .hero-mobile-title-line {
          display: block;
          margin-top: 6px;
        }

        .hero-mobile-title-line:first-child {
          margin-top: 0;
        }

        .hero-mobile-na {
          color: #ffffff;
          font: inherit;
          letter-spacing: inherit;
          text-transform: none;
        }

        @media (max-width: 767px) {
          .hero-btn {
            width: 100%;
            min-width: 0;
            height: 48px;
            padding: 0 18px;
            font-size: 14px;
          }
        }
      `}</style>

      <section className="relative h-[86svh] min-h-[740px] overflow-hidden bg-black text-white md:h-screen md:min-h-[820px]">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Auto mechanic workshop"
            className="h-full w-full object-cover object-[58%_center] md:object-[68%_center]"
          />
          <div className="absolute inset-0 bg-black/60 md:bg-black/52" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/54 to-black/18 md:from-black/82 md:via-black/42 md:to-black/12" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/28 md:from-black/30 md:to-black/22" />
        </div>

        {/* mobile 5 lines */}
        <div className="pointer-events-none absolute inset-0 z-[4] md:hidden">
          <div
            className="hero-guide-line"
            style={{ left: '8%', backgroundColor: 'rgba(255,255,255,0.18)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '28%', backgroundColor: 'rgba(255,255,255,0.14)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.14)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '72%', backgroundColor: 'rgba(255,255,255,0.14)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '92%', backgroundColor: 'rgba(255,255,255,0.18)' }}
          />
        </div>

        {/* desktop 5 lines */}
        <div className="pointer-events-none absolute inset-0 z-[4] hidden md:block">
          <div
            className="hero-guide-line"
            style={{ left: '7.5%', backgroundColor: 'rgba(255,255,255,0.18)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '28.5%', backgroundColor: 'rgba(255,255,255,0.14)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.14)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '71.5%', backgroundColor: 'rgba(255,255,255,0.14)' }}
          />
          <div
            className="hero-guide-line"
            style={{ left: '92.5%', backgroundColor: 'rgba(255,255,255,0.18)' }}
          />
        </div>

        <div className="relative z-10 flex h-full items-start md:items-center">
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-0">
            <div className="mx-auto max-w-[332px] pt-[210px] text-center sm:max-w-[350px] sm:pt-[225px] md:mx-0 md:max-w-[760px] md:pt-24 md:text-left md:ml-[4%] lg:ml-[6%]">
              <h1 className="animate-on-scroll font-semibold leading-[0.98] tracking-[-0.05em] text-white md:hidden">
                {t.hero.title1 === 'Twój Samochód Zasługuje' ? (
                  <>
                    <span className="hero-mobile-title-line text-[42px]">
                      Twój
                    </span>
                    <span className="hero-mobile-title-line text-[42px]">
                      Samochód
                    </span>
                    <span className="hero-mobile-title-line text-[42px]">
                      Zasługuje <span className="hero-mobile-na">na</span>
                    </span>
                    <span className="hero-mobile-title-line text-[42px] text-primary">
                      Profesjonalną
                    </span>
                    <span className="hero-mobile-title-line text-[42px] text-primary">
                      Opiekę
                    </span>
                  </>
                ) : (
                  <>
                    <span className="hero-mobile-title-line text-[46px]">
                      {t.hero.title1}
                    </span>
                    <span className="hero-mobile-title-line text-[47px] text-primary">
                      {t.hero.title2}
                    </span>
                  </>
                )}
              </h1>

              <h1 className="animate-on-scroll hidden text-[84px] font-semibold leading-[0.95] tracking-[-0.03em] text-white md:block lg:text-[96px]">
                {t.hero.title1}
                <br />
                <span className="text-primary">{t.hero.title2}</span>
              </h1>

              <p
                className="animate-on-scroll mx-auto mt-5 max-w-[320px] text-[16px] leading-[1.58] text-white/74 sm:max-w-[332px] sm:text-[16px] md:mx-0 md:mt-8 md:max-w-[680px] md:text-[20px] md:leading-[1.6]"
                style={{ transitionDelay: '100ms' }}
              >
                {t.hero.desc}
              </p>

              <div
                className="animate-on-scroll mt-8 flex flex-col gap-3 sm:gap-4 md:mt-10 md:flex-row md:flex-wrap md:gap-6"
                style={{ transitionDelay: '200ms' }}
              >
                <a href="#contact" className="hero-btn hero-btn-primary">
                  <span>{t.hero.cta1}</span>
                </a>

                <a href="#pricing" className="hero-btn hero-btn-outline">
                  <span>{t.hero.cta2}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;