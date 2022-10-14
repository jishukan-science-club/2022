import Link from 'next/link'
import styles from '../styles/Ext.module.css'

export default function Ext() {
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
            <h1>oncyber</h1>
            <p>科学部先端科学部門では、日々、最新技術を使った実験を行っています。</p>
            <p>今年度の自修祭では、Web3.0にフィーチャーした実験を行います。</p>
            <p>具体的には、oncyberという、メタバース技術を使ったバーチャル理科室を公開し、参加者が2022年度自修祭限定の、「POAP」と呼ばれる参加証明書を発行します。</p>
            <p>この企画には、前例が無く、完全に新しい試みとなっています。</p>
            <p>さらに、日本においては、あまり普及していない技術となっており、実行のハードルも高くなっています。</p>
            <p>ここで、この様な実験を行うことで、Web3.0の壁の大きさを検証するとともに、どのくらいの人がこの様な先進技術に適応できるかの実験を行います。</p>
            <p>ワールドは、このリンクから入ることができます。</p>
            <a href="https://oncyber.io/spaces/sUmMsfezIUJswNzPHBDC" target="_blank" rel="noopener noreferrer">バーチャル理科室</a>
          </div>
        </div>
      </div>
    </div>
  )
}
