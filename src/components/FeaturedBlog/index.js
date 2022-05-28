import styles from './index.module.css'
import Subtitle from '../Subtitle'

function FeaturedBlog({ blog }) {
  const { coverImage, title, summary, date } = blog
  return (
    <div>
      <div className={styles.featuredBlogContainer}>
        <img className={styles.featuredBlogImage} src={coverImage.link} />
        <Subtitle subtitle={title} />
        <p className={styles.featuredBlogDate}>{date}</p>
        <p className={styles.featuredBlogSummary}>{summary}</p>
      </div>
    </div>
  )
}

export default FeaturedBlog
