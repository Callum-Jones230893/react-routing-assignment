import styles from "./sideBar.module.css"
import { UserCircleIcon, ShoppingBagIcon } from "@phosphor-icons/react"
import { categories } from "../../data/data"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <div className={styles.sideBarSection}>
        <div className={styles.sideBarItem}>placeholder for army icons</div>
      </div>
      <div className={styles.sideBarSection}>
        {categories.map((navigation, index) => (
          <div className={`${styles.navItem} ${styles.sideBarItem}`} key={index}>
            <NavLink to={`/products/${navigation.value}`}>{navigation.name}</NavLink>
          </div>
        ))}
      </div>
      <div className={styles.sideBarSection}>
        <div className={styles.sideBarItem}>filter by prices placeholder</div>
      </div>
      <div className={styles.sideBarSection}>
        <div className={styles.iconContainer}>
          <ShoppingBagIcon size={28}  className={styles.cartIcon} />
          <UserCircleIcon size={32} className={styles.loginIcon} />
        </div>
      </div>
    </div>
  )
}

export default SideBar