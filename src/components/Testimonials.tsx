import { useRef, useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    text: 'Post-service, the vehicle rides smoother, handles confidently — with expert technicians, honest guidance, and a safety-focused automotive team.',
    name: 'David Martinez',
    role: 'Entrepreneur',
    stars: 4,
  },
  {
    text: 'Outstanding service from start to finish. Oil change, inspection, and overall care were handled quickly, professionally, and with great attention.',
    name: 'Michael Harris',
    role: 'Car Owner',
    stars: 4,
  },
  {
    text: 'After their tire and brake service, my car feels much safer and smoother — truly reliable, skilled, and customer-focused automotive service provider.',
    name: 'James Carter',
    role: 'Manager',
    stars: 5,
  },
  {
    text: 'Fast diagnostics, clear communication, and excellent repair quality. The team fixed the electrical issue quickly and made the whole process stress-free.',
    name: 'Robert Wilson',
    role: 'Business Owner',
    stars: 5,
  },
  {
    text: 'Very professional service and fair pricing. They explained every step, completed the repair on time, and my car now runs perfectly again.',
    name: 'Daniel Thompson',
    role: 'Driver',
    stars: 4,
  },
  {
    text: 'From inspection to final repair, everything was handled with real care and precision. Reliable specialists I would confidently recommend to anyone.',
    name: 'Christopher Lee',
    role: 'Sales Manager',
    stars: 5,
  },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToCard = (index: number) => {
    const track = scrollRef.current;
    const card = cardRefs.current[index];

    if (!track || !card) return;

    track.scrollTo({
      left: card.offsetLeft,
      behavior: 'smooth',
    });

    setActiveIndex(index);
  };

  const scroll = (dir: number) => {
    const total = reviews.length;
    const nextIndex = Math.max(0, Math.min(total - 1, activeIndex + dir));
    goToCard(nextIndex);
  };

  return (
    <>
      <style>{`
        .testimonials-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .testimonials-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .testimonials-track::-webkit-scrollbar {
          display: none;
        }

        .testimonial-card {
          min-width: 440px;
          max-width: 440px;
          min-height: 382px;
          border: 1px solid rgba(255,255,255,0.11);
          background: #050505;
          padding: 34px 30px 28px;
          flex-shrink: 0;
          scroll-snap-align: start;
          scroll-snap-stop: always;
          transition:
            transform 0.22s ease,
            border-color 0.22s ease,
            background 0.22s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .testimonial-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.16);
          background: #080808;
        }

        .testimonial-stars {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 32px;
        }

        .testimonial-text {
          color: #f3f3f3;
          font-size: 20px;
          line-height: 1.45;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin: 0 0 34px;
          max-width: 360px;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
        }

        .testimonial-avatar {
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(180deg, #202020 0%, #0f0f0f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.88);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          flex: 0 0 auto;
        }

        .testimonial-name {
          color: #f4f4f4;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 4px;
        }

        .testimonial-role {
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0;
        }

        .testimonial-nav {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(255,255,255,0.08);
          background: #232323;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f3f3f3;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            border-color 0.18s ease;
        }

        .testimonial-nav:hover {
          background: #2b2b2b;
          border-color: rgba(255,255,255,0.14);
          transform: translateY(-1px);
        }

        .testimonial-nav:active {
          transform: translateY(1px);
        }

        @media (hover: none) and (pointer: coarse) {
          .testimonial-card:hover,
          .testimonial-nav:hover {
            transform: none;
          }
        }

        @media (max-width: 1024px) {
          .testimonial-card {
            min-width: 390px;
            max-width: 390px;
            min-height: 350px;
            padding: 28px 24px 24px;
          }

          .testimonial-text {
            font-size: 18px;
            max-width: 320px;
            margin-bottom: 28px;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            min-width: 100%;
            max-width: 100%;
            min-height: 320px;
            padding: 24px 18px 22px;
          }

          .testimonial-text {
            font-size: 17px;
            max-width: none;
          }

          .testimonial-nav {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <section className="relative bg-black py-24 text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="testimonials-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="testimonials-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="testimonials-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="testimonials-grid-line left-[7.5%]" />
          <div className="testimonials-grid-line left-[28.5%]" />
          <div className="testimonials-grid-line left-1/2" />
          <div className="testimonials-grid-line right-[28.5%]" />
          <div className="testimonials-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-[4%] md:px-10 lg:px-0">
          <div className="mb-12 animate-on-scroll md:mb-14">
            <div className="mb-5 flex items-start gap-6">
              <div className="mt-2 h-[72px] w-[2px] bg-primary" />
              <h2 className="text-[46px] font-normal leading-[0.95] tracking-[-0.045em] text-white md:text-[68px] lg:text-[74px]">
                {t.testimonials.title}
              </h2>
            </div>

            <p className="max-w-[760px] text-[18px] leading-[1.45] text-white/70 md:text-[20px]">
              {t.testimonials.desc}
            </p>
          </div>

          <div
            ref={scrollRef}
            className="testimonials-track flex gap-0 md:gap-6 overflow-x-auto pb-4"
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="testimonial-card"
              >
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-6 w-6 ${
                        j < r.stars
                          ? 'fill-primary text-primary'
                          : 'fill-[#bcbcbc] text-[#bcbcbc]'
                      }`}
                    />
                  ))}
                </div>

                <p className="testimonial-text">{r.text}</p>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {r.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                  <div>
                    <p className="testimonial-name">{r.name}</p>
                    <p className="testimonial-role">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-0">
            <button
              onClick={() => scroll(-1)}
              className="testimonial-nav"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
            </button>

            <button
              onClick={() => scroll(1)}
              className="testimonial-nav"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-8 w-8 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;