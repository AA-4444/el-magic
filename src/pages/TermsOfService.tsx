import { useLanguage } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  const { lang } = useLanguage();

  const content = {
    en: {
      eyebrow: 'Service Rules',
      title: 'Terms of Service',
      updated: 'Last updated: 2026',
      intro:
        'These Terms of Service explain the rules for using the El-Magic website, contacting us and booking automotive services.',
      back: 'Back to Home',
      sections: [
        {
          title: '1. General Information',
          text: 'This website is operated by El-Magic, located at Sułowska 19A, Wrocław, Poland. You can contact us by e-mail at ekimyans@gmail.com or by phone at +48 577 472 788.',
        },
        {
          title: '2. Scope of Services',
          text: 'El-Magic provides automotive services including computer diagnostics, car electronics repair, chip tuning, Android radio installation, CarPlay / Android Auto module installation, rear camera installation, car audio installation, interior soundproofing and related vehicle services.',
        },
        {
          title: '3. Booking a Service',
          text: 'You can book a service through the contact form, by phone, e-mail or social media. After receiving your request, we may contact you to confirm the details, selected service, preferred date and time, vehicle information and expected scope of work.',
        },
        {
          title: '4. Prices',
          text: 'Prices shown on the website are starting prices and are marked as “from”. The final price may depend on the vehicle model, technical condition, parts required, installation complexity and final scope of work. The final price is confirmed individually before the service is performed.',
        },
        {
          title: '5. Customer Responsibilities',
          text: 'The customer is responsible for providing correct contact details, accurate vehicle information and arriving at the agreed time. The customer should inform us about known vehicle issues, previous modifications or repairs that may affect the service.',
        },
        {
          title: '6. Service Time',
          text: 'Estimated service time may vary depending on the vehicle, type of service, technical condition, availability of parts and complexity of the work. We always try to complete services efficiently, but some work may require additional time.',
        },
        {
          title: '7. Changes and Cancellations',
          text: 'If you need to change or cancel your appointment, please contact us as early as possible. We reserve the right to reschedule a booking if necessary due to technical reasons, unavailable parts, delays or other circumstances beyond our control.',
        },
        {
          title: '8. Vehicle Diagnostics and Results',
          text: 'Diagnostic results are based on available vehicle data, visible symptoms and technical inspection. Some faults may require additional checks, testing or repair before the final cause can be confirmed.',
        },
        {
          title: '9. Chip Tuning and Modifications',
          text: 'Chip tuning and vehicle modifications are performed based on the vehicle condition and technical possibilities. The final result may vary depending on engine condition, software version, hardware, previous modifications and maintenance history.',
        },
        {
          title: '10. Liability',
          text: 'We provide services with care and professional attention. We are not responsible for hidden defects, previous improper repairs, unauthorized modifications, worn components or faults that were not visible before starting the service.',
        },
        {
          title: '11. Website Content',
          text: 'The information on this website is for general informational purposes. Photos, descriptions and prices are illustrative and do not constitute a final commercial offer unless confirmed individually.',
        },
        {
          title: '12. Changes to These Terms',
          text: 'We may update these Terms of Service if our website, services, prices or legal requirements change. The current version will always be available on this page.',
        },
      ],
    },

    pl: {
      eyebrow: 'Zasady usług',
      title: 'Regulamin',
      updated: 'Ostatnia aktualizacja: 2026',
      intro:
        'Niniejszy Regulamin określa zasady korzystania ze strony El-Magic, kontaktu z nami oraz umawiania usług samochodowych.',
      back: 'Wróć na stronę główną',
      sections: [
        {
          title: '1. Informacje ogólne',
          text: 'Strona internetowa jest prowadzona przez El-Magic, ul. Sułowska 19A, Wrocław, Polska. Możesz skontaktować się z nami pod adresem e-mail: ekimyans@gmail.com lub telefonicznie: +48 577 472 788.',
        },
        {
          title: '2. Zakres usług',
          text: 'El-Magic świadczy usługi samochodowe, w tym diagnostykę komputerową, naprawę elektroniki samochodowej, chip tuning, montaż radia Android, montaż modułów CarPlay / Android Auto, montaż kamer cofania, montaż car audio, wyciszanie wnętrza oraz powiązane usługi przy pojazdach.',
        },
        {
          title: '3. Umawianie wizyty',
          text: 'Usługę można umówić przez formularz kontaktowy, telefon, e-mail lub media społecznościowe. Po otrzymaniu zgłoszenia możemy skontaktować się z Tobą w celu potwierdzenia szczegółów, wybranej usługi, preferowanej daty i godziny, informacji o pojeździe oraz przewidywanego zakresu prac.',
        },
        {
          title: '4. Ceny',
          text: 'Ceny podane na stronie są cenami początkowymi i oznaczone są jako “od”. Ostateczna cena może zależeć od modelu pojazdu, stanu technicznego, potrzebnych części, złożoności montażu oraz końcowego zakresu prac. Ostateczna cena jest potwierdzana indywidualnie przed wykonaniem usługi.',
        },
        {
          title: '5. Obowiązki klienta',
          text: 'Klient odpowiada za podanie prawidłowych danych kontaktowych, rzetelnych informacji o pojeździe oraz przybycie w ustalonym terminie. Klient powinien poinformować nas o znanych problemach pojazdu, wcześniejszych modyfikacjach lub naprawach, które mogą mieć wpływ na usługę.',
        },
        {
          title: '6. Czas realizacji usługi',
          text: 'Przewidywany czas realizacji może różnić się w zależności od pojazdu, rodzaju usługi, stanu technicznego, dostępności części oraz złożoności prac. Zawsze staramy się realizować usługi sprawnie, jednak niektóre prace mogą wymagać dodatkowego czasu.',
        },
        {
          title: '7. Zmiana lub odwołanie wizyty',
          text: 'Jeśli chcesz zmienić lub odwołać wizytę, skontaktuj się z nami możliwie jak najwcześniej. Zastrzegamy sobie prawo do zmiany terminu wizyty, jeśli będzie to konieczne z przyczyn technicznych, braku części, opóźnień lub innych okoliczności niezależnych od nas.',
        },
        {
          title: '8. Diagnostyka i wyniki',
          text: 'Wyniki diagnostyki opierają się na dostępnych danych pojazdu, widocznych objawach oraz kontroli technicznej. Niektóre usterki mogą wymagać dodatkowej weryfikacji, testów lub naprawy, zanim możliwe będzie potwierdzenie ostatecznej przyczyny problemu.',
        },
        {
          title: '9. Chip tuning i modyfikacje',
          text: 'Chip tuning oraz modyfikacje pojazdu wykonywane są z uwzględnieniem stanu technicznego auta i możliwości technicznych. Ostateczny rezultat może zależeć od stanu silnika, wersji oprogramowania, osprzętu, wcześniejszych modyfikacji oraz historii serwisowej.',
        },
        {
          title: '10. Odpowiedzialność',
          text: 'Usługi wykonujemy z należytą starannością i profesjonalnym podejściem. Nie odpowiadamy za ukryte wady, wcześniejsze nieprawidłowe naprawy, nieautoryzowane modyfikacje, zużyte elementy lub usterki, które nie były widoczne przed rozpoczęciem usługi.',
        },
        {
          title: '11. Treści na stronie',
          text: 'Informacje znajdujące się na stronie mają charakter ogólny i informacyjny. Zdjęcia, opisy oraz ceny mają charakter poglądowy i nie stanowią ostatecznej oferty handlowej, chyba że zostaną potwierdzone indywidualnie.',
        },
        {
          title: '12. Zmiany Regulaminu',
          text: 'Możemy aktualizować niniejszy Regulamin, jeśli zmieni się działanie strony, zakres usług, ceny lub wymagania prawne. Aktualna wersja będzie zawsze dostępna na tej stronie.',
        },
      ],
    },

    ua: {
      eyebrow: 'Правила послуг',
      title: 'Умови Використання',
      updated: 'Останнє оновлення: 2026',
      intro:
        'Ці Умови Використання описують правила користування сайтом El-Magic, звʼязку з нами та бронювання автомобільних послуг.',
      back: 'Повернутися на головну',
      sections: [
        {
          title: '1. Загальна інформація',
          text: 'Сайт належить El-Magic, вул. Sułowska 19A, Вроцлав, Польща. Ви можете звʼязатися з нами електронною поштою: ekimyans@gmail.com або телефоном: +48 577 472 788.',
        },
        {
          title: '2. Перелік послуг',
          text: 'El-Magic надає автомобільні послуги, зокрема компʼютерну діагностику, ремонт автоелектроніки, чип-тюнінг, встановлення Android-магнітол, модулів CarPlay / Android Auto, камер заднього виду, car audio, шумоізоляцію салону та інші повʼязані роботи з автомобілями.',
        },
        {
          title: '3. Запис на послугу',
          text: 'Записатися можна через контактну форму, телефон, e-mail або соціальні мережі. Після отримання заявки ми можемо звʼязатися з вами для підтвердження деталей, вибраної послуги, бажаної дати й часу, інформації про автомобіль та орієнтовного обсягу робіт.',
        },
        {
          title: '4. Ціни',
          text: 'Ціни на сайті є стартовими та позначені як “від”. Остаточна ціна може залежати від моделі автомобіля, технічного стану, потрібних деталей, складності монтажу та фінального обсягу робіт. Остаточна ціна підтверджується індивідуально перед виконанням послуги.',
        },
        {
          title: '5. Обовʼязки клієнта',
          text: 'Клієнт відповідає за надання правильних контактних даних, достовірної інформації про автомобіль та прибуття в узгоджений час. Клієнт має повідомити нас про відомі проблеми авто, попередні модифікації або ремонти, які можуть вплинути на виконання послуги.',
        },
        {
          title: '6. Час виконання послуги',
          text: 'Орієнтовний час виконання може відрізнятися залежно від автомобіля, виду послуги, технічного стану, наявності деталей та складності робіт. Ми завжди намагаємося виконувати послуги оперативно, однак деякі роботи можуть потребувати додаткового часу.',
        },
        {
          title: '7. Зміна або скасування запису',
          text: 'Якщо вам потрібно змінити або скасувати запис, звʼяжіться з нами якомога раніше. Ми залишаємо за собою право перенести запис у разі технічних причин, відсутності деталей, затримок або інших обставин, що не залежать від нас.',
        },
        {
          title: '8. Діагностика та результати',
          text: 'Результати діагностики базуються на доступних даних автомобіля, видимих симптомах та технічній перевірці. Деякі несправності можуть потребувати додаткової перевірки, тестування або ремонту, перш ніж буде можливо підтвердити остаточну причину проблеми.',
        },
        {
          title: '9. Чип-тюнінг та модифікації',
          text: 'Чип-тюнінг та модифікації автомобіля виконуються з урахуванням технічного стану авто та технічних можливостей. Остаточний результат може залежати від стану двигуна, версії програмного забезпечення, обладнання, попередніх модифікацій та історії обслуговування.',
        },
        {
          title: '10. Відповідальність',
          text: 'Ми виконуємо послуги уважно та професійно. Ми не несемо відповідальності за приховані дефекти, попередні неякісні ремонти, неавторизовані модифікації, зношені компоненти або несправності, які не були видимі до початку роботи.',
        },
        {
          title: '11. Інформація на сайті',
          text: 'Інформація на сайті має загальний інформаційний характер. Фото, описи та ціни є орієнтовними й не є остаточною комерційною пропозицією, якщо це не підтверджено індивідуально.',
        },
        {
          title: '12. Зміни Умов',
          text: 'Ми можемо оновлювати ці Умови Використання, якщо змінюється робота сайту, перелік послуг, ціни або правові вимоги. Актуальна версія завжди буде доступна на цій сторінці.',
        },
      ],
    },
  };

  const page = content[lang] ?? content.pl;

  return (
    <>
      <Navbar />

      <style>{`
        .terms-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }

        .terms-shell {
          position: relative;
          border: 1px solid rgba(255,255,255,0.1);
          background:
            radial-gradient(circle at 74% 0%, rgba(255,90,31,0.14), transparent 34%),
            linear-gradient(180deg, #050505 0%, #030303 100%);
          overflow: hidden;
        }

        .terms-shell::before {
          content: '';
          position: absolute;
          left: -140px;
          top: -140px;
          width: 360px;
          height: 360px;
          background: radial-gradient(circle, rgba(255,90,31,0.14), transparent 68%);
          pointer-events: none;
        }

        .terms-hero {
          position: relative;
          z-index: 2;
          padding: 120px 56px 64px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .terms-eyebrow {
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

        .terms-eyebrow::before {
          content: '';
          width: 42px;
          height: 1px;
          background: #ff5a1f;
        }

        .terms-title {
          max-width: 860px;
          margin: 0;
          color: #f5f5f5;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.94;
          font-weight: 400;
          letter-spacing: -0.06em;
        }

        .terms-updated {
          margin: 26px 0 0;
          color: rgba(255,255,255,0.52);
          font-size: 15px;
          line-height: 1.4;
        }

        .terms-intro {
          max-width: 760px;
          margin: 34px 0 0;
          color: rgba(255,255,255,0.76);
          font-size: 20px;
          line-height: 1.55;
          font-weight: 400;
        }

        .terms-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 280px minmax(0, 1fr);
          gap: 64px;
          padding: 64px 56px 76px;
        }

        .terms-side {
          position: sticky;
          top: 110px;
          align-self: start;
        }

        .terms-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }

        .terms-brand {
          color: #f4f4f4;
          font-size: 24px;
          line-height: 1;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .terms-side-text {
          margin: 0 0 28px;
          color: rgba(255,255,255,0.62);
          font-size: 15px;
          line-height: 1.58;
        }

        .terms-back {
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

        .terms-back:hover {
          background: #ff6229;
          transform: translateY(-1px);
        }

        .terms-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .terms-card {
          position: relative;
          padding: 30px 32px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.025);
          overflow: hidden;
        }

        .terms-card::before {
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

        .terms-card:hover::before {
          opacity: 1;
        }

        .terms-card-title {
          margin: 0 0 14px;
          color: #f4f4f4;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .terms-card-text {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: 16px;
          line-height: 1.68;
          font-weight: 400;
        }

        @media (max-width: 1024px) {
          .terms-hero {
            padding: 110px 34px 54px;
          }

          .terms-content {
            grid-template-columns: 1fr;
            gap: 42px;
            padding: 48px 34px 60px;
          }

          .terms-side {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 768px) {
          .terms-hero {
            padding: 108px 20px 44px;
          }

          .terms-title {
            font-size: 48px;
          }

          .terms-intro {
            font-size: 16px;
            line-height: 1.6;
          }

          .terms-content {
            padding: 34px 20px 46px;
          }

          .terms-card {
            padding: 24px 20px;
          }

          .terms-card-title {
            font-size: 20px;
          }

          .terms-card-text {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="relative min-h-screen bg-black pt-24 text-white">
        <div className="pointer-events-none absolute inset-0 z-0 md:hidden">
          <div
            className="terms-grid-line"
            style={{ left: '4%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
          <div
            className="terms-grid-line"
            style={{ left: '50%', backgroundColor: 'rgba(255,255,255,0.10)' }}
          />
          <div
            className="terms-grid-line"
            style={{ left: '96%', backgroundColor: 'rgba(255,255,255,0.12)' }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
          <div className="terms-grid-line left-[7.5%]" />
          <div className="terms-grid-line left-[28.5%]" />
          <div className="terms-grid-line left-1/2" />
          <div className="terms-grid-line right-[28.5%]" />
          <div className="terms-grid-line right-[7.5%]" />
        </div>

        <div className="relative z-[2] mx-auto max-w-[1280px] px-[4%] pb-24 md:px-10 lg:px-0">
          <div className="terms-shell">
            <section className="terms-hero">
              <div className="terms-eyebrow">{page.eyebrow}</div>
              <h1 className="terms-title">{page.title}</h1>
              <p className="terms-updated">{page.updated}</p>
              <p className="terms-intro">{page.intro}</p>
            </section>

            <section className="terms-content">
              <aside className="terms-side">
                <div className="terms-logo">
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
                  <span className="terms-brand">El-Magic</span>
                </div>

                <p className="terms-side-text">
                  Wrocław, Sułowska 19A
                  <br />
                  +48 577 472 788
                  <br />
                  ekimyans@gmail.com
                </p>

                <a href="/" className="terms-back">
                  {page.back}
                </a>
              </aside>

              <div className="terms-list">
                {page.sections.map((section) => (
                  <article key={section.title} className="terms-card">
                    <h2 className="terms-card-title">{section.title}</h2>
                    <p className="terms-card-text">{section.text}</p>
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

export default TermsOfService;