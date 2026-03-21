import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Plus, Minus } from 'lucide-react';

import serviceCarwash from '@/assets/service-carwash.jpg';
import serviceOil from '@/assets/service-oil.jpg';
import serviceDiag from '@/assets/service-diagnostics.jpg';
import serviceTire from '@/assets/service-tire.jpg';
import serviceAc from '@/assets/service-ac.jpg';
import servicePolish from '@/assets/service-polish.jpg';

const images = [
  serviceCarwash,
  serviceOil,
  serviceDiag,
  serviceTire,
  serviceAc,
  servicePolish,
];

const Services = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const items = t?.services?.items ?? [];

  const handleToggle = (i: number) => {
    setOpenIndex(prev => (prev === i ? -1 : i));
  };

  return (
    <>
      <style>{`
        .services-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .services-row {
          position: relative;
          border-top: 1px solid rgba(255,255,255,0.12);
          background: #050505;
          overflow: hidden;
        }

        .services-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }

        .services-row-open {
          background: #050505;
        }

        .services-row-open::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 28%;
          height: 100%;
          background:
            radial-gradient(circle at 60% 50%, rgba(255, 90, 31, 0.18), transparent 58%);
          pointer-events: none;
          opacity: 1;
        }

        .services-trigger {
          position: relative;
          z-index: 2;
          width: 100%;
          display: grid;
          grid-template-columns: 90px minmax(0, 1fr) 56px;
          align-items: center;
          gap: 24px;
          padding: 30px 28px;
          text-align: left;
          background: transparent;
          border: 0;
          color: inherit;
          cursor: pointer;
        }

        .services-num {
          color: rgba(255,255,255,0.82);
          font-size: 22px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .services-title-wrap {
          display: flex;
          align-items: center;
          gap: 26px;
          min-width: 0;
        }

        .services-accent {
          width: 2px;
          height: 48px;
          background: #ff5a1f;
          flex: 0 0 auto;
          opacity: 0;
          transform: scaleY(0.65);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .services-row-open .services-accent {
          opacity: 1;
          transform: scaleY(1);
        }

        .services-title {
          color: #f4f4f4;
          font-size: clamp(28px, 3vw, 44px);
          line-height: 1.06;
          font-weight: 400;
          letter-spacing: -0.04em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .services-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.9);
        }

        .services-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 90px minmax(0, 1fr) 56px;
          gap: 24px;
          padding: 0 28px 34px;
        }

        .services-content-inner {
          grid-column: 2 / 3;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 980px;
        }

        .services-image {
          width: min(100%, 480px);
          height: 310px;
          object-fit: cover;
          display: block;
          margin-bottom: 34px;
        }

        .services-subtitle {
          color: #f2f2f2;
          font-size: 20px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 16px;
        }

        .services-desc-row {
          width: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
        }

        .services-desc {
          max-width: 520px;
          color: rgba(255,255,255,0.7);
          font-size: 16px;
          line-height: 1.65;
          font-weight: 400;
          margin: 0;
        }

        .services-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 146px;
          height: 52px;
          padding: 0 28px;
          border-radius: 4px;
          background: #ff5a1f;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.14),
            0 8px 18px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          flex: 0 0 auto;
        }

        .services-btn:hover {
          background: #ff6229;
          transform: translateY(-1px);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.14),
            0 10px 20px rgba(255,90,31,0.2);
        }

        .services-btn:active {
          transform: translateY(1px);
        }

        @media (max-width: 1024px) {
          .services-trigger {
            grid-template-columns: 72px minmax(0, 1fr) 44px;
            gap: 20px;
            padding: 24px 20px;
          }

          .services-content {
            grid-template-columns: 72px minmax(0, 1fr) 44px;
            gap: 20px;
            padding: 0 20px 28px;
          }

          .services-num {
            font-size: 18px;
          }

          .services-title {
            font-size: clamp(24px, 4vw, 34px);
          }

          .services-image {
            height: 260px;
            width: min(100%, 440px);
            margin-bottom: 28px;
          }
        }

        @media (max-width: 768px) {
          .services-trigger {
            grid-template-columns: 56px minmax(0, 1fr) 36px;
            gap: 14px;
            padding: 20px 14px;
          }

          .services-content {
            grid-template-columns: 56px minmax(0, 1fr) 36px;
            gap: 14px;
            padding: 0 14px 22px;
          }

          .services-title-wrap {
            gap: 14px;
          }

          .services-accent {
            height: 32px;
          }

          .services-num {
            font-size: 16px;
          }

          .services-title {
            font-size: 20px;
            white-space: normal;
          }

          .services-image {
            width: 100%;
            height: 220px;
            margin-bottom: 22px;
          }

          .services-subtitle {
            font-size: 18px;
            margin-bottom: 12px;
          }

          .services-desc-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-desc {
            font-size: 15px;
            max-width: none;
          }

          .services-btn {
            min-width: 132px;
            height: 48px;
            padding: 0 22px;
            font-size: 15px;
          }
        }
      `}</style>

      <section id="services" className="relative overflow-hidden bg-black text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="services-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="services-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="services-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="services-grid-line left-[7.5%]" />
          <div className="services-grid-line left-[28.5%]" />
          <div className="services-grid-line left-1/2" />
          <div className="services-grid-line right-[28.5%]" />
          <div className="services-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-6 py-20 md:px-10 lg:px-0 lg:py-24">
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-6">
              <div className="h-[74px] w-[2px] bg-[#ff5a1f]" />
              <h2 className="text-[54px] font-normal leading-none tracking-[-0.04em] text-white md:text-[76px] lg:text-[68px]">
                {t?.services?.title}
              </h2>
            </div>
          </div>

          <div className="relative">
            {items.map((item: any, i: number) => {
              const isOpen = openIndex === i;
              const num = String(i + 1).padStart(3, '0');

              return (
                <div
                  key={i}
                  className={`services-row ${isOpen ? 'services-row-open' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(i)}
                    className="services-trigger"
                    aria-expanded={isOpen}
                  >
                    <span className="services-num">{num}</span>

                    <span className="services-title-wrap">
                      <span className="services-accent" />
                      <span className="services-title">{item.name}</span>
                    </span>

                    <span className="services-icon">
                      {isOpen ? (
                        <Minus className="h-8 w-8 stroke-[1.5]" />
                      ) : (
                        <Plus className="h-8 w-8 stroke-[1.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="services-content">
                      <div className="services-content-inner">
                        <img
                          src={images[i % images.length]}
                          alt={item.name}
                          className="services-image"
                        />

                        <p className="services-subtitle">
                          {t?.services?.whatWeDo}
                        </p>

                        <div className="services-desc-row">
                          <p className="services-desc">{item.desc}</p>

                          <a href="#contact" className="services-btn">
                            {t?.services?.viewDetails}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;