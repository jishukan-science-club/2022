import Link from 'next/link'
import styles from '../styles/Exp.module.css'

export default function Exp() {
  return (
    <div className={styles.container}>
      <div className={styles.stage}>
        <div className={styles.logo}>
          <div className={styles.jssclogo} />
          <div className={styles.jslogo} />
        </div>
        {/* <div className={styles.exp_stage}>
          <div className={styles.toc_stage}>
            <a href="#1st"><p>1年...</p></a>
            <a href="#2nd"><p>2年...</p></a>
            <a href="#3rd"><p>3年...</p></a>
            <a href="#4th"><p>4年...</p></a>
            <a href="#5th"><p>5年...</p></a>
          </div>
          <div className={styles.content_stage}>
            <h1>実験一覧</h1>
            <div>
              <h2>1年...</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>2年...</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>3年...</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>4年...</h2>
              画像
              <p>説明</p>
            </div>
            <div>
              <h2>5年...</h2>
              画像
              <p>説明</p>
            </div>
          </div>
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
        </nav> */}
      </div>
    </div>
  )
}
