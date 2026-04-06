import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { pages } from "../../data/data"
import { ShoppingBagIcon, ShoppingBagOpenIcon } from "@phosphor-icons/react";
import styles from "./navigation.module.css"
import DropDownMenu from "../DropDownMenu";
import ShoppingCart from "../ShoppingCart";

const Navigation = ({shoppingCart, setShoppingCart, productArray}) => {
  const [displayCart, setDisplayCart] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)

  useEffect(() => {
    document.body.style.overflow =  displayMenu ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset"}
  }, [displayMenu])

  const showCart = () => {
    setDisplayCart(!displayCart)
    setDisplayMenu(false)
  }

  const showMenu = () => {
    setDisplayMenu(!displayMenu)
    setDisplayCart(false)
  }

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
      />
    </>
  )
}

export default Navigation