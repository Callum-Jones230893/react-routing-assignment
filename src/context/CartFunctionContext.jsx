import { createContext, useState, useEffect } from "react"

export const CartFunctionContext = createContext()

export const CartFunctionProvider = ({children}) => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0.00)

  const addToCart = (product) => {
    const exists = shoppingCart.find((item) => item.name === product.name)
    setShoppingCart(
      !exists ? [...shoppingCart, {...product, quantity: 1}]
              : shoppingCart.map(item => item.name === product.name ? {...item, quantity: item.quantity + 1} : item
      ) 
    )
  }

  const removeFromCart = (product) => {
    const exists = shoppingCart.find((item) => item.name === product.name)
    setShoppingCart( 
      exists.quantity > 1 ? shoppingCart.map(item => item.name === product.name ?  {...item, quantity: item.quantity - 1} : item)
                          : shoppingCart.filter(item => item.name !== product.name
      )
    )
  } 

  const calculateTotal = () => {
    let sum = 0
    shoppingCart.forEach(item => sum += item.price * item.quantity)
    setCartTotal(sum)
  }
  
  useEffect(() => {
    calculateTotal()
  }, [shoppingCart])

  return (
    <CartFunctionContext.Provider value={{shoppingCart, cartTotal, addToCart, removeFromCart, calculateTotal}}>
      {children}
    </CartFunctionContext.Provider>
  )
}