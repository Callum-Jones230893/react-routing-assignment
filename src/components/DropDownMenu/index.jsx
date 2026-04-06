import { ArrowFatLinesDownIcon, ArrowFatLinesUpIcon } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import styles from "./dropDownMenu.module.css"

const DropDownMenu = ({menuDisplay, toggleCart, toggleMenu, products}) => {
  // const categoryGroups = Object.groupBy(products, ({category}) => category)
  // const groupsArray = Array.from(Object.entries(categoryGroups))

  return (
    <div className={styles.dropDownWrapper}>
      {!menuDisplay ? <ArrowFatLinesDownIcon size={28} onClick={toggleMenu} />
                    : <ArrowFatLinesUpIcon size={28} onClick={toggleMenu} />}
      <div className={`${styles.dropDownContent} ${menuDisplay ? styles.displayDropDown : ``}`}>
        {pages.map((navigation, index) => (
          <div key={index}>
            <NavLink className={styles.navItem} to={`/${navigation.page}`}>{navigation.name}</NavLink>
          </div>
        ))}
      {/* <div className={styles.sideBarSection}>
        <NavLink to={"/products"}>All Products</NavLink>
        {groupsArray.map(([key, value], index) => (
          <div className={`${styles.navItem} ${styles.sideBarItem}`} key={index}>
            <NavLink to={`/products/${key}`}>{value[0].category}</NavLink>
            <span className={styles.productCount}>{value.length}</span>
          </div>
        ))}
      </div> */}
      </div>
    </div>
  )
}

export default DropDownMenu