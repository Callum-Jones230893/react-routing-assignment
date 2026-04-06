import { NavLink } from "react-router-dom"
import styles from "./sideBar.module.css"
import { UserCircleIcon, ShoppingBagIcon } from "@phosphor-icons/react"

const SideBar = ({products}) => {
  const categoryGroups = Object.groupBy(products, ({category}) => category)
  const groupsArray = Array.from(Object.entries(categoryGroups))

  return (
    <div className={styles.sideBarWrapper}>
      <div className={styles.sideBarContent}>
        <div className={styles.sideBarSection}>
          <div className={styles.sideBarItem}>placeholder for army icons</div>
        </div>
        <div className={styles.sideBarSection}>
          <NavLink to={"/products"}>All Products</NavLink>
          {groupsArray.map(([key, value], index) => (
            <div className={`${styles.navItem} ${styles.sideBarItem}`} key={index}>
              <NavLink to={`/products/${key}`}>{value[0].category}</NavLink>
              <span className={styles.productCount}>{value.length}</span>
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
    </div>
  )
}

export default SideBar