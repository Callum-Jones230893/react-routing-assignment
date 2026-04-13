import { createContext, useContext, useState } from "react";
import { AllProductContext } from "./AllProductContext"

export const FilteringContext = createContext()

export const FilteringProvider = ({children}) => {
  const { allProductsArray } = useContext(AllProductContext)
  
  const [filteredByPrice, setFilteredByPrice] = useState([])
  const [filteredByBrand, setFilteredByBrand] = useState([])
  const [filteredByColour, setFilteredByColour] = useState([])

  const filteredArray = [...allProductsArray]

  const priceFilter = filteredByPrice
    ? allProductsArray.filter(product => product.price >= filteredByPrice[0] && product.price <= filteredByPrice[1])
    : allProductsArray
  
  const brandFilter = filteredByBrand
    ? allProductsArray.filter(product => filteredByBrand.includes(product.brand))
    : allProductsArray

  const colourFilter = filteredByColour
    ? allProductsArray.filter(product => filteredByColour.includes(product.colour))
    : allProductsArray

  const handleBrand = (brand) => {
    setFilteredByBrand(selected =>
      selected.includes(brand)
        ? selected.filter(choice => choice !== brand)
        : [...selected, brand]
    )
  }

  return (
    <FilteringContext.Provider 
      value={{
          filteredByPrice,
          filteredByBrand,
          filteredByColour,
          setFilteredByPrice, 
          setFilteredByBrand, 
          setFilteredByColour, 
          priceFilter, 
          brandFilter, 
          colourFilter,
          handleBrand
        }}>
      {children}
    </FilteringContext.Provider>
  )
}