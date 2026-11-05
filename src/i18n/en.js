const plural = new Intl.PluralRules('en')

export default {
  locale: 'en-US',
  langName: 'English',

  nav: {
    home: 'Home',
    about: 'About the author',
    car: 'About the car',
    support: 'Donate',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },

  seo: {
    title: 'Mitsubishi Outlander PHEV Blog (GG2W, GG3W): DIY Retrofits, Electrics and Multimedia',
    description: 'Owner’s blog about the Mitsubishi Outlander PHEV (Outlander 3, GG2W/GG3W, 2012–2022): retrofitting blind spot warning and surround view, Mitsubishi Connect, ETACS coding, wiring diagrams and DIY repairs.',
  },

  footer: {
    tagline: 'A personal owner’s blog. Not affiliated with Mitsubishi Motors.',
    support: 'Support the blog',
  },

  cookies: {
    title: 'Cookies and analytics',
    text: 'I use Google Analytics to see which posts people read. It sets cookies and sends visit data to Google: pages viewed, device, browser and approximate location. Nothing is collected without your consent.',
    accept: 'Accept',
    decline: 'Decline',
    settings: 'Cookie settings',
  },

  hero: {
    toPosts: 'To posts',
  },

  home: {
    latest: 'Latest posts',
    count: (n) => `${n} ${plural.select(n) === 'one' ? 'post' : 'posts'}`,
  },

  categories: {
    electrics: 'Electrics',
    multimedia: 'Multimedia',
    suspension: 'Suspension',
  },

  post: {
    readTime: (n) => `${n} min read`,
    read: 'Read →',
    back: '← All posts',
    notTranslated: 'This article hasn’t been translated into English yet, so you’re reading the Russian original.',
    originalLink: 'Open the Russian version →',
    supportTitle: 'Enjoyed the article?',
    supportText: 'Support the blog — it helps publish new material.',
    related: 'More posts',
  },

  lightbox: {
    photo: 'Photo',
    enlarge: (caption) => (caption ? `Enlarge photo: ${caption}` : 'Enlarge photo'),
    close: 'Close',
    prev: 'Previous photo',
    next: 'Next photo',
  },

  about: {
    title: 'About the author',
    placeholder: 'CV coming soon.',
  },

  notFound: {
    title: 'Page not found',
    home: 'Back to home',
  },

  donate: {
    title: 'Support the project in USDT',
    intro:
      'The blog has no ads. If you found the posts useful, you can chip in for parts, experiments and new articles. ' +
      'Choose a convenient way to send via Telegram Walt (ex. Wallet).',
    tabsLabel: 'Payment method',
    tabs: { username: 'By Telegram username', ton: 'TON network', trc20: 'TRC-20 network' },
    usernameInfo: 'The easiest way, with no network fees. Open the chat and send USDT via the attachment/wallet menu.',
    openChat: 'Open chat in Telegram',
    usernameHint: '💡 In the chat, tap the paperclip (or “+”) → choose “Wallet” → “Send” → enter the amount in USDT.',
    tonWarning: '⚠️ Send only USDT on the TON network. In Wallet this wallet is active by default.',
    trc20Warning: '⚠️ Send only USDT on the TRON network (TRC-20).',
    qrAlt: (network) => `QR code of the USDT address on ${network}`,
    addressLabel: (network) => `USDT address on ${network}`,
    copy: 'Copy',
    copied: 'Copied',
    selected: 'Selected',
  },
}
