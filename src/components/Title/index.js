import styles from './index.module.css'

function Title({ title }) {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.titleText}>{title}</div>
    </div>
  )
}

export default Title
