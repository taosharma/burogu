import styles from "./index.module.css"
import BannerImage from "../BannerImage";
import Title from "../Title";
import IconCard from "../IconCard";
import digitalNomad from "../../images/digitalNomad.png"

function Welcome() {
    return (
      <div>
          <BannerImage/>
          <Title title="ブログ"/>
          <div className={styles.iconCardContainer}>
          <IconCard pngImg={digitalNomad} 
              alt="working online" 
              text="Digital Nomad Lifestyle" />
          <IconCard pngImg={digitalNomad} 
              alt="working online" 
              text="Cultural Differences" />
          <IconCard pngImg={digitalNomad} 
              alt="working online" 
              text="Cats of the World" />
          <IconCard pngImg={digitalNomad} 
              alt="working online" 
              text="Hobbies & Dreams" />
          </div>
      </div>
    );
  }

export default Welcome;