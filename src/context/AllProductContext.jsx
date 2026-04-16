import { createContext, useMemo } from "react";
import useProducts from "../hooks/fetch";

export const AllProductContext = createContext()

export const AllProductProvider = ({children}) => {
  const {miniatures, paints, accessories} = useProducts()
  const allProductsArray = [...miniatures, ...paints, ...accessories]

  const brandArray = useMemo(() => {
    const filtered = allProductsArray.filter(item => item.brand && item.brand !== "undefined")
    const uniqueBrands = Object.groupBy(filtered, ({brand}) => brand)
    return Array.from(Object.entries(uniqueBrands))
  }, [allProductsArray]) 

  const colourArray = useMemo(() => {
    const filtered = allProductsArray.filter(item => item.colour && item.colour !== "undefined")
    const uniqueColours = Object.groupBy(filtered, ({colour}) => colour)
    return Array.from(Object.entries(uniqueColours))
  }, [allProductsArray]) 

  return (
    <AllProductContext.Provider value={{allProductsArray, brandArray, colourArray}}>
      {children}
    </AllProductContext.Provider>
  )
}