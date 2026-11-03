import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import SEO from '../components/SEO'
import { useI18n } from '../i18n'

const TELEGRAM_LOGIN = 'deepinsideofnowhere'
const TON_ADDRESS = 'UQBVd1a19UzAzTnD7OoNZpW9TdLy7vFJmmgxe0tFpaeIBHp9'
const TRC20_ADDRESS = 'TEfjbdDdcrwDeKUCjiQ2sUgjtio8xpihkJ'

const TABS = ['username', 'ton', 'trc20']

export default function Donate() {
  const { t } = useI18n()
  const [tab, setTab] = useState('username')

  return (
    <section className="mx-auto max-w-xl px-4 py-12 sm:px-6 md:py-20">
      <SEO title={t.donate.title} description={t.donate.intro} />
      <h1 className="font-display text-4xl font-bold text-balance sm:text-5xl">{t.donate.title}</h1>
      <p className="mt-4 text-neutral-400">{t.donate.intro}</p>

      <div className="mt-10 rounded-2xl border border-line bg-surface p-5 sm:p-8">
        <div role="tablist" aria-label={t.donate.tabsLabel} className="flex gap-1 rounded-xl bg-ink p-1">
          {TABS.map((id) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              aria-controls={`tab-${id}`}
              onClick={() => setTab(id)}
              className="flex-1 rounded-lg px-2 py-2.5 text-xs font-semibold text-neutral-400 transition hover:text-white aria-selected:bg-accent aria-selected:text-white sm:text-sm"
            >
              {t.donate.tabs[id]}
            </button>
          ))}
        </div>

        {tab === 'username' && (
          <div id="tab-username" role="tabpanel" className="mt-6 space-y-5">
            <p className="text-sm leading-relaxed text-neutral-300">{t.donate.usernameInfo}</p>
            <div className="rounded-xl border border-dashed border-line bg-ink p-4 text-center">
              <span className="text-xl font-bold text-white">@{TELEGRAM_LOGIN}</span>
            </div>
            <a
              href={`https://t.me/${TELEGRAM_LOGIN}`}
              target="_blank"
              rel="noopener"
              className="block w-full rounded-full bg-accent py-3.5 text-center font-medium text-white transition hover:bg-accent-dark"
            >
              {t.donate.openChat}
            </a>
            <p className="rounded-xl bg-emerald-500/10 p-4 text-sm leading-relaxed text-emerald-300">{t.donate.usernameHint}</p>
          </div>
        )}

        {tab === 'ton' && (
          <WalletPanel id="tab-ton" network="TON" address={TON_ADDRESS}>
            {t.donate.tonWarning}
          </WalletPanel>
        )}

        {tab === 'trc20' && (
          <WalletPanel id="tab-trc20" network="TRC-20" address={TRC20_ADDRESS}>
            {t.donate.trc20Warning}
          </WalletPanel>
        )}
      </div>
    </section>
  )
}

function WalletPanel({ id, network, address, children }) {
  const { t } = useI18n()
  const [qr, setQr] = useState('')
  const [copyState, setCopyState] = useState('idle') // idle | copied | selected

  useEffect(() => {
    QRCode.toDataURL(address, { width: 360, margin: 1 }).then(setQr)
  }, [address])

  useEffect(() => {
    if (copyState === 'idle') return
    const timer = setTimeout(() => setCopyState('idle'), 2000)
    return () => clearTimeout(timer)
  }, [copyState])

  const copy = async (e) => {
    try {
      await navigator.clipboard.writeText(address)
      setCopyState('copied')
    } catch {
      e.currentTarget.previousElementSibling?.select()
      setCopyState('selected')
    }
  }

  return (
    <div id={id} role="tabpanel" className="mt-6 space-y-5">
      <div className="flex h-45 justify-center">
        {qr && (
          <img src={qr} alt={t.donate.qrAlt(network)} width="180" height="180" className="size-45 rounded-xl bg-white p-2" />
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={address}
          readOnly
          aria-label={t.donate.addressLabel(network)}
          className="min-w-0 flex-1 rounded-xl border border-line bg-ink px-4 py-3 font-mono text-sm text-neutral-200 focus:border-accent focus:outline-none"
        />
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-xl bg-neutral-700 px-4 text-sm font-medium text-white transition hover:bg-neutral-600"
        >
          {{ idle: t.donate.copy, copied: t.donate.copied, selected: t.donate.selected }[copyState]}
        </button>
      </div>
      <p className="rounded-xl bg-red-500/10 p-4 text-sm leading-relaxed text-red-300">{children}</p>
    </div>
  )
}
