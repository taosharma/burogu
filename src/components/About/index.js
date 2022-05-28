import styles from './index.module.css'

import Subtitle from '../Subtitle'

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutColumn}>
        <img
          className={styles.aboutImg}
          src="https://i.imgur.com/D8SFTSf.jpg"
        />
        <Subtitle subtitle="Hazie" />
        <p>
          Some text about Hazie. Some text Some text about Hazie. about Hazie.
          Some text about Hazie. Some text about Hazie. Some text about Hazie
          Some text about Hazie. Some text about Hazie. Some text about Hazie.
        </p>
      </div>
      <div className={styles.aboutColumn}>
        <img
          className={styles.aboutImg}
          src="https://i.imgur.com/36leid2.jpg"
        />
        <Subtitle subtitle="Tao" />
        <p>
          Some text about Tao. Some text Some text about Tao. about Tao. Some
          text about Tao. Some text about Tao. Some text about Tao Some text
          about Tao. Some text about Tao. Some text about Tao.
        </p>
      </div>
    </div>
  )
}

export default About
