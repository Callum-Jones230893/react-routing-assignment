import styles from "./hero.module.css"

const Hero = ({addToCart, heroProduct}) => {
  return (
    <>
      {heroProduct.map((product, index) => (
        <div className={styles.heroWrapper} key={index}>
          <div className={styles.mainCardWrapper} >
            <div className={styles.mainCardInnerWrapper}>
              <h3 className={styles.newItemsTitle}>New Product!</h3>
              <h2 className={styles.heroTitle}>{product.name}</h2>
              <p className={styles.heroInformation}>{product.information}</p>
              <p className={styles.heroPrice}>{product.price}</p>
              <span onClick={() => addToCart(product)}>Add to cart</span>
            </div>
          </div>
          <div className={styles.sideCard} key={index}>
            {/* {product.image && <img src={product.imageTwo} alt={product.name} />} */}
          </div>
      </div>
      ))}
    </>
  )
}

export default Hero