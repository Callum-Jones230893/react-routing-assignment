import { useState, useEffect } from "react";

const useNav = () => {
  const [displayCart, setDisplayCart] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displaySubMenu, setDisplaySubMenu] = useState(false)

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
    setDisplaySubMenu(false)
  }

  const showSubMenu = () => {
    setDisplaySubMenu(!displaySubMenu)
  }

  return {
    displayCart,
    displayMenu,
    displaySubMenu,
    showCart,
    showMenu,
    showSubMenu
  }
}

export default useNav