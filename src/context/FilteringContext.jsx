import { createContext, useContext, useState, useMemo } from "react";
import { AllProductContext } from "./AllProductContext"

export const FilteringContext = createContext()

export const FilteringProvider = ({children}) => {
  const { allProductsArray } = useContext(AllProductContext)
  
  const [filteredByBrand, setFilteredByBrand] = useState([])
  const [filteredByColour, setFilteredByColour] = useState([])

  const filteredProducts = useMemo(() => {
    let filteredArray = [...allProductsArray];
    
    if (filteredByBrand.length > 0) {
      filteredArray = filteredArray.filter(product => 
        filteredByBrand.includes(product.brand)
      )
    }

    if (filteredByColour.length > 0) {
      filteredArray = filteredArray.filter(product => 
        filteredByColour.includes(product.colour)
      )
    }

    return filteredArray
  }, [allProductsArray, filteredByBrand, filteredByColour])

  const handleBrand = (brand) => {
    setFilteredByBrand(selected =>
      selected.includes(brand)
        ? selected.filter(choice => choice !== brand)
        : [...selected, brand]
    )
  }

  const handleColour = (colour) => {
    setFilteredByColour(selected =>
      selected.includes(colour)
        ? selected.filter(choice => choice !== colour)
        : [...selected, colour]
    )
  }

  return (
    <FilteringContext.Provider 
      value={{
          filteredProducts,
          filteredByBrand,
          filteredByColour,
          handleBrand,
          handleColour
        }}>
      {children}
    </FilteringContext.Provider>
  )
}