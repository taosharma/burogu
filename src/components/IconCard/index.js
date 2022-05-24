import styles from "./index.module.css"


function IconCard({pngImg, alt, text}){
    return(
        <div>
          <img className={styles.iconCardImage} src={pngImg} alt={alt}/>
             <p className={styles.iconCardText}>{text}</p>
        </div>
        );
}
export default IconCard;