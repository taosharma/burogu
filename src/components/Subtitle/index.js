import styles from './index.module.css'

function Subtitle({ subtitle }) {
  return (
    <div className={styles.subtitleContainer}>
      <div className={styles.subtitleText}>{subtitle}</div>
    </div>
  )
}

export default Subtitle
