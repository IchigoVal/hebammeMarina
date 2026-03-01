// Simple i18n dictionary and helpers
const LANG_DEFAULT = 'de';
let currentLang = LANG_DEFAULT;

const dictionary = {
  de: {
    'brand.title': 'Hebamme Marina Rimmer',
    'meta.title': 'Hebamme Marina Rimmer, Sanfte Begleitung',
    'meta.description': 'Hebamme Marina Rimmer, Sanfte Begleitung in Schwangerschaft und Wochenbett in Ihrer Region. Hausbesuche, Stillberatung, Vorsorge und Nachsorge, Kurse.',
    'common.skip_to_content': 'Zum Inhalt springen',
    'common.home_aria': 'Startseite',
    'common.logo_alt': 'Logo',
    'common.language': 'Sprache',
    'common.hero_image_alt': 'Hebammenbild',
    'common.person_name': 'Marina Rimmer',
    'nav.home': 'Home',
    'nav.services': 'Leistungen',
    'nav.about': 'Über mich',
    'nav.reviews': 'Bewertungen',
    'nav.blog': 'Blog',
    'nav.contact': 'Kontakt',
    'nav.aria_label': 'Hauptnavigation',
    'nav.menu_open': 'Menü öffnen',
    'nav.menu_close': 'Menü schließen',
    'cta.call_now': 'Jetzt anrufen',

    'hero.title': 'Sanfte Begleitung in Schwangerschaft und Wochenbett',
    'hero.sub': 'Für eine sichere, geborgene Zeit rund um Geburt und Familie. Mit Herz, Ruhe und Erfahrung an Ihrer Seite.',
    'hero.cta_primary': 'Termin anfragen',
    'hero.cta_secondary': 'Leistungen ansehen',

    'features.house.title': 'Hausbesuche',
    'features.house.desc': 'Individuell bei dir zuhause.',
    'features.breast.title': 'Stillberatung',
    'features.breast.desc': 'Praktisch und empathisch.',
    'features.prenatal.title': 'Vorsorge und Nachsorge',
    'features.prenatal.desc': 'Sicher durch jede Phase.',
    'features.courses.title': 'Sprachen',
    'features.courses.desc': 'Deutsch und Russisch.',

    'services.title': 'Leistungen und Qualifikationen',
    'services.intro': 'Ich begleite dich vom positiven Test bis in den Familienalltag. In Ruhe, wertschätzend und fachlich fundiert, damit ihr euch sicher fühlt.',
    'services.qualifications': 'Qualifikationen',

    'about.title': 'Über mich',
    'about.text': 'Ich bin Marina, Hebamme aus Leidenschaft. In meiner Arbeit sind mir Ruhe, Zugewandtheit und klare Information wichtig, damit ihr euren eigenen Weg als Familie findet.',
    'about.chips_aria': 'Leistungsmerkmale',
    'about.chip_region': 'Nürnberg und Umgebung',
    'about.chip_home_visits': 'Hausbesuche',
    'about.chip_languages': 'Deutsch und Russisch',
    'about.chip_care': 'Vorsorge und Nachsorge',
    'about.short_profile': 'Kurzprofil',
    'about.role': 'Examinierte Hebamme',
    'about.fact_region': 'Region: Nürnberg und Umgebung',
    'about.fact_languages': 'Sprachen: Deutsch, Russisch',
    'about.fact_visits': 'Hausbesuche nach Vereinbarung',

    'testimonials.title': 'Stimmen von Familien',
    'reviews.open_maps': 'Auf Google Maps öffnen',
    'reviews.error_load': 'Bewertungen konnten gerade nicht geladen werden.',
    'reviews.retry': 'Erneut versuchen',
    'reviews.cached_notice': 'Bewertungen werden zwischengespeichert, um Ladezeit zu sparen.',
    'reviews.load': 'Bewertungen laden',

    'blog.title': 'Blog',
    'blog.teaser': 'Bald findest du hier Artikel rund um Schwangerschaft, Wochenbett und Familie.',

    'contact.title': 'Kontakt',
    'contact.intro': 'Schreib mir gerne oder ruf an. Ich melde mich schnellstmöglich zurück.',
    'contact.phone_label': 'Telefon:',
    'contact.email_label': 'E-Mail:',
    'contact.region_value': 'Region: Nürnberg und Umgebung',

    'form.title': 'Schreib mir eine Nachricht',
    'form.name': 'Name',
    'form.email': 'E-Mail',
    'form.message': 'Nachricht',
    'form.submit': 'Nachricht senden',
    'form.fineprint': 'Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß <a href="#">Datenschutzerklärung</a> zu.',

    'footer.contact': 'Kontakt',
    'footer.availability': 'Erreichbarkeit',
    'footer.availability_text': 'Hausbesuche nach Vereinbarung',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.rights': 'Alle Rechte vorbehalten.',

    'services.qual_1': 'Staatlich examinierte Hebamme (B.Sc.)',
    'services.qual_2': 'Zert. Still- und Laktationsberatung',
    'services.qual_3': 'Fortbildung: Wochenbett und Bindung',
    'services.qual_4': 'Erste-Hilfe am Säugling',
    'services.qual_5': 'Regelmäßige Supervision und QM',
    'services.group_pregnancy': 'Schwangerschaft',
    'services.group_postpartum': 'Wochenbett',
    'services.group_daily_life': 'Alltag mit Baby',
    'services.service_1': 'Vorsorgeuntersuchungen',
    'services.service_2': 'Geburtsvorbereitungskurse',
    'services.service_3': 'Nachsorge zuhause',
    'services.service_4': 'Still- und Ernährungsberatung',
    'services.service_5': 'Trageberatung und Babypflege',
    'services.service_6': 'Rückbildungskurse',
    'services.service_7': 'Beratung zu Elternthemen',
    'services.cta_note': 'Persönliche Rückmeldung nach Ihrer Anfrage.',

    'form.error_fill_all': 'Bitte alle Felder ausfüllen.',
    'form.success': 'Danke! Ich melde mich innerhalb von 24 bis 48 Stunden.'
  },
  ru: {
    'brand.title': 'Акушерка Марина Риммер',
    'meta.title': 'Акушерка Марина Риммер, бережное сопровождение',
    'meta.description': 'Акушерка Марина Риммер: бережное сопровождение во время беременности и в послеродовой период в вашем регионе. Выезды на дом, консультации по грудному вскармливанию, дородовое и послеродовое сопровождение, курсы.',
    'common.skip_to_content': 'Перейти к содержанию',
    'common.home_aria': 'Главная страница',
    'common.logo_alt': 'Логотип',
    'common.language': 'Язык',
    'common.hero_image_alt': 'Изображение акушерки',
    'common.person_name': 'Марина Риммер',
    'nav.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.about': 'Обо мне',
    'nav.reviews': 'Отзывы',
    'nav.blog': 'Блог',
    'nav.contact': 'Контакты',
    'nav.aria_label': 'Основная навигация',
    'nav.menu_open': 'Открыть меню',
    'nav.menu_close': 'Закрыть меню',
    'cta.call_now': 'Позвонить сейчас',

    'hero.title': 'Нежное сопровождение при беременности и в послеродовой период',
    'hero.sub': 'Для спокойного и уверенного времени до и после рождения ребенка. С сердцем, спокойствием и опытом рядом с вами.',
    'hero.cta_primary': 'Запросить встречу',
    'hero.cta_secondary': 'Посмотреть услуги',

    'features.house.title': 'Выезд на дом',
    'features.house.desc': 'Индивидуально у вас дома.',
    'features.breast.title': 'Консультация по грудному вскармливанию',
    'features.breast.desc': 'Практично и с эмпатией.',
    'features.prenatal.title': 'Дородовое и послеродовое сопровождение',
    'features.prenatal.desc': 'Уверенно на каждом этапе.',
    'features.courses.title': 'Языки',
    'features.courses.desc': 'Немецкий и русский.',

    'services.title': 'Услуги и квалификация',
    'services.intro': 'Я сопровождаю вас от положительного теста до семейной повседневной жизни. Спокойно, с уважением и профессионально — чтобы вы чувствовали себя уверенно.',
    'services.qualifications': 'Квалификация',

    'about.title': 'Обо мне',
    'about.text': 'Я Марина — акушерка по призванию. В своей работе я ценю спокойствие, внимание и понятную информацию, чтобы вы нашли свой собственный путь как семья.',
    'about.chips_aria': 'Ключевые преимущества',
    'about.chip_region': 'Нюрнберг и окрестности',
    'about.chip_home_visits': 'Выезды на дом',
    'about.chip_languages': 'Немецкий и русский',
    'about.chip_care': 'Дородовое и послеродовое сопровождение',
    'about.short_profile': 'Кратко',
    'about.role': 'Дипломированная акушерка',
    'about.fact_region': 'Регион: Нюрнберг и окрестности',
    'about.fact_languages': 'Языки: немецкий, русский',
    'about.fact_visits': 'Выезды на дом по договоренности',

    'testimonials.title': 'Отзывы семей',
    'reviews.open_maps': 'Открыть в Google Maps',
    'reviews.error_load': 'Сейчас не удалось загрузить отзывы.',
    'reviews.retry': 'Попробовать снова',
    'reviews.cached_notice': 'Отзывы кешируются, чтобы сократить время загрузки.',
    'reviews.load': 'Загрузить отзывы',

    'blog.title': 'Блог',
    'blog.teaser': 'Скоро здесь появятся статьи о беременности, послеродовом периоде и семье.',

    'contact.title': 'Контакты',
    'contact.intro': 'Пишите или звоните. Я отвечу как можно скорее.',
    'contact.phone_label': 'Телефон:',
    'contact.email_label': 'E-mail:',
    'contact.region_value': 'Регион: Нюрнберг и окрестности',

    'form.title': 'Напишите мне сообщение',
    'form.name': 'Имя',
    'form.email': 'E-mail',
    'form.message': 'Сообщение',
    'form.submit': 'Отправить сообщение',
    'form.fineprint': 'Отправляя сообщение, вы соглашаетесь на обработку ваших данных согласно <a href="#">политике конфиденциальности</a>.',

    'footer.contact': 'Контакты',
    'footer.availability': 'График работы',
    'footer.availability_text': 'Выезды на дом по договоренности',
    'footer.legal': 'Юридическая информация',
    'footer.imprint': 'Импрессум',
    'footer.privacy': 'Конфиденциальность',
    'footer.rights': 'Все права защищены.',

    'services.qual_1': 'Государственный диплом акушерки (B.Sc.)',
    'services.qual_2': 'Сертифицированная консультация по лактации и грудному вскармливанию',
    'services.qual_3': 'Повышение квалификации: послеродовой период и привязанность',
    'services.qual_4': 'Первая помощь младенцам',
    'services.qual_5': 'Регулярная супервизия и контроль качества',
    'services.group_pregnancy': 'Беременность',
    'services.group_postpartum': 'Послеродовой период',
    'services.group_daily_life': 'Жизнь с малышом',
    'services.service_1': 'Дородовые осмотры',
    'services.service_2': 'Курсы подготовки к родам',
    'services.service_3': 'Послеродовое сопровождение на дому',
    'services.service_4': 'Консультации по грудному вскармливанию и питанию',
    'services.service_5': 'Консультации по ношению и уходу за ребенком',
    'services.service_6': 'Курсы восстановления после родов',
    'services.service_7': 'Консультации по вопросам родительства',
    'services.cta_note': 'Личный ответ после вашего запроса.',

    'form.error_fill_all': 'Пожалуйста, заполните все поля.',
    'form.success': 'Спасибо! Я свяжусь с вами в течение 24–48 часов.'
  }
};

function t(key) {
  const langDict = dictionary[currentLang] || {};
  const deDict = dictionary[LANG_DEFAULT] || {};
  return (key in langDict ? langDict[key] : (key in deDict ? deDict[key] : key));
}

function applyTranslations(root = document) {
  const els = root.querySelectorAll('[data-i18n]');
  els.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const mode = el.getAttribute('data-i18n-mode') || 'text';
    const value = t(key);
    if (mode === 'html') {
      el.innerHTML = value;
    } else if (mode.startsWith('attr:')) {
      el.setAttribute(mode.slice(5), value);
    } else {
      el.textContent = value;
    }
  });
}

function setLanguage(lang) {
  currentLang = dictionary[lang] ? lang : LANG_DEFAULT;
  // Update lang attribute (de/ru)
  document.documentElement.setAttribute('lang', currentLang === 'ru' ? 'ru' : 'de');
  applyTranslations();
}

export { dictionary, t, setLanguage };
