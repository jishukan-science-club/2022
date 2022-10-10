import Link from 'next/link'
import styles from '../../styles/Note.module.css'

export default function Note() {
  return (
    <div className={styles.container}>
      <div className={styles.stage}>
        <div className={styles.logo}>
          <Link href="/2022">
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
            <Link href="/note/metamask">
              <a>
                <div>
                  <h2>Metamaskの使い方</h2>
                  <p>最初にお読みください。oncyberやPOAPの操作にはMetaMaskのウォレットが必要になります。</p>
                </div>
              </a>
            </Link>
            <Link href="/note/oncyber">
              <a>
                <div>
                  <h2>oncyberへの参加の方法</h2>
                  <p>メタバース理科室への参加方法です。説明には、テスト用のワールドを使用しています。</p>
                </div>
              </a>
            </Link>
            <Link href="/note/poap">
              <a>
                <div>
                  <h2>POAPの取得の方法</h2>
                  <p>今回の企画に参加した証の取得方法です。当日から約一週間、メタバース理科室上にQRコードが公開されます。</p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
