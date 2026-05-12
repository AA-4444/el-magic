import { useLanguage } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      eyebrow: 'Legal Information',
      title: 'Privacy Policy',
      updated: 'Last updated: 2026',
      intro:
        'This Privacy Policy explains how El-Magic collects, uses and protects personal data when you use our website, contact us or book automotive services.',
      back: 'Back to Home',
      sections: [
        {
          title: '1. Data Controller',
          text: 'The controller of your personal data is El-Magic, located at Sułowska 19A, Wrocław, Poland. You can contact us by e-mail at ekimyans@gmail.com or by phone at +48 577 472 788.',
        },
        {
          title: '2. What Data We Collect',
          text: 'We may collect personal data that you voluntarily provide through the contact form, phone, e-mail or social media. This may include your name, phone number, selected service, preferred date and time, message content and vehicle-related information if you provide it.',
        },
        {
          title: '3. Why We Use Your Data',
          text: 'We use your data to respond to inquiries, confirm bookings, prepare service details and provide services such as computer diagnostics, car electronics repair, chip tuning, Android radio installation, CarPlay / Android Auto modules, rear camera installation, car audio installation and interior soundproofing.',
        },
        {
          title: '4. Legal Basis',
          text: 'We process your data to take steps before providing a service, to perform a service, to respond to your request, and where necessary based on our legitimate interest in communicating with customers. In some cases, we may process data based on your consent.',
        },
        {
          title: '5. Contact Form',
          text: 'When you submit the contact form, you provide the information needed to process your request. Required fields are necessary so we can contact you and arrange the service.',
        },
        {
          title: '6. Sharing Data',
          text: 'We do not sell your personal data. Your data may be shared only with technical service providers that help us operate the website, contact form, hosting, e-mail or related tools.',
        },
        {
          title: '7. Data Retention',
          text: 'We keep your data only as long as necessary to handle your inquiry, provide the service, maintain communication history and protect possible legal claims.',
        },
        {
          title: '8. Your Rights',
          text: 'You have the right to access your data, correct it, request deletion, restrict processing, object to processing, request data portability and withdraw consent where processing is based on consent.',
        },
        {
          title: '9. Cookies and Technical Data',
          text: 'Our website may use basic cookies and technical data necessary for proper operation, security and improving the user experience. If analytical or marketing tools are used, this should be described in a separate cookies section.',
        },
        {
          title: '10. Data Security',
          text: 'We apply appropriate technical and organizational measures to protect personal data against unauthorized access, loss, alteration or disclosure.',
        },
        {
          title: '11. Changes to This Policy',
          text: 'We may update this Privacy Policy when our website, services or legal requirements change. The current version will always be available on this page.',
        },
      ],
    },

    pl: {
      eyebrow: 'Informacje prawne',
      title: 'Polityka Prywatności',
      updated: 'Ostatnia aktualizacja: 2026',
      intro:
        'Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób El-Magic zbiera, wykorzystuje i chroni dane osobowe podczas korzystania ze strony, kontaktu z nami lub rezerwacji usług.',
      back: 'Wróć na stronę główną',
      sections: [
        {
          title: '1. Administrator danych',
          text: 'Administratorem danych osobowych jest El-Magic, ul. Sułowska 19A, Wrocław, Polska. Możesz skontaktować się z nami pod adresem e-mail: ekimyans@gmail.com lub telefonicznie: +48 577 472 788.',
        },
        {
          title: '2. Jakie dane zbieramy',
          text: 'Możemy zbierać dane osobowe, które dobrowolnie przekazujesz przez formularz kontaktowy, telefon, e-mail lub media społecznościowe. Mogą to być: imię, numer telefonu, wybrana usługa, preferowana data i godzina wizyty, treść wiadomości oraz informacje o pojeździe, jeśli je podasz.',
        },
        {
          title: '3. W jakim celu używamy danych',
          text: 'Dane wykorzystujemy do odpowiedzi na zapytania, potwierdzania rezerwacji, ustalania szczegółów usługi oraz realizacji usług takich jak diagnostyka komputerowa, naprawa elektroniki samochodowej, chip tuning, montaż radia Android, modułów CarPlay / Android Auto, kamer cofania, car audio oraz wyciszanie wnętrza.',
        },
        {
          title: '4. Podstawa prawna',
          text: 'Dane przetwarzamy w celu podjęcia działań przed wykonaniem usługi, realizacji usługi, odpowiedzi na zapytanie oraz na podstawie naszego prawnie uzasadnionego interesu polegającego na kontakcie z klientami. W niektórych przypadkach dane mogą być przetwarzane na podstawie zgody.',
        },
        {
          title: '5. Formularz kontaktowy',
          text: 'Wysyłając formularz kontaktowy, przekazujesz dane potrzebne do obsługi zgłoszenia. Pola wymagane są niezbędne, abyśmy mogli skontaktować się z Tobą i ustalić szczegóły wizyty.',
        },
        {
          title: '6. Udostępnianie danych',
          text: 'Nie sprzedajemy danych osobowych. Dane mogą być przekazywane wyłącznie dostawcom technicznym, którzy pomagają nam obsługiwać stronę internetową, formularz kontaktowy, hosting, pocztę e-mail lub inne narzędzia techniczne.',
        },
        {
          title: '7. Okres przechowywania danych',
          text: 'Dane przechowujemy tylko tak długo, jak jest to potrzebne do obsługi zapytania, wykonania usługi, zachowania historii kontaktu oraz zabezpieczenia ewentualnych roszczeń.',
        },
        {
          title: '8. Twoje prawa',
          text: 'Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, wniesienia sprzeciwu, przenoszenia danych oraz wycofania zgody, jeśli przetwarzanie odbywa się na podstawie zgody.',
        },
        {
          title: '9. Cookies i dane techniczne',
          text: 'Nasza strona może korzystać z podstawowych plików cookies i danych technicznych potrzebnych do prawidłowego działania strony, bezpieczeństwa oraz poprawy wygody korzystania z serwisu. Jeśli używane są narzędzia analityczne lub marketingowe, powinny zostać opisane w osobnej sekcji cookies.',
        },
        {
          title: '10. Bezpieczeństwo danych',
          text: 'Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe przed nieuprawnionym dostępem, utratą, zmianą lub ujawnieniem.',
        },
        {
          title: '11. Zmiany Polityki Prywatności',
          text: 'Możemy aktualizować niniejszą Politykę Prywatności, jeśli zmieni się działanie strony, zakres usług lub wymagania prawne. Aktualna wersja będzie zawsze dostępna na tej stronie.',
        },
      ],
    },

    ua: {
      eyebrow: 'Правова інформація',
      title: 'Політика Конфіденційності',
      updated: 'Останнє оновлення: 2026',
      intro:
        'Ця Політика Конфіденційності пояснює, як El-Magic збирає, використовує та захищає персональні дані під час користування сайтом, звернення до нас або бронювання послуг.',
      back: 'Повернутися на головну',
      sections: [
        {
          title: '1. Адміністратор даних',
          text: 'Адміністратором персональних даних є El-Magic, вул. Sułowska 19A, Вроцлав, Польща. Ви можете звʼязатися з нами електронною поштою: ekimyans@gmail.com або телефоном: +48 577 472 788.',
        },
        {
          title: '2. Які дані ми збираємо',
          text: 'Ми можемо збирати персональні дані, які ви добровільно надаєте через контактну форму, телефон, e-mail або соціальні мережі. Це може бути імʼя, номер телефону, вибрана послуга, бажана дата й час візиту, текст повідомлення та інформація про автомобіль, якщо ви її надаєте.',
        },
        {
          title: '3. Для чого ми використовуємо дані',
          text: 'Ми використовуємо дані для відповіді на запити, підтвердження запису, уточнення деталей послуги та надання таких послуг, як компʼютерна діагностика, ремонт автоелектроніки, чип-тюнінг, встановлення Android-магнітол, модулів CarPlay / Android Auto, камер заднього виду, car audio та шумоізоляція салону.',
        },
        {
          title: '4. Правова підстава',
          text: 'Ми обробляємо дані для підготовки до надання послуги, виконання послуги, відповіді на ваш запит, а також на підставі нашого законного інтересу у комунікації з клієнтами. У деяких випадках дані можуть оброблятися на підставі вашої згоди.',
        },
        {
          title: '5. Контактна форма',
          text: 'Надсилаючи контактну форму, ви передаєте дані, необхідні для обробки заявки. Обовʼязкові поля потрібні для того, щоб ми могли звʼязатися з вами та узгодити деталі візиту.',
        },
        {
          title: '6. Передача даних',
          text: 'Ми не продаємо персональні дані. Дані можуть передаватися лише технічним постачальникам, які допомагають нам обслуговувати сайт, контактну форму, хостинг, електронну пошту або інші технічні інструменти.',
        },
        {
          title: '7. Строк зберігання даних',
          text: 'Ми зберігаємо дані лише стільки, скільки потрібно для обробки запиту, надання послуги, збереження історії контакту та захисту можливих правових вимог.',
        },
        {
          title: '8. Ваші права',
          text: 'Ви маєте право на доступ до своїх даних, їх виправлення, видалення, обмеження обробки, заперечення проти обробки, перенесення даних та відкликання згоди, якщо обробка здійснюється на підставі згоди.',
        },
        {
          title: '9. Cookies і технічні дані',
          text: 'Наш сайт може використовувати базові cookies та технічні дані, необхідні для правильної роботи сайту, безпеки та покращення зручності користування. Якщо використовуються аналітичні або маркетингові інструменти, це має бути описано в окремому розділі cookies.',
        },
        {
          title: '10. Безпека даних',
          text: 'Ми застосовуємо відповідні технічні та організаційні заходи для захисту персональних даних від несанкціонованого доступу, втрати, зміни або розголошення.',
        },
        {
          title: '11. Зміни Політики Конфіденційності',
          text: 'Ми можемо оновлювати цю Політику Конфіденційності, якщо змінюється робота сайту, перелік послуг або правові вимоги. Актуальна версія завжди буде доступна на цій сторінці.',
        },
      ],
    },
  };

  const page = content[lang] ?? content.pl;

  return (
    <>
      <Navbar />

      <style>{`
        .privacy-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .privacy-shell {
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            radial-gradient(circle at 74% 0%, rgba(255,90,31,0.14), transparent 34%),
            linear-gradient(180deg, #050505 0%, #030303 100%);
          overflow: hidden;
        }

        .privacy-shell::before {
          content: '';
          position: absolute;
          left: -140px;
          top: -140px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255,90,31,0.14), transparent 68%);
          pointer-events: none;
        }

        .privacy-hero {
          position: relative;
          z-index: 2;
          padding: 120px 56px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .privacy-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: rgba(255,255,255,0.58);
          font-size: 13px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        .privacy-eyebrow::before {
          content: '';
          width: 42px;
          height: 1px;
          background: #ff5a1f;
        }

        .privacy-title {
          max-width: 860px;
          margin: 0;
          color: #f5f5f5;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.94;
          font-weight: 400;
          letter-spacing: -0.06em;
        }

        .privacy-updated {
          margin: 26px 0 0;
          color: rgba(255,255,255,0.52);
          font-size: 15px;
          line-height: 1.4;
        }

        .privacy-intro {
          max-width: 760px;
          margin: 34px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 20px;
          line-height: 1.55;
          font-weight: 400;
        }

        .privacy-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 64px;
          padding: 64px 56px 76px;
        }

        .privacy-side {
          position: sticky;
          top: 110px;
          align-self: start;
        }

        .privacy-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .privacy-brand {
          color: #f4f4f4;
          font-size: 24px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .privacy-side-text {
          margin: 0 0 28px;
          color: rgba(255,255,255,0.62);
          font-size: 15px;
          line-height: 1.58;
        }

        .privacy-back {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 48px;
          padding: 0 22px;
          border-radius: 3px;
          background: #ff5a1f;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.15),
            0 8px 16px rgba(255,90,31,0.16);
          transition: transform 0.18s ease, background 0.18s ease;
        }

        .privacy-back:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .privacy-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .privacy-card {
          position: relative;
          padding: 30px 32px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          overflow: hidden;
        }

        .privacy-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #ff5a1f;
          opacity: 0;
          transition: opacity 0.18s ease;
        }

        .privacy-card:hover::before {
          opacity: 1;
        }

        .privacy-card-title {
          margin: 0 0 14px;
          color: #f4f4f4;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .privacy-card-text {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.68;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .privacy-hero {
            padding: 110px 34px 54px;
          }

          .privacy-content {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 48px 34px 60px;
          }

          .privacy-side {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 768px) {
          .privacy-hero {
            padding: 108px 20px 44px;
          }

          .privacy-title {
            font-size: 48px;
          }

          .privacy-intro {
            font-size: 16px;
            line-height: 1.6;
          }

          .privacy-content {
            padding: 34px 20px 46px;
          }

          .privacy-card {
            padding: 24px 20px;
          }

          .privacy-card-title {
            font-size: 20px;
          }

          .privacy-card-text {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="relative min-h-screen bg-black pt-24 text-white">
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="privacy-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="privacy-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="privacy-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="privacy-grid-line left-[7.5%]" />
          <div className="privacy-grid-line left-[28.5%]" />
          <div className="privacy-grid-line left-1/2" />
          <div className="privacy-grid-line right-[28.5%]" />
          <div className="privacy-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-[4%] pb-24 md:px-10 lg:px-0">
          <div className="privacy-shell">
            <section className="privacy-hero">
              <div className="privacy-eyebrow">{page.eyebrow}</div>
              <h1 className="privacy-title">{page.title}</h1>
              <p className="privacy-updated">{page.updated}</p>
              <p className="privacy-intro">{page.intro}</p>
            </section>

            <section className="privacy-content">
              <aside className="privacy-side">
                <div className="privacy-logo">
                  <svg
                    width="54"
                    height="34"
                    viewBox="0 0 74 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 0H51L57 12H17L23 0Z" fill="#FF5A1F" />
                    <path d="M7 12H31L37 23H13L7 12Z" fill="#FF5A1F" />
                    <path d="M43 12H67L61 23H37L43 12Z" fill="#FF5A1F" />
                    <path d="M17 23H57L51 35H23L17 23Z" fill="#FF5A1F" />
                  </svg>
                  <span className="privacy-brand">El-Magic</span>
                </div>

                <p className="privacy-side-text">
                  Wrocław, Sułowska 19A
                  <br />
                  +48 577 472 788
                  <br />
                  ekimyans@gmail.com
                </p>

                <a href="/" className="privacy-back">
                  {page.back}
                </a>
              </aside>

              <div className="privacy-list">
                {page.sections.map((section) => (
                  <article key={section.title} className="privacy-card">
                    <h2 className="privacy-card-title">{section.title}</h2>
                    <p className="privacy-card-text">{section.text}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;