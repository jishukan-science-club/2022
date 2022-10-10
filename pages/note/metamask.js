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
            <a href="https://camo.qiitausercontent.com/fbdf6217af8858fa6eb045011829789c8ed45938/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f34316330353130312d373034332d303138372d653135312d3463346233663232313034302e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/fbdf6217af8858fa6eb045011829789c8ed45938/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f34316330353130312d373034332d303138372d653135312d3463346233663232313034302e706e67" alt="image.png" /></a>
            </div>
            <h3>PC版</h3>
            <a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related?hl=ja" rel="noopener noreferrer">Link to... [MetaMask - Chrome ウェブストア]</a>
            <p>このサイトを開くと、このような画面が出てくると思います。</p>
            <div style={{width: '100%', height: '50%', position: 'relative'}}>
              <a href="https://camo.qiitausercontent.com/84ab8b85fa6857a17066c14f72b4d2d0990f845f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f66663631643638652d373035652d623064642d633735392d6533376262306334333330362e706e67" target="_blank" rel="nofollow noopener noreferrer">
                <Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/84ab8b85fa6857a17066c14f72b4d2d0990f845f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f66663631643638652d373035652d623064642d633735392d6533376262306334333330362e706e67" alt="image.png" />
              </a>
            </div>
            <p>ここで、<code>「chromeに追加」</code>と書いてある、青色のボタンを押します。</p>
            <p>そうすると、このようなポップアップが出てきます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="https://camo.qiitausercontent.com/9f941b44137fc46043ee3bec969c389de9784980/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f30646565346133302d343430302d623735632d343830632d6635316565623662383036322e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/9f941b44137fc46043ee3bec969c389de9784980/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f30646565346133302d343430302d623735632d343830632d6635316565623662383036322e706e67" alt="image.png" /></a>
            </div>
            <p>左の「<code>拡張機能を追加</code>」を押します。</p>
            <p>その後、少し待つと、このような画面が表示されます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="https://camo.qiitausercontent.com/fbdf6217af8858fa6eb045011829789c8ed45938/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f34316330353130312d373034332d303138372d653135312d3463346233663232313034302e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/fbdf6217af8858fa6eb045011829789c8ed45938/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f34316330353130312d373034332d303138372d653135312d3463346233663232313034302e706e67" alt="image.png" /></a>
            </div>
            <h2>MetaMaskでウォレット作成</h2>
            <p>「開始」<br />
            をクリックします。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="https://camo.qiitausercontent.com/28ebf19bc9921548ebad258049adc40462fd657f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f30333566626631622d616665352d383035342d613232662d3261366163333733646531312e706e67" target="_blank" rel="nofollow noopener noreferrer">
                <Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/28ebf19bc9921548ebad258049adc40462fd657f/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f30333566626631622d616665352d383035342d613232662d3261366163333733646531312e706e67" alt="image.png" />
              </a>
            </div>
            <p>こんな画面になっていると思います。</p>
            <p>右側にある「<code>ウォレットを作成</code>」をクリック</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="https://camo.qiitausercontent.com/66060c4ebd30f70255b5e6d84a8550a533bd462a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f36633030653564642d646361612d613339652d663933622d3162656661383336303936652e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/66060c4ebd30f70255b5e6d84a8550a533bd462a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f36633030653564642d646361612d613339652d663933622d3162656661383336303936652e706e67" alt="image.png" /></a>
            </div>
            <p>
            ここは、任意です。<br />
            どちらか、お好きな方をお選びください。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="https://camo.qiitausercontent.com/110989441b2506bc8b7fdd3d34ba79ee181c631b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f35363734353861362d323664632d653563382d326634352d3564373638343331333162382e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/110989441b2506bc8b7fdd3d34ba79ee181c631b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f35363734353861362d323664632d653563382d326634352d3564373638343331333162382e706e67" alt="image.png" /></a>
            </div>
            <p>
            パスワードの作成を行います。<br />
            ここは、好きなように決めて大丈夫です。</p>
            <p>しかし、このNFTを扱うアカウント、セキュリティは気を付けた方が良さそうなので、よく考えてください。<br />
            <strong>パスワードの自動保存機能は無いので、絶対に保管してください。</strong></p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="https://camo.qiitausercontent.com/08ab1980a904a4847ac37160c3e4454b2acba049/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f63363838383862612d663138642d343361342d303433322d3537316435343566626438312e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/08ab1980a904a4847ac37160c3e4454b2acba049/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f63363838383862612d663138642d343361342d303433322d3537316435343566626438312e706e67" alt="image.png" /></a>
            </div>
            <p>
            このような画面になると思います。<br />
            ここでは、鍵マークの場所をクリックし、文字列をコピーしてください。<br />
            その後、「Next」を押し、<br />
            表示されていた文字列の通りに、順番に単語をクリックしていきます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}><a href="https://camo.qiitausercontent.com/0950995eea9abf671e809c230f7f18e1834f063b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f33393333356639362d326565332d396630612d393634662d3738363866313832356566632e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/0950995eea9abf671e809c230f7f18e1834f063b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f33393333356639362d326565332d396630612d393634662d3738363866313832356566632e706e67" alt="image.png" /></a>
            </div>
            <p>🎉おめでとうございます<br />
            登録が完了しました！</p>
            <h3>ウォレット名変更</h3>
            <p>ウォレット名を変更することができます。</p>
            <div style={{width:'100%',height:'50%',position:'relative'}}>
            <a href="https://camo.qiitausercontent.com/c3ee3d78d71bfe376bf138b9a1305bace4d01cc3/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f62643763373238342d633261362d323262372d656564342d3535633833313238646235322e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/c3ee3d78d71bfe376bf138b9a1305bace4d01cc3/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f62643763373238342d633261362d323262372d656564342d3535633833313238646235322e706e67" alt="image.png" /></a>
            </div>
            <p>
            この「アカウントの詳細」をクリックします。<br />
            そして、</p>
            <div style={{width:'100%',height:'25%',position:'relative'}}>
            <a href="https://camo.qiitausercontent.com/be83c2bc2be60d3974ad23e2e4d5a740455c83ff/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f33343466666438322d616233312d373832622d656239632d3561346462373462336432302e706e67" target="_blank" rel="nofollow noopener noreferrer"><Image layout='fill' objectFit='contain' src="https://camo.qiitausercontent.com/be83c2bc2be60d3974ad23e2e4d5a740455c83ff/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e61702d6e6f727468656173742d312e616d617a6f6e6177732e636f6d2f302f323639373037372f33343466666438322d616233312d373832622d656239632d3561346462373462336432302e706e67" alt="image.png" /></a>
            </div>
            <p>ここのペンマークをクリックし、名前を編集します。</p>
          </div>
        </div>
      </div>
    </div>
  )
}
