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
            <h1>Metamaskの使い方</h1>
            <h2>MetaMaskをchromeにインストール</h2>
            <h3>スマホ版</h3>
            <a target="_blank" href="https://apps.apple.com/us/app/metamask/id1438144202" rel="noopener noreferrer">Link to... [MetaMask - Apple Store]</a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=io.metamask" rel="noopener noreferrer">Link to... [MetaMask - Google Play]</a>
            <p>インストール後、アプリを開くとこのような画面が表示されます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="/mask/1.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/1.png" alt="image.png" /></a>
            </div>
            <h3>PC版</h3>
            <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related?hl=ja" rel="noopener noreferrer">Link to... [MetaMask - Chrome ウェブストア]</a>
            <p>このサイトを開くと、このような画面が出てくると思います。</p>
            <div style={{width: '100%', height: '50%', position: 'relative'}}>
              <a href="/mask/2.png" target="_blank" rel="nofollow noopener noreferrer">
                <Image layout='fill' objectFit='contain' src="/mask/2.png" alt="image.png" />
              </a>
            </div>
            <p>ここで、<code>「chromeに追加」</code>と書いてある、青色のボタンを押します。</p>
            <p>そうすると、このようなポップアップが出てきます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="/mask/3.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/3.png" alt="image.png" /></a>
            </div>
            <p>左の「<code>拡張機能を追加</code>」を押します。</p>
            <p>その後、少し待つと、このような画面が表示されます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="/mask/1.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/1.png" alt="image.png" /></a>
            </div>
            <h2>MetaMaskでウォレット作成</h2>
            <p>「開始」<br />
            をクリックします。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="/mask/4.png" target="_blank" rel="nofollow noopener noreferrer">
                <Image layout='fill' objectFit='contain' src="/mask/4.png" alt="image.png" />
              </a>
            </div>
            <p>こんな画面になっていると思います。</p>
            <p>右側にある「<code>ウォレットを作成</code>」をクリック</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="/mask/5.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/5.png" alt="image.png" /></a>
            </div>
            <p>
            ここは、任意です。<br />
            どちらか、お好きな方をお選びください。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="/mask/6.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/6.png" alt="image.png" /></a>
            </div>
            <p>
            パスワードの作成を行います。<br />
            ここは、好きなように決めて大丈夫です。</p>
            <p>しかし、このNFTを扱うアカウント、セキュリティは気を付けた方が良さそうなので、よく考えてください。<br />
            <strong>パスワードの自動保存機能は無いので、絶対に保管してください。</strong></p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="/mask/7.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/7.png" alt="image.png" /></a>
            </div>
            <p>
            このような画面になると思います。<br />
            ここでは、鍵マークの場所をクリックし、文字列をコピーしてください。<br />
            その後、「Next」を押し、<br />
            表示されていた文字列の通りに、順番に単語をクリックしていきます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="/mask/8.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/8.png" alt="image.png" /></a>
            </div>
            <p>🎉おめでとうございます<br />
            登録が完了しました！</p>
            <h3>ウォレット名変更</h3>
            <p>ウォレット名を変更することができます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="/mask/9.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/9.png" alt="image.png" /></a>
            </div>
            <p>
            この「アカウントの詳細」をクリックします。<br />
            そして、</p>
            <div style={{width:'100%',height:'25%',position:'relative'}}>
            <a href="/mask/10.png" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="/mask/10.png" alt="image.png" /></a>
            </div>
            <p>ここのペンマークをクリックし、名前を編集します。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
