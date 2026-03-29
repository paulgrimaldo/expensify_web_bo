import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/icon.png" alt="Expensify" className={styles.logoImg} />
          <span className={styles.logoText}>Expensify</span>
        </Link>

        <div className={styles.links}>
          {isHome && (
            <>
              <a href="#features" className={styles.link}>{t.nav.features}</a>
              <a href="#how-it-works" className={styles.link}>{t.nav.howItWorks}</a>
            </>
          )}
          <Link to="/terms" className={styles.link}>{t.nav.terms}</Link>
          <Link to="/privacy" className={styles.link}>{t.nav.privacy}</Link>

          <div className={styles.langSwitch}>
            <button
              className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
              onClick={() => setLang('es')}
            >
              ES
            </button>
            <span className={styles.langDivider}>|</span>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>

          {isHome && (
            <a href="#download" className={styles.cta}>{t.nav.getApp}</a>
          )}
        </div>
      </div>
    </nav>
  )
}
