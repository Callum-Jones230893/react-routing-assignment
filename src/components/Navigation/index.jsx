import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react";
import useNav from "../../hooks/useNav";
import styles from "./navigation.module.css"
import DropDownMenu from "../DropDownMenu";
import ShoppingCart from "../ShoppingCart";

const Navigation = ({productArray}) => {
  const {displayCart, displayMenu, displaySubMenu, showCart, showMenu, showSubMenu} = useNav();

  return (
    <>
      <nav className={styles.navigationWrapper}>
        {pages.map((navigation, index) => (
          <div key={index}>
            <NavLink className={styles.navItem} to={`/${navigation.page}`}>{navigation.name}</NavLink>
          </div>
        ))}
        <div>
          {!displayCart ? <ShoppingBagIcon size={28}  className={styles.cartIcon} onClick={showCart} />
                        : <ShoppingBagOpenIcon size={28} className={styles.cartIcon} onClick={showCart} />}
          <ShoppingCart displayed={displayCart} />
        </div>
      </nav>
      <DropDownMenu
        displaySub={displaySubMenu}
        menuDisplay={displayMenu}
        products={productArray}
        toggleMenu={showMenu}
        toggleSubMenu={showSubMenu}
      />
    </>
  )
}

export default Navigation