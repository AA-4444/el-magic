import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Phone, ChevronDown } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    package: '',
    message: '',
  });

  const serviceOptions = t.services.items.map((s: any) => s.name);
  const packageOptions = t.pricing.plans.map((p: any) => p.name);

  const selectTextColor =
    formData.service || formData.package
      ? '#f4f4f4'
      : 'rgba(255,255,255,0.42)';

  return (
    <>
      <style>{`
        .contact-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .contact-shell {
          position: relative;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255,255,255,0.1);
          background: #030303;
          overflow: hidden;
        }

        .contact-shell::before {
          content: '';
          position: absolute;
          left: -120px;
          bottom: -120px;
          width: 360px;
          height: 360px;
          background: radial-gradient(
            circle,
            rgba(255,90,31,0.16) 0%,
            rgba(255,90,31,0.07) 30%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
        }

        .contact-left {
          position: relative;
          z-index: 2;
          min-height: 760px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 72px 48px;
        }

        .contact-left-inner {
          width: 100%;
          max-width: 520px;
          text-align: center;
        }

        .contact-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 34px;
        }

        .contact-title {
          color: #f5f5f5;
          font-size: clamp(44px, 4.4vw, 68px);
          line-height: 1.06;
          font-weight: 400;
          letter-spacing: -0.05em;
          margin: 0 0 26px;
        }

        .contact-desc {
          max-width: 470px;
          margin: 0 auto;
          color: rgba(255,255,255,0.76);
          font-size: 17px;
          line-height: 1.55;
          font-weight: 400;
        }

        .contact-actions {
          margin-top: 38px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 22px;
        }

        .contact-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 220px;
          height: 54px;
          padding: 0 28px;
          border-radius: 4px;
          background: #ff5a1f;
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .contact-primary-btn:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .contact-primary-btn:active {
          transform: translateY(1px);
        }

        .contact-phone-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 220px;
          height: 54px;
          padding: 0 26px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.72);
          background: transparent;
          color: #f5f5f5;
          text-decoration: none;
          font-size: 16px;
          font-weight: 400;
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .contact-phone-btn:hover {
          background: rgba(255,255,255,0.04);
          transform: translateY(-1px);
        }

        .contact-phone-btn:active {
          transform: translateY(1px);
        }

        .contact-right {
          position: relative;
          z-index: 2;
          min-height: 760px;
          padding: 52px 48px 48px;
          border-left: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.01);
        }

        .contact-form-title {
          color: #f5f5f5;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          margin: 0 0 28px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contact-label {
          color: rgba(255,255,255,0.94);
          font-size: 15px;
          line-height: 1.2;
          font-weight: 400;
        }

        .contact-label .required {
          color: #ff5a1f;
        }

        .contact-input,
        .contact-select,
        .contact-textarea {
          width: 100%;
          border: 0;
          outline: none;
          background: #0d0d0f;
          color: #f4f4f4;
          font-size: 16px;
          font-weight: 400;
          box-sizing: border-box;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
        }

        .contact-input,
        .contact-select {
          height: 60px;
          padding: 0 18px;
        }

        .contact-textarea {
          min-height: 124px;
          padding: 16px 18px;
          resize: vertical;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: rgba(255,255,255,0.28);
        }

        .contact-input:focus,
        .contact-select:focus,
        .contact-textarea:focus {
          box-shadow: inset 0 0 0 1px rgba(255,90,31,0.45);
        }

        .contact-select-wrap {
          position: relative;
        }

        .contact-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-right: 52px;
        }

        .contact-select-icon {
          position: absolute;
          top: 50%;
          right: 16px;
          transform: translateY(-50%);
          pointer-events: none;
          color: rgba(255,255,255,0.55);
        }

        .contact-submit {
          width: 100%;
          height: 56px;
          margin-top: 2px;
          border: 0;
          border-radius: 14px;
          background: #f1f1f1;
          color: #161616;
          font-size: 18px;
          font-weight: 400;
          transition: transform 0.18s ease, opacity 0.18s ease;
        }

        .contact-submit:hover {
          transform: translateY(-1px);
          opacity: 0.97;
        }

        .contact-submit:active {
          transform: translateY(1px);
        }

        @media (max-width: 1200px) {
          .contact-left,
          .contact-right {
            min-height: 700px;
          }

          .contact-left {
            padding: 56px 32px;
          }

          .contact-right {
            padding: 42px 30px 36px;
          }
        }

        @media (max-width: 1024px) {
          .contact-right {
            border-left: 0;
            border-top: 1px solid rgba(255,255,255,0.08);
          }

          .contact-left,
          .contact-right {
            min-height: auto;
          }

          .contact-left {
            padding: 56px 24px;
          }

          .contact-right {
            padding: 36px 24px 28px;
          }

          .contact-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .contact-left {
            padding: 44px 16px;
          }

          .contact-right {
            padding: 28px 16px 20px;
          }

          .contact-title {
            font-size: 36px;
          }

          .contact-desc {
            font-size: 15px;
          }

          .contact-actions {
            gap: 14px;
          }

          .contact-primary-btn,
          .contact-phone-btn {
            min-width: 190px;
            height: 48px;
            font-size: 15px;
          }

          .contact-input,
          .contact-select {
            height: 54px;
            font-size: 15px;
          }

          .contact-textarea {
            min-height: 110px;
            font-size: 15px;
          }

          .contact-submit {
            height: 52px;
            font-size: 16px;
            border-radius: 12px;
          }
        }
      `}</style>

      <section id="contact" className="relative bg-black py-24 text-white">
        {/* mobile 3 lines */}
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="contact-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="contact-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="contact-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        {/* desktop lines */}
        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="contact-grid-line left-[7.5%]" />
          <div className="contact-grid-line left-[28.5%]" />
          <div className="contact-grid-line left-1/2" />
          <div className="contact-grid-line right-[28.5%]" />
          <div className="contact-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-6 md:px-10 lg:px-0">
          <div className="contact-shell">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="contact-left animate-on-scroll">
                <div className="contact-left-inner">
                  <div className="contact-logo">
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
                  </div>

                  <h2 className="contact-title">{t.cta.title}</h2>

                  <p className="contact-desc">{t.cta.desc}</p>

                  <div className="contact-actions">
                    <a href="#contact" className="contact-primary-btn">
                      {t.cta.bookNow}
                    </a>

                    <a href="tel:5551234567" className="contact-phone-btn">
                      <Phone className="h-5 w-5" />
                      <span>{t.cta.phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="contact-right animate-on-scroll"
                style={{ transitionDelay: '150ms' }}
              >
                <h3 className="contact-form-title">{t.form.title}</h3>

                <form
                  className="contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="contact-field">
                    <label className="contact-label">
                      {t.form.name}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">
                      {t.form.phone}
                      <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder={t.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">
                      {t.form.services}
                      <span className="required">*</span>
                    </label>
                    <div className="contact-select-wrap">
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="contact-select"
                        style={{ color: selectTextColor }}
                      >
                        <option value="">{t.form.select}</option>
                        {serviceOptions.map((s: string) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="contact-select-icon h-5 w-5" />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">
                      {t.form.packages}
                      <span className="required">*</span>
                    </label>
                    <div className="contact-select-wrap">
                      <select
                        value={formData.package}
                        onChange={(e) =>
                          setFormData({ ...formData, package: e.target.value })
                        }
                        className="contact-select"
                        style={{ color: selectTextColor }}
                      >
                        <option value="">{t.form.select}</option>
                        {packageOptions.map((p: string) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="contact-select-icon h-5 w-5" />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label className="contact-label">{t.form.message}</label>
                    <textarea
                      rows={4}
                      placeholder={t.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="contact-textarea"
                    />
                  </div>

                  <button type="submit" className="contact-submit">
                    {t.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;