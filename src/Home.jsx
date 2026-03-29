import { Link } from 'react-router-dom'
import { useLang } from './i18n/LangContext'
import styles from './App.module.css'

const featureKeys = [
  { icon: '📊', key: 'dashboard' },
  { icon: '📷', key: 'scanner' },
  { icon: '💳', key: 'expenses' },
  { icon: '💰', key: 'income' },
  { icon: '🌍', key: 'currency' },
  { icon: '🔒', key: 'security' },
]

const featureData = {
  en: [
    { title: 'Smart Dashboard', description: 'Get a clear overview of your income and expenses with beautiful charts and summaries.' },
    { title: 'Receipt Scanner', description: 'Snap a photo of any receipt and let AI extract the details automatically.' },
    { title: 'Track Expenses', description: 'Categorize and manage every expense with ease, from coffee to rent.' },
    { title: 'Income Tracking', description: 'Log all your income sources and watch your financial picture come together.' },
    { title: 'Multi-Currency', description: 'Support for multiple currencies and locales — finance without borders.' },
    { title: 'Secure & Private', description: 'Your financial data is encrypted and stored securely. Always.' },
  ],
  es: [
    { title: 'Dashboard Inteligente', description: 'Obtén una vista clara de tus ingresos y gastos con hermosos gráficos y resúmenes.' },
    { title: 'Escáner de Recibos', description: 'Toma una foto de cualquier recibo y deja que la IA extraiga los detalles automáticamente.' },
    { title: 'Seguimiento de Gastos', description: 'Categoriza y gestiona cada gasto fácilmente, desde el café hasta el alquiler.' },
    { title: 'Seguimiento de Ingresos', description: 'Registra todas tus fuentes de ingresos y observa cómo se forma tu panorama financiero.' },
    { title: 'Multi-Moneda', description: 'Soporte para múltiples monedas y configuraciones regionales — finanzas sin fronteras.' },
    { title: 'Seguro y Privado', description: 'Tus datos financieros están cifrados y almacenados de forma segura. Siempre.' },
  ],
}

const stepsData = {
  en: [
    { n: '01', title: 'Create your account', desc: 'Sign up for free in seconds with just your email.' },
    { n: '02', title: 'Add transactions', desc: 'Log expenses and income manually or scan a receipt with your camera.' },
    { n: '03', title: 'Visualize & plan', desc: 'See where your money goes and make smarter financial decisions.' },
  ],
  es: [
    { n: '01', title: 'Crea tu cuenta', desc: 'Regístrate gratis en segundos con solo tu correo electrónico.' },
    { n: '02', title: 'Agrega transacciones', desc: 'Registra gastos e ingresos manualmente o escanea un recibo con tu cámara.' },
    { n: '03', title: 'Visualiza y planifica', desc: 'Ve a dónde va tu dinero y toma decisiones financieras más inteligentes.' },
  ],
}

const heroText = {
  en: {
    badge: 'Personal Finance, Simplified',
    title: <>Take control of your <span className={styles.accent}>finances</span></>,
    subtitle: 'Track expenses, scan receipts with AI, and visualize your spending — all in one elegant app.',
    download: 'Download Free',
    seeFeatures: 'See Features',
    users: 'Users', rating: 'Rating', free: 'Free', forever: 'Forever',
    featBadge: 'Features', featTitle: 'Everything you need to manage money',
    featSubtitle: 'Powerful tools wrapped in a clean, intuitive interface.',
    howBadge: 'How it works', howTitle: 'Up and running in minutes',
    dlTitle: 'Start tracking today',
    dlSubtitle: 'Free forever. No credit card required. Available on iOS & Android.',
    appStore: ['Download on the', 'App Store'],
    googlePlay: ['Get it on', 'Google Play'],
    greeting: 'Good morning 👋',
    balance: 'Total Balance',
    incomeLabel: 'Income', expLabel: 'Expenses',
  },
  es: {
    badge: 'Finanzas Personales, Simplificadas',
    title: <>Toma el control de tus <span className={styles.accent}>finanzas</span></>,
    subtitle: 'Rastrea gastos, escanea recibos con IA y visualiza tu gasto — todo en una elegante app.',
    download: 'Descargar Gratis',
    seeFeatures: 'Ver Funciones',
    users: 'Usuarios', rating: 'Rating', free: 'Gratis', forever: 'Siempre',
    featBadge: 'Funciones', featTitle: 'Todo lo que necesitas para gestionar tu dinero',
    featSubtitle: 'Herramientas potentes en una interfaz limpia e intuitiva.',
    howBadge: 'Cómo funciona', howTitle: 'Listo en minutos',
    dlTitle: 'Empieza a registrar hoy',
    dlSubtitle: 'Gratis para siempre. Sin tarjeta de crédito. Disponible en iOS y Android.',
    appStore: ['Descárgalo en el', 'App Store'],
    googlePlay: ['Disponible en', 'Google Play'],
    greeting: 'Buenos días 👋',
    balance: 'Balance Total',
    incomeLabel: 'Ingresos', expLabel: 'Gastos',
  },
}

export default function Home() {
  const { lang, t } = useLang()
  const h = heroText[lang]
  const features = featureData[lang]
  const steps = stepsData[lang]

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>{h.badge}</span>
          <h1 className={styles.heroTitle}>{h.title}</h1>
          <p className={styles.heroSubtitle}>{h.subtitle}</p>
          <div className={styles.heroActions}>
            <a href="#download" className={styles.btnPrimary}>{h.download}</a>
            <a href="#features" className={styles.btnOutline}>{h.seeFeatures}</a>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>10k+</span>
              <span className={styles.statLabel}>{h.users}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>4.9★</span>
              <span className={styles.statLabel}>{h.rating}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>{h.free}</span>
              <span className={styles.statLabel}>{h.forever}</span>
            </div>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <div className={styles.mockHeader}>
                <span className={styles.mockGreeting}>{h.greeting}</span>
                <span className={styles.mockBalance}>$4,280.50</span>
                <span className={styles.mockBalanceLabel}>{h.balance}</span>
              </div>
              <div className={styles.mockCards}>
                <div className={styles.mockCard}>
                  <span className={styles.mockCardIcon}>↑</span>
                  <div>
                    <div className={styles.mockCardLabel}>{h.incomeLabel}</div>
                    <div className={styles.mockCardValue} style={{ color: '#38E07B' }}>$6,500</div>
                  </div>
                </div>
                <div className={styles.mockCard}>
                  <span className={styles.mockCardIcon} style={{ color: '#FA5538' }}>↓</span>
                  <div>
                    <div className={styles.mockCardLabel}>{h.expLabel}</div>
                    <div className={styles.mockCardValue} style={{ color: '#FA5538' }}>$2,219</div>
                  </div>
                </div>
              </div>
              <div className={styles.mockChartBar}>
                {[60, 80, 45, 90, 65, 75, 50].map((hh, i) => (
                  <div key={i} className={styles.mockBar} style={{ height: `${hh}%`, opacity: i === 3 ? 1 : 0.4 }} />
                ))}
              </div>
              <div className={styles.mockTransactions}>
                {[
                  { label: lang === 'es' ? 'Supermercado' : 'Grocery Store', amt: '-$82.40', cat: '🛒' },
                  { label: lang === 'es' ? 'Salario' : 'Salary', amt: '+$3,250', cat: '💼' },
                  { label: 'Netflix', amt: '-$15.99', cat: '🎬' },
                ].map((tx, i) => (
                  <div key={i} className={styles.mockTx}>
                    <span className={styles.mockTxIcon}>{tx.cat}</span>
                    <span className={styles.mockTxLabel}>{tx.label}</span>
                    <span className={styles.mockTxAmt} style={{ color: tx.amt.startsWith('+') ? '#38E07B' : '#FA5538' }}>
                      {tx.amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionBadge}>{h.featBadge}</span>
          <h2 className={styles.sectionTitle}>{h.featTitle}</h2>
          <p className={styles.sectionSubtitle}>{h.featSubtitle}</p>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{featureKeys[i].icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={styles.howItWorks}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionBadge}>{h.howBadge}</span>
          <h2 className={styles.sectionTitle}>{h.howTitle}</h2>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNumber}>{s.n}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className={styles.download}>
        <div className={styles.downloadInner}>
          <img src="/icon.png" alt="Expensify" className={styles.downloadLogo} />
          <h2 className={styles.downloadTitle}>{h.dlTitle}</h2>
          <p className={styles.downloadSubtitle}>{h.dlSubtitle}</p>
          <div className={styles.downloadBtns}>
            <a href="#" className={styles.storeBadge}>
              <span className={styles.storeIcon}>🍎</span>
              <div>
                <div className={styles.storeSmall}>{h.appStore[0]}</div>
                <div className={styles.storeBig}>{h.appStore[1]}</div>
              </div>
            </a>
            <a href="#" className={styles.storeBadge}>
              <span className={styles.storeIcon}>▶</span>
              <div>
                <div className={styles.storeSmall}>{h.googlePlay[0]}</div>
                <div className={styles.storeBig}>{h.googlePlay[1]}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.logo}>
            <img src="/icon.png" alt="Expensify" className={styles.logoImg} />
            <span className={styles.logoText}>Expensify</span>
          </div>
          <div className={styles.footerLinks}>
            <Link to="/terms" className={styles.footerLink}>{t.footer.terms}</Link>
            <Link to="/privacy" className={styles.footerLink}>{t.footer.privacy}</Link>
          </div>
          <p className={styles.footerCopy}>{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  )
}
