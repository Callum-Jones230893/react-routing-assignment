import styles from "./sideBar.module.css"
import { categories } from "../../data/data"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <div className={styles.sideBarSection}>
        <div className={styles.sideBarItem}>placeholder for army icons</div>
      </div>
      <div className={styles.sideBarSection}>
        {categories.map((navigation, index) => 
          <div className={styles.navItem} key={index}>
            <NavLink to={`/products/${navigation.value}`}>{navigation.name}</NavLink>
          </div>
        )}
      </div>
      <div className={styles.sideBarSection}>
        <div className={styles.sideBarItem}>filter by prices placeholder</div>
      </div>
      <div className={styles.sideBarSection}>
        <div className={styles.iconContainer}>
          <span>Cart Placeholder</span>
          <span>Login Placeholder</span>
        </div>
      </div>
    </div>
  )
}

export default SideBar