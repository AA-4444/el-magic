export type Lang = 'en' | 'pl' | 'ua';
type DeepString<T> = { [K in keyof T]: T[K] extends string ? string : T[K] extends readonly any[] ? any[] : DeepString<T[K]> };

export const translations = {
  en: {
    nav: { about: 'About', services: 'Services', contact: 'Contact', pricing: 'Pricing', blog: 'Blog' },
    hero: {
      title1: 'Your Car Deserves',
      title2: 'Expert Care',
      desc: 'From quick washes to full diagnostics, we bring precision, care, and convenience together. Trusted by 10,000+ satisfied customers.',
      cta1: 'Book A Service',
      cta2: 'View Packages',
    },
    stats: {
      s1: { val: '10,000+', label: 'Happy Customers', desc: 'From quick washes to full diagnostics, we bring precision, care, and convenience together.' },
      s2: { val: '15+', label: 'Years Experience', desc: 'Trusted automotive expertise built over years of dedicated service.' },
      s3: { val: '24/7', label: 'Support Available', desc: 'Dedicated customer support for every service request.' },
    },
    services: {
      title: 'Our Services',
      items: [
        { name: 'Car Wash & Detailing', desc: 'From quick washes to full diagnostics, we bring precision, care, and convenience together.' },
        { name: 'Oil Change & Maintenance', desc: 'Smooth performance starts with clean oil and proper care.' },
        { name: 'Engine Diagnostics', desc: 'Advanced computer diagnostics to identify and resolve engine issues.' },
        { name: 'Tire & Brake Service', desc: 'Keep your vehicle safe with professional tire and brake maintenance.' },
        { name: 'AC Repair', desc: 'Stay cool with our expert air conditioning repair and maintenance.' },
        { name: 'Car Polishing & Waxing', desc: 'Restore your car\'s showroom shine with professional detailing.' },
      ],
      whatWeDo: 'What We Do',
      viewDetails: 'View Details',
    },
    whyUs: {
      title: 'Why Choose Us',
      items: [
        { title: 'Certified Technicians', desc: 'ASE-certified professionals with years of experience.' },
        { title: 'Same-Day Service', desc: 'Most repairs completed within hours, not days.' },
        { title: 'Affordable Pricing', desc: 'Transparent rates with no hidden fees.' },
        { title: 'Trusted by 10,000+', desc: 'Join thousands of satisfied customers.' },
      ],
    },
    pricing: {
      title: 'Transparent Pricing',
      desc: 'Choose from individual services, bundled packages, or membership plans. No hidden fees, just honest pricing.',
      cta: 'See Pricing Details',
      plans: [
        {
          name: 'Essential Care', price: '$89', oldPrice: '$117', desc: 'Perfect for regular maintenance',
          features: ['Exterior Hand Wash', 'Interior Vacuum', 'Tire Shine & Dressing', 'Window Cleaning (inside & out)', 'Basic Vehicle Inspection', 'Tire Pressure Check', 'Dashboard dust wipe', 'Basic safety overview'],
          cta: 'Book Essential Care',
        },
        {
          name: 'Complete Care', price: '$199', oldPrice: '$277', desc: 'Perfect for regular maintenance', popular: true,
          features: ['Everything in Essential Care', 'Synthetic Oil Change', 'Interior Deep Cleaning', 'Engine Bay Cleaning', 'Premium Wax & Polish', 'Headlight Restoration', 'Air Filter Inspection', '21-Point Safety Inspection'],
          cta: 'Book Complete Care',
        },
        {
          name: 'Premium Care', price: '$399', oldPrice: '$576', desc: 'Perfect for regular maintenance',
          features: ['Everything in Complete Care', 'Paint Correction (2-stage)', 'Ceramic Coating Application', 'Leather Conditioning & Protection', 'Engine Diagnostics Scan', 'Tire Pressure Check', 'Brake System Inspection', 'AC Performance Check'],
          cta: 'Book Premium Care',
        },
      ],
    },
    testimonials: {
      title: 'Loved by Drivers Across the City',
      desc: "Don't just take our word for it — hear what our customers have to say.",
    },
    about: {
      title1: 'Passion for Cars.',
      title2: 'Dedication to Service.',
      desc1: 'Founded in 2010, AutoCare Pro has been the trusted choice for car owners who demand excellence. What started as a small family workshop has grown into the city\'s premier automotive care center.',
      desc2: 'Our team of ASE-certified technicians brings decades of combined experience and a genuine passion for automotive care. We treat every vehicle as if it were our own, using only premium products and state-of-the-art equipment.',
      cta: 'Learn More About Us',
    },
    blog: {
      title: 'Car Care Tips & Insights',
      desc: 'Stay informed with expert advice, maintenance tips, and industry news.',
    },
    cta: {
      title: 'Ready to Give Your Car the Care It Deserves?',
      desc: 'Schedule a wash or repair in minutes — our experts are here 7 days a week to keep your car running perfectly.',
      bookNow: 'Book Now',
      phone: '(555) 123-4567',
    },
    form: {
      title: 'Quick Booking',
      name: 'Name',
      phone: 'Phone',
      services: 'Select Services',
      packages: 'Care Packages',
      message: 'Message',
      namePlaceholder: 'Your Name',
      phonePlaceholder: '+880 123 456',
      messagePlaceholder: 'Write your message here...',
      select: 'Select...',
      submit: 'Book Now',
    },
  },
  pl: {
    nav: { about: 'O nas', services: 'Usługi', contact: 'Kontakt', pricing: 'Cennik', blog: 'Blog' },
    hero: {
      title1: 'Twój Samochód Zasługuje',
      title2: 'Na Profesjonalną Opiekę',
      desc: 'Od szybkiego mycia po pełną diagnostykę — łączymy precyzję, troskę i wygodę. Zaufało nam ponad 10 000 klientów.',
      cta1: 'Umów Wizytę',
      cta2: 'Zobacz Pakiety',
    },
    stats: {
      s1: { val: '10 000+', label: 'Zadowolonych Klientów', desc: 'Od szybkiego mycia po pełną diagnostykę — łączymy precyzję, troskę i wygodę.' },
      s2: { val: '15+', label: 'Lat Doświadczenia', desc: 'Zaufana wiedza motoryzacyjna budowana latami.' },
      s3: { val: '24/7', label: 'Wsparcie Dostępne', desc: 'Dedykowana obsługa klienta przy każdym zleceniu.' },
    },
    services: {
      title: 'Nasze Usługi',
      items: [
        { name: 'Mycie i Detailing', desc: 'Od szybkiego mycia po pełną diagnostykę — łączymy precyzję, troskę i wygodę.' },
        { name: 'Wymiana Oleju i Serwis', desc: 'Płynna praca silnika zaczyna się od czystego oleju.' },
        { name: 'Diagnostyka Silnika', desc: 'Zaawansowana diagnostyka komputerowa do identyfikacji problemów.' },
        { name: 'Opony i Hamulce', desc: 'Zadbaj o bezpieczeństwo dzięki profesjonalnej obsłudze opon i hamulców.' },
        { name: 'Naprawa Klimatyzacji', desc: 'Zachowaj komfort dzięki naszej eksperckiej naprawie klimatyzacji.' },
        { name: 'Polerowanie i Woskowanie', desc: 'Przywróć blask swojemu samochodowi dzięki profesjonalnemu detailingowi.' },
      ],
      whatWeDo: 'Co Robimy',
      viewDetails: 'Zobacz Szczegóły',
    },
    whyUs: {
      title: 'Dlaczego My',
      items: [
        { title: 'Certyfikowani Technicy', desc: 'Profesjonaliści z certyfikatem ASE i wieloletnim doświadczeniem.' },
        { title: 'Serwis Tego Samego Dnia', desc: 'Większość napraw wykonujemy w godzinach, nie dniach.' },
        { title: 'Przystępne Ceny', desc: 'Przejrzyste stawki bez ukrytych opłat.' },
        { title: 'Zaufało Nam 10 000+', desc: 'Dołącz do tysięcy zadowolonych klientów.' },
      ],
    },
    pricing: {
      title: 'Przejrzyste Ceny',
      desc: 'Wybierz spośród pojedynczych usług, pakietów lub planów członkowskich. Bez ukrytych opłat.',
      cta: 'Zobacz Szczegóły Cennika',
      plans: [
        {
          name: 'Essential Care', price: '$89', oldPrice: '$117', desc: 'Idealny do regularnej konserwacji',
          features: ['Ręczne mycie zewnętrzne', 'Odkurzanie wnętrza', 'Nabłyszczanie opon', 'Mycie szyb', 'Podstawowa inspekcja', 'Sprawdzenie ciśnienia opon', 'Wycieranie deski rozdzielczej', 'Przegląd bezpieczeństwa'],
          cta: 'Zamów Essential Care',
        },
        {
          name: 'Complete Care', price: '$199', oldPrice: '$277', desc: 'Idealny do regularnej konserwacji', popular: true,
          features: ['Wszystko z Essential Care', 'Wymiana oleju syntetycznego', 'Głębokie czyszczenie wnętrza', 'Czyszczenie komory silnika', 'Premium woskowanie', 'Regeneracja reflektorów', 'Inspekcja filtra powietrza', '21-punktowa inspekcja'],
          cta: 'Zamów Complete Care',
        },
        {
          name: 'Premium Care', price: '$399', oldPrice: '$576', desc: 'Idealny do regularnej konserwacji',
          features: ['Wszystko z Complete Care', 'Korekta lakieru (2-etapowa)', 'Powłoka ceramiczna', 'Pielęgnacja skóry', 'Diagnostyka silnika', 'Sprawdzenie ciśnienia opon', 'Inspekcja hamulców', 'Sprawdzenie klimatyzacji'],
          cta: 'Zamów Premium Care',
        },
      ],
    },
    testimonials: {
      title: 'Kochany Przez Kierowców w Całym Mieście',
      desc: 'Nie wierz nam na słowo — posłuchaj, co mówią nasi klienci.',
    },
    about: {
      title1: 'Pasja do Samochodów.',
      title2: 'Oddanie Usługom.',
      desc1: 'Założona w 2010 roku, AutoCare Pro jest zaufanym wyborem właścicieli samochodów, którzy wymagają doskonałości.',
      desc2: 'Nasz zespół certyfikowanych techników ASE wnosi dekady doświadczenia i prawdziwą pasję do motoryzacji.',
      cta: 'Dowiedz Się Więcej',
    },
    blog: {
      title: 'Porady i Wskazówki',
      desc: 'Bądź na bieżąco z poradami ekspertów i nowinkami z branży.',
    },
    cta: {
      title: 'Gotowy Zadbać o Swój Samochód?',
      desc: 'Umów mycie lub naprawę w kilka minut — nasi eksperci są dostępni 7 dni w tygodniu.',
      bookNow: 'Umów Teraz',
      phone: '(555) 123-4567',
    },
    form: {
      title: 'Szybka Rezerwacja',
      name: 'Imię',
      phone: 'Telefon',
      services: 'Wybierz Usługi',
      packages: 'Pakiety',
      message: 'Wiadomość',
      namePlaceholder: 'Twoje Imię',
      phonePlaceholder: '+48 123 456 789',
      messagePlaceholder: 'Napisz swoją wiadomość...',
      select: 'Wybierz...',
      submit: 'Zarezerwuj',
    },
  },
  ua: {
    nav: { about: 'Про нас', services: 'Послуги', contact: 'Контакт', pricing: 'Ціни', blog: 'Блог' },
    hero: {
      title1: 'Ваш Автомобіль Заслуговує',
      title2: 'Експертного Догляду',
      desc: 'Від швидкого миття до повної діагностики — ми поєднуємо точність, турботу та зручність. Нам довіряють понад 10 000 клієнтів.',
      cta1: 'Записатися',
      cta2: 'Переглянути Пакети',
    },
    stats: {
      s1: { val: '10 000+', label: 'Задоволених Клієнтів', desc: 'Від швидкого миття до повної діагностики — ми поєднуємо точність, турботу та зручність.' },
      s2: { val: '15+', label: 'Років Досвіду', desc: 'Перевірена автомобільна експертиза, побудована роками.' },
      s3: { val: '24/7', label: 'Підтримка Доступна', desc: 'Виділена підтримка клієнтів для кожного запиту.' },
    },
    services: {
      title: 'Наші Послуги',
      items: [
        { name: 'Миття та Детейлінг', desc: 'Від швидкого миття до повної діагностики — ми поєднуємо точність, турботу та зручність.' },
        { name: 'Заміна Масла та Обслуговування', desc: 'Плавна робота починається з чистого масла та належного догляду.' },
        { name: 'Діагностика Двигуна', desc: 'Комп\'ютерна діагностика для виявлення та усунення проблем двигуна.' },
        { name: 'Шини та Гальма', desc: 'Забезпечте безпеку завдяки професійному обслуговуванню шин та гальм.' },
        { name: 'Ремонт Кондиціонера', desc: 'Залишайтеся в комфорті з нашим експертним ремонтом кондиціонера.' },
        { name: 'Полірування та Вощіння', desc: 'Поверніть блиск вашому автомобілю з професійним детейлінгом.' },
      ],
      whatWeDo: 'Що Ми Робимо',
      viewDetails: 'Детальніше',
    },
    whyUs: {
      title: 'Чому Обирають Нас',
      items: [
        { title: 'Сертифіковані Техніки', desc: 'Професіонали з сертифікатом ASE та багаторічним досвідом.' },
        { title: 'Сервіс Того Ж Дня', desc: 'Більшість ремонтів виконуються за години, а не дні.' },
        { title: 'Доступні Ціни', desc: 'Прозорі ціни без прихованих платежів.' },
        { title: 'Довіряють 10 000+', desc: 'Приєднуйтесь до тисяч задоволених клієнтів.' },
      ],
    },
    pricing: {
      title: 'Прозорі Ціни',
      desc: 'Оберіть з окремих послуг, пакетів або планів. Без прихованих платежів.',
      cta: 'Деталі Цін',
      plans: [
        {
          name: 'Essential Care', price: '$89', oldPrice: '$117', desc: 'Ідеально для регулярного обслуговування',
          features: ['Ручне зовнішнє миття', 'Пилососіння салону', 'Блиск шин', 'Миття вікон', 'Базова інспекція', 'Перевірка тиску шин', 'Протирання панелі', 'Огляд безпеки'],
          cta: 'Замовити Essential Care',
        },
        {
          name: 'Complete Care', price: '$199', oldPrice: '$277', desc: 'Ідеально для регулярного обслуговування', popular: true,
          features: ['Все з Essential Care', 'Заміна синтетичного масла', 'Глибоке чищення салону', 'Чищення моторного відсіку', 'Преміум вощіння', 'Відновлення фар', 'Інспекція фільтра', '21-точкова інспекція'],
          cta: 'Замовити Complete Care',
        },
        {
          name: 'Premium Care', price: '$399', oldPrice: '$576', desc: 'Ідеально для регулярного обслуговування',
          features: ['Все з Complete Care', 'Корекція лаку (2 етапи)', 'Керамічне покриття', 'Догляд за шкірою', 'Діагностика двигуна', 'Перевірка тиску шин', 'Інспекція гальм', 'Перевірка кондиціонера'],
          cta: 'Замовити Premium Care',
        },
      ],
    },
    testimonials: {
      title: 'Улюблений Водіями по Всьому Місту',
      desc: 'Не вірте нам на слово — послухайте наших клієнтів.',
    },
    about: {
      title1: 'Пристрасть до Авто.',
      title2: 'Відданість Сервісу.',
      desc1: 'Заснована у 2010 році, AutoCare Pro є надійним вибором для власників авто, які вимагають найкращого.',
      desc2: 'Наша команда сертифікованих техніків ASE має десятиліття досвіду та справжню пристрасть до автомобілів.',
      cta: 'Дізнатися Більше',
    },
    blog: {
      title: 'Поради та Інсайти',
      desc: 'Будьте в курсі з порадами експертів та новинами галузі.',
    },
    cta: {
      title: 'Готові Подбати про Ваш Автомобіль?',
      desc: 'Запишіться на миття або ремонт за кілька хвилин — наші експерти працюють 7 днів на тиждень.',
      bookNow: 'Записатися',
      phone: '(555) 123-4567',
    },
    form: {
      title: 'Швидке Бронювання',
      name: "Ім'я",
      phone: 'Телефон',
      services: 'Оберіть Послуги',
      packages: 'Пакети',
      message: 'Повідомлення',
      namePlaceholder: "Ваше ім'я",
      phonePlaceholder: '+380 123 456 789',
      messagePlaceholder: 'Напишіть ваше повідомлення...',
      select: 'Оберіть...',
      submit: 'Записатися',
    },
  },
} as const;

export type Translations = typeof translations.en;
