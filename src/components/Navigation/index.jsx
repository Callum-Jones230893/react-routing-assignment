import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react";
import styles from "./navigation.module.css"

const Navigation = () => {
  return (
    <nav className={styles.navigationWrapper}>
      <ShoppingBagIcon size={28}  className={styles.cartIcon} />
      {/* <ShoppingBagOpenIcon size={32} className={styles.cartIcon} /> */}
      {pages.map((navigation, index) => 
        <div key={index}>
          <NavLink className={styles.navItem} to={`/${navigation.page}`}>{navigation.name}</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navigation