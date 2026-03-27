import styles from "./hero.module.css"

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.mainCardWrapper}>
        <h3 className={styles.newItemsTitle}>New Products</h3>
        <h2 className={styles.heroTitle}></h2>
        <p className={styles.heroInformation}></p>
        <span className={styles.heroBtn}>Add to cart</span>
      </div>
      <div className={styles.sideCard}>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Hero