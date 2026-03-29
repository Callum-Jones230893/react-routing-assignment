import { useState, useEffect } from "react"
import styles from "./shoppingCart.module.css"

const ShoppingCart = ({displayed, shoppingCart, updateShoppingCart}) => {
  const [cartTotal, setCartTotal] = useState(0.00)

  const removeProduct = (product) => {
    const removeItem = shoppingCart.findIndex(item => item.id === product.id)
    if (removeItem >= 0) {
      const newTotal = [...shoppingCart]
      newTotal.splice(removeItem, 1)
      updateShoppingCart(newTotal)
    }
  }

  const calculateTotal = () => {
    let sum = 0
    shoppingCart.forEach(item => sum += item.price)
    setCartTotal(sum)
  }

  useEffect(() => {
    calculateTotal()
  }, [shoppingCart])

  return (
    <div className={styles.shoppingCartWrapper}>
      <div className={`${styles.shoppingCartContent} ${displayed ? styles.displayCart : ``} `}>
        {shoppingCart.map((product, index) => (
          <div className={styles.shoppingCartProduct} key={index}>
            <h5 className={styles.productName}>{product.name}</h5>
            <p className={styles.productPrice}>{product.price}</p>
            <span className={styles.addremove} onClick={() => removeProduct(product)}>+ -</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoppingCart