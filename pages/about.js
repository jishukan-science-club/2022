import Link from 'next/link'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.stage}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <div className={styles.jssclogo} />
            </a>
          </Link>
          <a target="_blank" href="https://www.jishukan.ed.jp/" rel="noopener noreferrer">
            <div className={styles.jslogo} />
          </a>
        </div>
        <nav className={styles.nav}>
          <Link href="/exp">
            <div className={styles.inner}>
              <p>Experiments</p>
            </div>
          </Link>
          <Link href="/note">
            <div className={styles.inner}>
              <p>Notes</p>
            </div>
          </Link>
          <Link href="/ext">
            <div className={styles.inner}>
              <p>Ext</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.inner}>
              <p>About</p>
            </div>
          </Link>
        </nav>
        <div className={styles.exp_stage}>
          <div className={styles.content_stage}>
            <h1>JSSC</h1>
            <p>自修館中等教育学校科学部です。</p>
            <p>この部活では、「化学」だけでなく、その他、科学に関係しているものをとことん探究している部活です。</p>
            <p>例えば、テレビで観た面白そうな実験を調べ、分析し、自分の意のままに操作できるようになるまで化学反応を突き詰めています。</p>
            <p>他にも、ロボットを使った電子工学やコンピューターを使ったWeb3.0の研究など、様々な分野の「科学」をしています。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
