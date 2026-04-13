import { createContext } from "react";
import useProducts from "../hooks/fetch";

export const AllProductContext = createContext()

export const AllProductProvider = ({children}) => {
  const {miniatures, paints, accessories, loading} = useProducts()
  const allProductsArray = [...miniatures, ...paints, ...accessories]

  return (
    <AllProductContext.Provider value={{allProductsArray}}>
      {children}
    </AllProductContext.Provider>
  )
}