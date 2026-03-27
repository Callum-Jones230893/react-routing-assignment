import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import styles from "./navigation.module.css"

const Navigation = () => {
  return (
    <nav className={styles.navigationWrapper}>
      {pages.map((navigation, index) => 
        <div key={index}>
          <NavLink className={styles.navItem} to={`/${navigation.page}`}>{navigation.name}</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navigation