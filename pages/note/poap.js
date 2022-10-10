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
            <h1>POAPの取得の方法</h1>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="https://camo.qiitausercontent.com/12200fa4d1eb6a43df39c74f7df809789ef0d9c1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3937343338352f66303638316665362d313931662d376366362d323762362d3065303938396531393263642e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="https://camo.qiitausercontent.com/12200fa4d1eb6a43df39c74f7df809789ef0d9c1/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3937343338352f66303638316665362d313931662d376366362d323762362d3065303938396531393263642e706e67" alt="image.png" /></a>
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
            <a href="https://camo.qiitausercontent.com/073f67d48858a02a83afa45a4b73de933bea1a6a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3937343338352f62623564613234302d663430662d333638652d623535322d6531383665666537363738642e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="https://camo.qiitausercontent.com/073f67d48858a02a83afa45a4b73de933bea1a6a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3937343338352f62623564613234302d663430662d333638652d623535322d6531383665666537363738642e706e67" alt="image.png" data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/974385/bb5da240-f40f-368e-b552-e186efe7678d.png" /></a>
            </div>
            <p>この下の、<code>Your address</code>と書かれた場所に、先ほどコピーしたIDをペーストします</p>
            <p>IDが正しければ、この画面と似たような画面になると思います。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="https://camo.qiitausercontent.com/a4e12632df97d4cb78a45c31584b826221c00f9e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3937343338352f64363339396638632d383661372d363466352d386236372d3363613165626433666539392e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="https://camo.qiitausercontent.com/a4e12632df97d4cb78a45c31584b826221c00f9e/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f3937343338352f64363339396638632d383661372d363466352d386236372d3363613165626433666539392e706e67" alt="image.png" data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/974385/d6399f8c-86a7-64f5-8b67-3ca1ebd3fe99.png" /></a>
            </div>
            <p>右下の<code>Mint</code>と書かれたボタンを押してください。</p>
            <p>三つほどオプションが表示されます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="https://camo.qiitausercontent.com/6b8c619ff81b03a0f625fe0f4639360ef449472d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f65613633306433302d343961312d313439302d353764662d3137626362666365393965372e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="https://camo.qiitausercontent.com/6b8c619ff81b03a0f625fe0f4639360ef449472d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f65613633306433302d343961312d313439302d353764662d3137626362666365393965372e706e67" alt="image.png" data-canonical-src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2697077/ea630d30-49a1-1490-57df-17bcbfce99e7.png" /></a>
            </div>
            <p>QRコードで取得するので、<code>Scan QR</code>を押してください。<br />
            そして、メタバース理科室上に表示されているQRコードを読み込みます。<br />
            スキャンができない場合は、<code>Scan QR</code>ではなく<code>Secret Word</code>をクリックし、QRコードの横に記載されているフレーズを入力してください。</p>
            <p>下の<code>Mint</code>ボタンを押し、少し待つとPOAPの取得が完了します。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
