const plural = new Intl.PluralRules('ru')

export default {
  locale: 'ru-RU',
  langName: 'Русский',

  nav: {
    home: 'Главная',
    about: 'Об авторе',
    car: 'Об автомобиле',
    support: 'Поддержать',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    language: 'Язык',
  },

  seo: {
    title: 'Блог о Mitsubishi Outlander PHEV: доработки, электрика и мультимедиа',
    description: 'Личный блог владельца Mitsubishi Outlander PHEV (GG2W): установка контроля слепых зон и кругового обзора, Mitsubishi Connect, кодинг ETACS, схемы проводки и ремонт своими руками.',
  },

  footer: {
    tagline: 'Личный блог владельца. Не связан с Mitsubishi Motors.',
    support: 'Поддержать блог',
  },

  cookies: {
    title: 'Cookies и статистика',
    text: 'Я использую Google Analytics, чтобы понимать, какие статьи читают. Он сохраняет cookies и передаёт в Google данные о посещении: какие страницы открыты, устройство, браузер и примерное местоположение. Без вашего согласия ничего не собирается.',
    accept: 'Принять',
    decline: 'Отклонить',
    settings: 'Настройки cookies',
  },

  hero: {
    toPosts: 'К записям',
  },

  home: {
    latest: 'Последние записи',
    count: (n) => `${n} ${{ one: 'пост', few: 'поста', many: 'постов' }[plural.select(n)] ?? 'поста'}`,
  },

  categories: {
    electrics: 'Электрика',
    multimedia: 'Мультимедиа',
    suspension: 'Подвеска',
  },

  post: {
    readTime: (n) => `${n} мин чтения`,
    read: 'Читать →',
    back: '← Все записи',
    notTranslated: '',
    originalLink: '',
    supportTitle: 'Понравилась статья?',
    supportText: 'Поддержите блог — это помогает выпускать новые материалы.',
    related: 'Читайте также',
  },

  lightbox: {
    photo: 'Фотография',
    enlarge: (caption) => (caption ? `Увеличить фото: ${caption}` : 'Увеличить фото'),
    close: 'Закрыть',
    prev: 'Предыдущее фото',
    next: 'Следующее фото',
  },

  about: {
    title: 'Об авторе',
    placeholder: 'Здесь скоро появится CV.',
  },

  notFound: {
    title: 'Страница не найдена',
    home: 'На главную',
  },

  donate: {
    title: 'Поддержать проект в USDT',
    intro:
      'Блог существует без рекламы. Если материалы оказались полезны — можно помочь на запчасти, эксперименты и новые статьи. ' +
      'Выберите удобный способ отправки через Telegram Walt (ex. Wallet).',
    tabsLabel: 'Способ перевода',
    tabs: { username: 'По логину Telegram', ton: 'Сеть TON', trc20: 'Сеть TRC-20' },
    usernameInfo: 'Самый простой способ без комиссий сети. Перейдите в чат и отправьте USDT через скрепку/меню кошелька.',
    openChat: 'Открыть чат в Telegram',
    usernameHint: '💡 В чате нажмите на «скрепку» (или кнопку «+») → выберите «Кошелёк» → «Отправить» → укажите сумму в USDT.',
    tonWarning: '⚠️ Отправляйте только USDT в сети TON. В Wallet этот кошелёк активен по умолчанию.',
    trc20Warning: '⚠️ Отправляйте только USDT в сети TRON (TRC-20).',
    qrAlt: (network) => `QR-код адреса USDT в сети ${network}`,
    addressLabel: (network) => `Адрес USDT в сети ${network}`,
    copy: 'Копировать',
    copied: 'Скопировано',
    selected: 'Выделено',
  },
}
