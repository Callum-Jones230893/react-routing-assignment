import { NavLink } from "react-router-dom"
import styles from "./dropDownSubMenu.module.css"


const DropDownSubMenu = ({ products, toggleMenu, toggleSub, displaySubMenu}) => {

  const categoryGroups = Object.groupBy(products, ({category}) => category)
  const groupsArray = Array.from(Object.entries(categoryGroups))

  return (
    <div className={styles.subMenuSection}>
      <span className={styles.subMenuToggle} onClick={toggleSub}>Products</span>
      <div className={`${styles.subMenuWrapper} ${displaySubMenu ? styles.displaySubMenu : ``}`}>
        <div className={styles.navItemWrapper}>
            <NavLink className={styles.navItem} to="/products">All Products</NavLink>
            {groupsArray.map(([key, value], index) => (
              <div className={styles.navItem} key={index}>
                <NavLink to={`/products/${key}`} onClick={toggleMenu}>{value[0].category}</NavLink>
                <span className={styles.productCount}>{value.length}</span>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default DropDownSubMenu