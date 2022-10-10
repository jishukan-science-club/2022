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
              <a href="https://camo.qiitausercontent.com/646f382921b67b66b05f8e0c89f63bbbc64ee0ad/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f33323762336338642d313833662d393537302d373639622d6530366161386134343266352e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/646f382921b67b66b05f8e0c89f63bbbc64ee0ad/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f33323762336338642d313833662d393537302d373639622d6530366161386134343266352e706e67" alt="image.png" /></a>
            </div>
            <p>右上にある<code>Connect Wallet</code>をクリックします</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="https://camo.qiitausercontent.com/68060604d97ac5d071e2b0c25afb326e63602eab/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f61626264633332662d333335642d306135612d343434372d3330623064393233346363642e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/68060604d97ac5d071e2b0c25afb326e63602eab/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f61626264633332662d333335642d306135612d343434372d3330623064393233346363642e706e67" alt="image.png" /></a>
            </div>
            <p><code>Metamask</code>を選択してから先は、OpenSeaと同じです。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="https://camo.qiitausercontent.com/574add59cb53888803cf062a04ebbf3eeaf47f09/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f39336432373263382d396239662d343566352d363937622d3433393738393737646261392e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="https://camo.qiitausercontent.com/574add59cb53888803cf062a04ebbf3eeaf47f09/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f39336432373263382d396239662d343566352d363937622d3433393738393737646261392e706e67" alt="image.png" /></a>
            </div>
            <p>このようなポップアップが表示されたら、適当に埋めて、SAVEしましょう。</p>
            <p>これで、登録は完了です。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
              <a href="https://camo.qiitausercontent.com/098f21b902c37582d98e0c35425da29e2f85985c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f34636639343035342d666261352d643235652d393737362d3962356330646664666163342e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain'  src="https://camo.qiitausercontent.com/098f21b902c37582d98e0c35425da29e2f85985c/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f34636639343035342d666261352d643235652d393737362d3962356330646664666163342e706e67" alt="image.png" /></a>
            </div>
            <p>ここを切り替えると、マルチモードになり、部屋に入ってるほかの人も見ることができます。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
