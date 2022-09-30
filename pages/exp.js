import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Exp.module.css'
import JSSC from '../styles/images/logo.svg'

export default function Exp() {
  return (
    <div className={styles.container}>
      <div className={styles.stage}>
        <div className={styles.logo}>
          {/* <div className={styles.jssclogo} /> */}
          <Link href="/">
            <Image src={JSSC} alt='画像' width={100} height={100} />
          </Link>
          <div className={styles.jslogo} />
        </div>
        <div className={styles.exp_stage}>

        </div>
      </div>
    </div>
  )
}
