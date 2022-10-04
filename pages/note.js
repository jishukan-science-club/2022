import Link from 'next/link'
import styles from '../styles/Note.module.css'

export default function Note() {
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
            <h1>ノート一覧</h1>
            <Link href="/">
              <a>
                <div>
                  <h2>POAPの取得の方法</h2>
                  <p>説明</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div>
                  <h2>oncyberへの参加の方法</h2>
                  画像
                  <p>説明</p>
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div>
                  <h2>Metamaskの使い方</h2>
                  画像
                  <p>説明</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
