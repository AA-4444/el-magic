import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Car Wash & Detailing',
    'Oil Change & Maintenance',
    'Engine Diagnostics',
    'Tire & Brake Service',
    'AC Repair',
    'Car Polishing & Waxing',
  ];

  return (
    <>
      <style>{`
        .footer-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
          z-index: 1;
        }

        .footer-shell {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255,255,255,0.10);
          background: #030303;
          overflow: hidden;
        }

        .footer-main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 0.9fr 1fr;
          gap: 60px;
          padding: 78px 38px 86px;
        }

        .footer-bottom {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 28px 38px 34px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 42px;
        }

        .footer-brand {
          color: #f4f4f4;
          font-size: 28px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .footer-copy {
          max-width: 360px;
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.62;
          font-weight: 400;
          margin: 0 0 42px;
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .footer-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ff5a1f;
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .footer-social:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }

        .footer-title {
          color: #f4f4f4;
          font-size: 18px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 28px;
        }

        .footer-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .footer-link,
        .footer-text {
          color: rgba(255,255,255,0.76);
          font-size: 16px;
          line-height: 1.35;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.18s ease;
        }

        .footer-link:hover {
          color: #ffffff;
        }

        .footer-contact-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .footer-contact-icon {
          color: #ff5a1f;
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .footer-meta {
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.3;
          font-weight: 400;
          margin: 0;
        }

        .footer-bottom-copy {
          color: rgba(255,255,255,0.72);
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 34px;
          flex-wrap: wrap;
        }

        .footer-bottom-link {
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
          transition: color 0.18s ease;
        }

        .footer-bottom-link:hover {
          color: #ffffff;
        }

        @media (max-width: 1200px) {
          .footer-main {
            grid-template-columns: 1.2fr 0.9fr 1fr 1fr;
            gap: 40px;
            padding: 64px 28px 72px;
          }

          .footer-bottom {
            padding: 24px 28px 28px;
          }
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 42px 28px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 34px;
            padding: 42px 18px 46px;
          }

          .footer-bottom {
            padding: 20px 18px 24px;
            gap: 16px;
          }

          .footer-brand {
            font-size: 24px;
          }

          .footer-copy,
          .footer-link,
          .footer-text,
          .footer-meta {
            font-size: 15px;
          }

          .footer-bottom-copy,
          .footer-bottom-link {
            font-size: 14px;
          }

          .footer-bottom-links {
            gap: 18px;
          }
        }
      `}</style>

      <footer className="relative bg-black py-24 text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-[1] md:hidden">
          <div
            className="footer-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="footer-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="footer-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines unchanged */}
        <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
          <div className="footer-grid-line left-[7.5%]" />
          <div className="footer-grid-line left-[28.5%]" />
          <div className="footer-grid-line left-1/2" />
          <div className="footer-grid-line right-[28.5%]" />
          <div className="footer-grid-line right-[7.5%]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 md:px-10 lg:px-0">
          <div className="footer-shell">
            <div className="footer-main">
              <div>
                <div className="footer-logo">
                  <svg
                    width="74"
                    height="46"
                    viewBox="0 0 74 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 0H51L57 12H17L23 0Z" fill="#FF5A1F" />
                    <path d="M7 12H31L37 23H13L7 12Z" fill="#FF5A1F" />
                    <path d="M43 12H67L61 23H37L43 12Z" fill="#FF5A1F" />
                    <path d="M17 23H57L51 35H23L17 23Z" fill="#FF5A1F" />
                  </svg>

                  <span className="footer-brand">Autovera</span>
                </div>

                <p className="footer-copy">
                  Your trusted partner for premium car repair and washing services.
                  Serving the community with excellence since 2010.
                </p>

                <div className="footer-socials">
                  <a href="#" className="footer-social" aria-label="Facebook">
                    <Facebook className="h-6 w-6 stroke-[1.8]" />
                  </a>
                  <a href="#" className="footer-social" aria-label="Instagram">
                    <Instagram className="h-6 w-6 stroke-[1.8]" />
                  </a>
                  <a href="#" className="footer-social" aria-label="YouTube">
                    <Youtube className="h-6 w-6 stroke-[1.8]" />
                  </a>
                  <a href="#" className="footer-social" aria-label="X">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path d="M4 4L20 20" />
                      <path d="M20 4L4 20" />
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-list">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="footer-link">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="footer-title">Services</h3>
                <ul className="footer-list">
                  {services.map((item) => (
                    <li key={item}>
                      <a href="#services" className="footer-link">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="footer-title">Contact Info</h3>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <Phone className="footer-contact-icon h-6 w-6 stroke-[1.8]" />
                    <p className="footer-meta">+48 577 472 788</p>
                  </li>

                  <li className="footer-contact-item">
                    <Mail className="footer-contact-icon h-6 w-6 stroke-[1.8]" />
                    <p className="footer-meta">elmagic@gmail.com</p>
                  </li>

                  <li className="footer-contact-item">
                    <MapPin className="footer-contact-icon h-6 w-6 stroke-[1.8]" />
                    <p className="footer-meta">
                      Wroclaw,
                      <br />
                      Sulowska 19 A
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="footer-bottom-copy">
                © 2026 El-Magic. All rights reserved.
              </p>

              <div className="footer-bottom-links">
                <a href="#" className="footer-bottom-link">
                  Privacy Policy
                </a>
                <a href="#" className="footer-bottom-link">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;