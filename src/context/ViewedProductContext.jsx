import { createContext } from "react"
import useViewedProducts from "../hooks/useViewedProducts"

export const ViewedProductContext = createContext()

export const ViewedProductProvider = ({children}) => {
  const recommended = useViewedProducts()

  return (
    <ViewedProductContext.Provider value={{recommended}}>
      {children}
    </ViewedProductContext.Provider>
  )
}
