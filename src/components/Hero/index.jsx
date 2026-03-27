import styles from "./hero.module.css"
import heroProduct from "../../utils/randomProduct"

const Hero = () => {
  const displayedProduct = heroProduct(1)

  return (
    <div className={styles.heroWrapper}>
      {displayedProduct.map((product, index) => (
        <>
          <div className={styles.mainCardWrapper} key={index}>
            <h3 className={styles.newItemsTitle}>New Product!</h3>
            <h2 className={styles.heroTitle}>{product.name}</h2>
            <p className={styles.heroInformation}>{product.information}</p>
            <span className={styles.heroBtn}>Add to cart</span>
          </div>
          <div className={styles.sideCard}>
            <img src="" alt="" />
          </div>
          </>
        ))}
    </div>
  )
}

export default Hero