import { useState } from "react"
import styles from "./header.module.css"
import Logo from "../Logo"
import Navigation from "../Navigation"

const Header = ({shoppingCart, updateShoppingCart}) => {
  const [displayCart, setDisplayCart] = useState(false)

  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Welcome</h1>
      </div>
      <Navigation />
    </div>
  )
}

export default Header