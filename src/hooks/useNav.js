import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

const useNav = () => {
  const [displayCart, setDisplayCart] = useState(false)
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displaySubMenu, setDisplaySubMenu] = useState(false)

  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow =  displayMenu || displayCart ? "hidden" : "unset"
    return () => { document.body.style.overflow = "unset"}
  }, [displayMenu, displayCart])

  useEffect(() => {
    setDisplayCart(false)
    setDisplayMenu(false)
    setDisplaySubMenu(false)
  }, [location])

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