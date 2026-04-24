import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react";
import useNav from "../../hooks/useNav";
import styles from "./navigation.module.css"
import DropDownMenu from "../DropDownMenu";
import ShoppingCart from "../ShoppingCart";

const Navigation = () => {
  const {
    displayCart, 
    displayMenu, 
    displaySubMenu, 
    setDisplaySubMenu, 
    setDisplayMenu, 
    showCart, showMenu, 
    showSubMenu, 
    setDisplayCart
  } = useNav();

  return (
    <>
      <nav className={styles.navigationWrapper}>
        {pages.map((navigation, index) => (
          <div key={index}>
            <NavLink className={({ isActive }) => isActive ? `${styles.activeNav} ${styles.navItem}` : styles.navItem} to={`/${navigation.page}`}>{navigation.name}</NavLink>
          </div>
        ))}
        <div>
          {!displayCart ? <ShoppingBagIcon size={28}  className={styles.cartIcon} onClick={showCart} />
                        : <ShoppingBagOpenIcon size={28} className={styles.cartIcon} onClick={showCart} />}
          <ShoppingCart displayed={displayCart} updateDisplayed={setDisplayCart} />
        </div>
      </nav>
      <DropDownMenu
        displaySub={displaySubMenu}
        menuDisplay={displayMenu}
        toggleMenu={showMenu}
        toggleSubMenu={showSubMenu}
        updateMenu={setDisplayMenu}
        updateSubMenu={setDisplaySubMenu}
      />
    </>
  )
}

export default Navigation