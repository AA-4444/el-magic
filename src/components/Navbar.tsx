import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';
import type { Lang } from '@/lib/i18n';

const langLabels: Record<Lang, string> = { en: 'EN', pl: 'PL', ua: 'UA' };

const Navbar = () => {
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.contact, href: '#contact' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.blog, href: '#blog' },
  ];

  return (
    <>
      <style>{`
        .menu-overlay {
          background: rgba(0, 0, 0, 0.58);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .menu-drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100dvh;
          width: 18rem;
          background:
            linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(4,4,4,0.98) 100%);
          border-left: 1px solid rgba(255,255,255,0.08);
          box-shadow: -20px 0 60px rgba(0,0,0,0.34);
          overflow: hidden;
          transform: translateX(100%);
          transition: transform 0.3s ease-out;
        }

        .menu-drawer-open {
          transform: translateX(0);
        }

        .menu-drawer::before {
          content: '';
          position: absolute;
          right: -80px;
          bottom: -60px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255,90,31,0.16) 0%, transparent 70%);
          pointer-events: none;
        }

        .menu-drawer::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 18%);
          pointer-events: none;
        }

        .menu-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.06);
          pointer-events: none;
        }

        .menu-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          color: #f4f4f4;
          text-decoration: none;
          transition: color 0.18s ease, transform 0.18s ease;
        }

        .menu-link:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }


@media (max-width: 767px) {
  .menu-link:last-child {
    border-bottom: 0;
  }
}

        .menu-link:hover {
          color: #ff5a1f;
          transform: translateX(2px);
        }

        .menu-link-text {
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .menu-link-num {
          color: rgba(255,255,255,0.34);
          font-size: 14px;
          letter-spacing: 0.1em;
          flex: 0 0 auto;
        }

        .menu-footer {
          margin-top: auto;
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .menu-footer-copy {
          color: rgba(255,255,255,0.48);
          font-size: 13px;
          line-height: 1.4;
        }

        .menu-footer-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 118px;
          height: 42px;
          padding: 0 16px;
          background: #ff5a1f;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .menu-footer-cta:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        @media (max-width: 767px) {
          .menu-drawer {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 60dvh;
            border-left: 0;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            box-shadow: 0 20px 60px rgba(0,0,0,0.34);
            transform: translateY(-100%);
          }

          .menu-drawer-open {
            transform: translateY(0);
          }

          .menu-drawer::before {
            right: auto;
            left: 50%;
            bottom: -100px;
            transform: translateX(-50%);
            width: 300px;
            height: 220px;
          }

          .menu-link {
            padding: 16px 0;
          }

          .menu-link-text {
            font-size: 28px;
          }

          .menu-footer {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 z-50">
          <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
            <path d="M20 0L32 7V14L20 7L8 14V7L20 0Z" fill="hsl(22, 100%, 50%)" />
            <path d="M20 7L32 14V21L20 14L8 21V14L20 7Z" fill="hsl(22, 100%, 50%)" />
            <path d="M20 14L32 21V28L20 21L8 28V21L20 14Z" fill="hsl(22, 100%, 40%)" />
          </svg>
          <span className="text-foreground text-xl font-bold tracking-tight">El-Magic</span>
        </a>

        <div className="flex items-center gap-5 z-50">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-foreground/70 hover:text-foreground transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              {langLabels[lang]}
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-md overflow-hidden shadow-xl min-w-[60px]">
                {(Object.keys(langLabels) as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`block w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${l === lang ? 'text-primary' : 'text-foreground'}`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="z-50 flex flex-col justify-center items-end gap-[6px] w-8 h-8">
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-foreground">
                <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <>
                <span className="block w-7 h-[2px] bg-foreground" />
                <span className="block w-5 h-[2px] bg-foreground" />
              </>
            )}
          </button>
        </div>

        <div
          className={`menu-overlay fixed inset-0 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`menu-drawer fixed z-[45] p-8 pt-24 md:w-[380px] ${
            menuOpen ? 'menu-drawer-open' : ''
          }`}
        >
          {/* mobile drawer lines */}
          <div className="menu-grid-line md:hidden" style={{ left: '4%' }} />
          <div className="menu-grid-line md:hidden" style={{ left: '50%' }} />
          <div className="menu-grid-line md:hidden" style={{ left: '96%' }} />

          {/* desktop drawer lines */}
          <div className="menu-grid-line hidden md:block" style={{ left: '12%' }} />
          <div className="menu-grid-line hidden md:block" style={{ left: '50%' }} />
          <div className="menu-grid-line hidden md:block" style={{ left: '88%' }} />

          <div className="relative z-[2] flex h-full flex-col">
            <div className="mb-8">
              <span className="text-white/45 text-[12px] tracking-[0.18em] uppercase">
                Menu
              </span>
            </div>

            <div className="flex flex-col">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="menu-link"
                >
                  <span className="menu-link-text">{link.label}</span>
                  <span className="menu-link-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              ))}
            </div>

            <div className="menu-footer">
              <p className="menu-footer-copy">
                Premium car service
                <br />
                and repair studio
              </p>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="menu-footer-cta"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;