import { useLanguage } from '@/lib/LanguageContext';
import { Award, Clock, DollarSign, Users } from 'lucide-react';

import whyImg from '@/assets/why-choose-us.jpg';

const icons = [Award, Clock, DollarSign, Users];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const items = t?.whyUs?.items ?? [];

  return (
    <>
      <style>{`
        .why-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .why-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 22px;
          min-height: 138px;
          padding: 34px 32px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(5,5,5,0.96);
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
        }

        .why-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.15);
          background: rgba(8,8,8,0.98);
        }

        .why-icon-wrap {
          width: 50px;
          height: 50px;
          border-radius: 999px;
          border: 2px solid #ff5a1f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          color: #ff5a1f;
        }

        .why-title {
          color: #f5f5f5;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }

        .why-desc {
          color: rgba(255,255,255,0.68);
          font-size: 15px;
          line-height: 1.65;
          margin: 0;
          max-width: 430px;
        }

        .why-main-image-wrap {
          position: relative;
          min-height: 100%;
          height: 100%;
          display: flex;
          align-items: stretch;
          justify-content: flex-end;
        }

        .why-main-image {
          width: 100%;
          height: 100%;
          min-height: 640px;
          object-fit: cover;
          display: block;
          border: 1px solid rgba(255,255,255,0.12);
        }

        @media (max-width: 1279px) {
          .why-main-image {
            min-height: 560px;
          }
        }

        @media (max-width: 1024px) {
          .why-card {
            min-height: 124px;
            padding: 28px 24px;
            gap: 18px;
          }

          .why-title {
            font-size: 20px;
          }

          .why-main-image {
            min-height: 520px;
          }
        }

        @media (max-width: 768px) {
          .why-card {
            min-height: auto;
            padding: 22px 18px;
            gap: 16px;
          }

          .why-icon-wrap {
            width: 44px;
            height: 44px;
          }

          .why-title {
            font-size: 18px;
            margin-bottom: 8px;
          }

          .why-desc {
            font-size: 14px;
            max-width: none;
          }

          .why-main-image-wrap {
            margin-top: 28px;
          }

          .why-main-image {
            min-height: 380px;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-black text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-[1] md:hidden">
          <div
            className="why-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="why-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="why-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines unchanged */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
          <div className="why-grid-line left-[7.5%]" />
          <div className="why-grid-line left-[28.5%]" />
          <div className="why-grid-line left-1/2" />
          <div className="why-grid-line right-[28.5%]" />
          <div className="why-grid-line right-[7.5%]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 py-20 md:px-10 lg:px-0 lg:py-24">
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-6">
              <div className="h-[74px] w-[2px] bg-[#ff5a1f]" />
              <h2 className="text-[54px] font-normal leading-none tracking-[-0.04em] text-white md:text-[76px] lg:text-[68px]">
                {t?.whyUs?.title}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:gap-7">
            <div className="space-y-0">
              {items.map((item: any, i: number) => {
                const Icon = icons[i] ?? Award;

                return (
                  <div
                    key={i}
                    className="why-card animate-on-scroll"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    <div className="why-icon-wrap">
                      <Icon className="h-6 w-6 stroke-[1.9]" />
                    </div>

                    <div>
                      <p className="why-title">{item.title}</p>
                      <p className="why-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="why-main-image-wrap animate-on-scroll"
              style={{ transitionDelay: '180ms' }}
            >
              <img
                src={whyImg}
                alt="Professional mechanic"
                className="why-main-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;