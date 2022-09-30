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
        <div className={styles.exp_stage}></div>
      </div>
    </div>
  )
}
