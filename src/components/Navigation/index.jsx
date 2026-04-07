import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react";
import useNav from "../../hooks/useNav";
import styles from "./navigation.module.css"
import DropDownMenu from "../DropDownMenu";
import ShoppingCart from "../ShoppingCart";

const Navigation = ({shoppingCart, setShoppingCart, productArray}) => {
  const {displayCart, displayMenu, displaySubMenu, showCart, showMenu, showSubMenu} = useNav();

  // const [displayCart, setDisplayCart] = useState(false)
  // const [displayMenu, setDisplayMenu] = useState(false)
  // const [displaySubMenu, setDisplaySubMenu] = useState(false)

  // useEffect(() => {
  //   document.body.style.overflow =  displayMenu ? "hidden" : "unset"
  //   return () => { document.body.style.overflow = "unset"}
  // }, [displayMenu])

  // const showCart = () => {
  //   setDisplayCart(!displayCart)
  //   setDisplayMenu(false)
  // }

  // const showMenu = () => {
  //   setDisplayMenu(!displayMenu)
  //   setDisplayCart(false)
  //   setDisplaySubMenu(false)
  // }

  // const showSubMenu = () => {
  //   setDisplaySubMenu(!displaySubMenu)
  // }

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
          <ShoppingCart displayed={displayCart} cart={shoppingCart} updateShoppingCart={setShoppingCart} />
        </div>
      </nav>
      <DropDownMenu
        toggleCart={showCart}
        menuDisplay={displayMenu}
        toggleMenu={showMenu}
        products={productArray}
        toggleSubMenu={showSubMenu}
        displaySub={displaySubMenu}
      />
    </>
  )
}

export default Navigation