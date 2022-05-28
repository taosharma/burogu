import styles from './index.module.css'

import BannerImage from '../BannerImage'
import Title from '../Title'
import IconCard from '../IconCard'

import { welcomeIcons } from '../../constants/welcome'

function Welcome() {
  return (
    <div>
      <BannerImage />
      <Title title="ブログ" />
      <div className={styles.iconCardContainer}>
        {welcomeIcons.map((icon, index) => (
          <IconCard
            pngImg={icon.pngImg}
            alt={icon.alt}
            text={icon.text}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Welcome
