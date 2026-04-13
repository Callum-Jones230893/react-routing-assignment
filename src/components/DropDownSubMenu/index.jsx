import { useMemo, useContext } from "react"
import { NavLink } from "react-router-dom"
import { AllProductContext } from "../../context/AllProductContext"
import styles from "./dropDownSubMenu.module.css"


const DropDownSubMenu = ({toggleMenu, toggleSub, displaySubMenu}) => {
  const {allProductsArray} = useContext(AllProductContext)

  const groupsArray = useMemo(() => {
    const categoryGroups = Object.groupBy(allProductsArray, ({category}) => category)
    return Array.from(Object.entries(categoryGroups))
  }, [allProductsArray])

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