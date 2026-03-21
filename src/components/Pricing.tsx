import { useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Star } from 'lucide-react';

const Pricing = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const plans = t?.pricing?.plans ?? [];

  return (
    <>
      <style>{`
        .pricing-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .pricing-left-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 198px;
          height: 54px;
          padding: 0 26px;
          border-radius: 14px;
          background: #f5f5f5;
          color: #111111;
          font-size: 17px;
          font-weight: 400;
          text-decoration: none;
          transition: transform 0.18s ease, opacity 0.18s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pricing-left-cta:hover {
          transform: translateY(-1px);
          opacity: 0.96;
        }

        .pricing-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          background: #050505;
          padding: 30px 30px 32px;
          transition:
            border-color 0.2s ease,
            transform 0.2s ease,
            background 0.2s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.14);
        }

        .pricing-card-popular {
          background:
            linear-gradient(90deg, rgba(255,90,31,0.12) 0%, rgba(255,90,31,0.03) 22%, #050505 55%);
          border-color: rgba(255, 111, 44, 0.22);
        }

        .pricing-card-header-box {
          border: 1px solid rgba(255,255,255,0.06);
          background: #080808;
          padding: 24px 24px 22px;
          margin-bottom: 34px;
        }

        .pricing-card-popular .pricing-card-header-box {
          background:
            linear-gradient(90deg, rgba(255,90,31,0.08) 0%, #080808 40%, #080808 100%);
        }

        .pricing-plan-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .pricing-plan-name {
          color: rgba(255,255,255,0.86);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.2;
        }

        .pricing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          background: #ff5a1f;
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }

        .pricing-badge svg {
          width: 12px;
          height: 12px;
        }

        .pricing-price-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 10px;
        }

        .pricing-price {
          color: #f5f5f5;
          font-size: clamp(46px, 4vw, 60px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -0.05em;
        }

        .pricing-old-price {
          color: rgba(255,255,255,0.28);
          font-size: 23px;
          line-height: 1;
          font-weight: 400;
          text-decoration: line-through;
        }

        .pricing-plan-desc {
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.5;
          font-weight: 400;
        }

        .pricing-features {
          list-style: none;
          margin: 0 0 34px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 14px;
          color: rgba(255,255,255,0.76);
          font-size: 15px;
          line-height: 1.3;
          font-weight: 400;
        }

        .pricing-feature-dot {
          width: 11px;
          height: 11px;
          border-radius: 2px;
          background: rgba(255,255,255,0.44);
          flex: 0 0 auto;
        }

        .pricing-btn {
          width: 100%;
          height: 56px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.78);
          background: transparent;
          color: #f5f5f5;
          font-size: 18px;
          font-weight: 400;
          transition:
            background 0.18s ease,
            color 0.18s ease,
            transform 0.18s ease,
            border-color 0.18s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .pricing-btn:hover {
          background: rgba(255,255,255,0.04);
          transform: translateY(-1px);
        }

        .pricing-btn:active {
          transform: translateY(1px);
        }

        @media (hover: none) and (pointer: coarse) {
          .pricing-card:hover {
            transform: none;
            border-color: rgba(255,255,255,0.1);
            background: #050505;
          }

          .pricing-btn:hover {
            transform: none;
            background: transparent;
          }

          .pricing-left-cta:hover {
            transform: none;
            opacity: 1;
          }
        }

        @media (max-width: 1024px) {
          .pricing-card {
            padding: 24px 22px 26px;
          }

          .pricing-card-header-box {
            padding: 20px 20px 18px;
            margin-bottom: 26px;
          }

          .pricing-price {
            font-size: 46px;
          }

          .pricing-old-price {
            font-size: 20px;
          }

          .pricing-btn {
            height: 52px;
            font-size: 17px;
          }
        }

        @media (max-width: 768px) {
          .pricing-left-cta {
            min-width: 178px;
            height: 50px;
            font-size: 16px;
            border-radius: 12px;
          }

          .pricing-card {
            padding: 20px 16px 22px;
            transition: border-color 0.2s ease, background 0.2s ease;
          }

          .pricing-card-header-box {
            padding: 18px 16px 16px;
            margin-bottom: 22px;
          }

          .pricing-plan-top {
            flex-wrap: wrap;
            margin-bottom: 14px;
          }

          .pricing-price {
            font-size: 40px;
          }

          .pricing-old-price {
            font-size: 18px;
          }

          .pricing-feature {
            font-size: 14px;
            gap: 12px;
          }

          .pricing-btn {
            height: 50px;
            font-size: 16px;
            border-radius: 12px;
          }
        }
      `}</style>

      <section id="pricing" className="relative bg-black py-24 text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="pricing-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="pricing-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="pricing-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="pricing-grid-line left-[7.5%]" />
          <div className="pricing-grid-line left-[28.5%]" />
          <div className="pricing-grid-line left-1/2" />
          <div className="pricing-grid-line right-[28.5%]" />
          <div className="pricing-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-6 md:px-10 lg:px-0">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-on-scroll lg:sticky lg:top-32 lg:self-start">
              <div className="mb-6 flex items-start gap-6">
                <div className="mt-1 h-[72px] w-[2px] bg-primary" />
                <h2 className="text-[48px] font-normal leading-[0.95] tracking-[-0.045em] text-white md:text-[68px] lg:text-[72px]">
                  {t.pricing.title}
                </h2>
              </div>

              <p className="max-w-[560px] text-[18px] leading-[1.45] text-white/72 md:text-[20px]">
                {t.pricing.desc}
              </p>

              <a href="#contact" className="pricing-left-cta mt-10">
                {t.pricing.cta}
              </a>
            </div>

            <div ref={scrollRef} className="space-y-8">
              {plans.map((plan: any, i: number) => (
                <div
                  key={i}
                  className={`pricing-card ${plan.popular ? 'pricing-card-popular' : ''}`}
                >
                  <div className="pricing-card-header-box">
                    <div className="pricing-plan-top">
                      <p className="pricing-plan-name">{plan.name}</p>

                      {plan.popular && (
                        <span className="pricing-badge">
                          <Star className="fill-none" />
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="pricing-price-row">
                      <span className="pricing-price">{plan.price}</span>
                      <span className="pricing-old-price">{plan.oldPrice}</span>
                    </div>

                    <p className="pricing-plan-desc">{plan.desc}</p>
                  </div>

                  <ul className="pricing-features">
                    {plan.features.map((f: string, j: number) => (
                      <li key={j} className="pricing-feature">
                        <span className="pricing-feature-dot" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="pricing-btn">
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;