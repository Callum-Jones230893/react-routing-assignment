import { useMemo, useContext } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { UserCircleIcon, ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react"
import { AllProductContext } from "../../context/AllProductContext"
import styles from "./sideBar.module.css"
import Filters from "../Filters"

const SideBar = () => {
  const {allProductsArray} = useContext(AllProductContext)

  const location = useLocation()
  const isCheckout = location.pathname === "/checkout"

  const groupsArray = useMemo(() => {
    const categoryGroups = Object.groupBy(allProductsArray, ({category}) => category)
    return Array.from(Object.entries(categoryGroups))
  }, [allProductsArray])

  return (
    <div className={styles.sideBarWrapper}>
      <div className={styles.sideBarContent}>
        <div className={styles.sideBarSection}>
          <div className={styles.sideBarItem}>placeholder for army icons</div>
        </div>
        <div className={styles.sideBarSection}>
          <NavLink className={styles.navItem} to={"/products"}>All Products</NavLink>
          {groupsArray.map(([key, value], index) => (
            <div className={`${styles.navItem} ${styles.sideBarItem}`} key={index}>
              <NavLink className={({ isActive }) => isActive ? `${styles.activeNav} ${styles.navItem}` : styles.navItem} to={`/products/${key.toLowerCase()}`}>{value[0].category}</NavLink>
              <span className={styles.productCount}>{value.length}</span>
            </div>
          ))}
        </div>
        <div className={styles.sideBarSection}>
          <Filters />
        </div>
        <div className={styles.sideBarSection}>
          <div className={styles.iconContainer}>
            {isCheckout
              ? <NavLink to={"/"}><ShoppingBagOpenIcon size={28}  className={styles.cartIcon} /></NavLink> 
              : <NavLink to={"/checkout"}><ShoppingBagIcon size={28}  className={styles.cartIcon} /></NavLink>
            }
            {/* <UserCircleIcon size={32} className={styles.loginIcon} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar