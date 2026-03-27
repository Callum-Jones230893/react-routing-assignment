import styles from "./sideBar.module.css"
import { categories } from "../../data/data"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <div className={styles.sideBarWrapper}>
      <div>
        <span>placeholder for army icons</span>
      </div>
      {categories.map((navigation, index) => 
        <div className={styles.navItem} key={index}>
          <NavLink to={`/products/${navigation.value}`}>{navigation.name}</NavLink>
        </div>
      )}
      <div>
        <span>filter by prices placeholder</span>
      </div>
      <div className={styles.iconContainer}>
        <span>Cart Placeholder</span>
        <span>Login Placeholder</span>
      </div>
    </div>
  )
}

export default SideBar