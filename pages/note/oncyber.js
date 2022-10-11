import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Ext.module.css'

export default function Ext() {
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
            <h1>oncyberへの参加の方法</h1>
            <h2>oncyberでメタバース</h2>
            <a target="_blank" href="https://oncyber.io/spaces/3CnAkSyeIU55GFdhTdaY" rel="noopener noreferrer">Link to... [JSSC Test World]</a>
            <p>ここは、科学部のテスト用メタバース空間です。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="/2022/oncy/1.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/2022/oncy/1.png" alt="image.png" /></a>
            </div>
            <p>右上にある<code>Connect Wallet</code>をクリックします</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="/2022/oncy/2.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/2022/oncy/2.png" alt="image.png" /></a>
            </div>
            <p><code>Metamask</code>を選択してから先は、OpenSeaと同じです。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="/2022/oncy/3.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="/2022/oncy/3.png" alt="image.png" /></a>
            </div>
            <p>このようなポップアップが表示されたら、適当に埋めて、SAVEしましょう。</p>
            <p>これで、登録は完了です。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="/2022/oncy/4.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="/2022/oncy/4.png" alt="image.png" /></a>
            </div>
            <p>ここを切り替えると、マルチモードになり、部屋に入ってるほかの人も見ることができます。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
