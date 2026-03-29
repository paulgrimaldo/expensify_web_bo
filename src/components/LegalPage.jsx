import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LangContext'
import styles from './LegalPage.module.css'

function renderBody(text) {
  return text.split('\n').map((line, i) => {
    if (line.trim() === '') return <br key={i} />
    // Bold via **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    return (
      <p key={i} className={line.startsWith('•') ? styles.bullet : styles.para}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j}>{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    )
  })
}

export default function LegalPage({ type }) {
  const { t } = useLang()
  const content = t[type]

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/" className={styles.breadLink}>Home</Link>
          <span className={styles.breadSep}>/</span>
          <span className={styles.breadCurrent}>{content.title}</span>
        </div>

        <div className={styles.header}>
          <span className={styles.badge}>{content.badge}</span>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.date}>{content.lastUpdated}</p>
          <p className={styles.intro}>{content.intro}</p>
        </div>

        <div className={styles.toc}>
          <p className={styles.tocTitle}>Contenido</p>
          <ol className={styles.tocList}>
            {content.sections.map((s) => (
              <li key={s.title}>
                <a href={`#section-${s.title.split('.')[0].trim()}`} className={styles.tocLink}>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.sections}>
          {content.sections.map((s) => (
            <section
              key={s.title}
              id={`section-${s.title.split('.')[0].trim()}`}
              className={styles.section}
            >
              <h2 className={styles.sectionTitle}>{s.title}</h2>
              <div className={styles.sectionBody}>{renderBody(s.body)}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
