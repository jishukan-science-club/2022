import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Ext.module.css'

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
            <h1>POAPの取得の方法</h1>
            <Link href="/note/metamask">【Metamaskの使い方】</Link><p>上記のコースが終了した後に、以下を行ってください。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="/poap/1.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="/poap/1.png" alt="image.png" /></a>
            </div>
            <p>この赤線で囲った部分をクリックしてください。<br />
            ここをクリックすることで、アカウント(ウォレット)のIDをコピーすることができます。</p>
            <h2>POAP Appのインストール</h2>
            <hr />
            <h3>Google Play Store</h3>
            <a href="https://play.google.com/store/apps/details?id=xyz.poap.app.mobile" target="_blank" rel="noopener noreferrer">Link to... [POAP APP - Google Play Store]</a>
            <hr />
            <h3>Apple Store</h3>
            <a href="http://apps.apple.com/us/app/id1567078943" target="_blank" rel="noopener noreferrer">Link to... [POAP APP - Apple Store]</a>
            <hr />
            <p>アプリを開くと、この様な画面になると思います。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="/poap/2.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="/poap/2.png" alt="image.png" /></a>
            </div>
            <p>この下の、<code>Your address</code>と書かれた場所に、先ほどコピーしたIDをペーストします</p>
            <p>IDが正しければ、この画面と似たような画面になると思います。<br />
            この状態になることで、POAPの取得、表示が可能となりました。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="/poap/3.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="/poap/3.png" alt="image.png" /></a>
            </div>
            <p>QRコードで取得するので、<code>Scan QR</code>を押してください。<br />
            そして、科学部員のパソコンに表示されているQRコードを読み込みます。<br />
            QRコードの写真を撮っておいて、後で取得することも可能です。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
