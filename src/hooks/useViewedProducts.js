import { useState, useEffect, useContext } from "react"
import { useLocation } from "react-router-dom"
import { AllProductContext } from "../context/AllProductContext"
import randomProduct from "../utils/randomProduct"

const useViewedProducts = () => {
  const location = useLocation()
  const [mostViewedCategory, setMostViewedCategory] = useState(null)
  const [secondMostViewedCategory, setSecondMostViewedCategory] = useState(null)
  const [recommended, setRecommended] = useState([])
  
  const [viewed, setViewed] = useState(() => {
    const stored = localStorage.getItem("recommended")
    return stored ? JSON.parse(stored) : []
  })
  
  useEffect(() => {
    const path = location.pathname
    
    setViewed(recent => 
      path.startsWith("/products/") && !recent.includes(path)
      ? [...recent, path].slice(-10)
      : recent
    ) 
  }, [location.pathname])
  
  useEffect(() => {
    localStorage.setItem("recommended", JSON.stringify(viewed))
  }, [viewed])
  
  useEffect(() => {
  const categoryCount = {}

  for (const path of viewed) {
    const category = path.split("/")[2]

    if (category) {
      categoryCount[category] = (categoryCount[category] || 0) + 1
    }
  }
  
  let mostViewed = null
  let secondMostViewed = null 
  let mostViewedCount = 0
  let secondMostViewedCount = 0
  
  for (const [category, count] of Object.entries(categoryCount)) {
    if (count > mostViewedCount) {
      secondMostViewed = mostViewed
      secondMostViewedCount = mostViewedCount
      
      mostViewedCount = count
      mostViewed = category
    } else if (count > secondMostViewedCount) {
      secondMostViewedCount = count
      secondMostViewed = category
    }
  }
    setMostViewedCategory(mostViewed)
    setSecondMostViewedCategory(secondMostViewed)
  }, [viewed])

  const { allProductsArray } = useContext(AllProductContext)
  
  const mostViewedFilter = mostViewedCategory
    ? allProductsArray.filter(product => product.category === mostViewedCategory)
    : allProductsArray

  const secondMostFilter = secondMostViewedCategory
    ? allProductsArray.filter(product => product.category === secondMostViewedCategory)
    : allProductsArray

  useEffect(() => {
    if(!mostViewedCategory && !secondMostViewedCategory) {
      const fallback = randomProduct(allProductsArray, 4)
      setRecommended(fallback)

      return 
    } 

    const mostLooked = randomProduct(mostViewedFilter, 3)
    const secondLooked = secondMostViewedCategory
      ? randomProduct(secondMostFilter, 1)
      : []

    setRecommended([...mostLooked, ...secondLooked])
  }, [mostViewedCategory, secondMostViewedCategory, allProductsArray])

  // console.log(recommended)
  return {recommended}
}

export default useViewedProducts