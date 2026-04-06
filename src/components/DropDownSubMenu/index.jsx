import { useState } from "react"
import { NavLink } from "react-router-dom"
import styles from "./dropDownSubMenu.module.css"


const DropDownSubMenu = ({ products, toggleMenu }) => {
  const [displaySubMenu, setDisplaySubMenu] = useState(false)

  const categoryGroups = Object.groupBy(products, ({category}) => category)
  const groupsArray = Array.from(Object.entries(categoryGroups))

  return (
    <div className={styles.subMenuSection}>
      <div className={styles.navItemWrapper} onClick={() => setDisplaySubMenu(!displaySubMenu)}>
        Products
      </div>
      {displaySubMenu &&
        <div className={styles.subMenuWrapper}>
          <NavLink className={styles.navItem} to="/products" onClick={toggleMenu}>All Products</NavLink>
          {groupsArray.map(([key, value], index) => (
            <div className={styles.navItem} key={index}>
              <NavLink to={`/products/${key}`} onClick={toggleMenu}>{value[0].category}</NavLink>
              <span className={styles.productCount}>{value.length}</span>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default DropDownSubMenu