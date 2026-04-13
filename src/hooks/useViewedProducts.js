import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const useViewedProducts = () => {
  const location = useLocation()
  
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

  const productCategory = viewed.map(path => path.split("/")[2])

  const categories = Object.groupBy(productCategory, category => category)
  const categoryCount = Object.fromEntries(Object.entries(categories).map(([key, value]) => [key, value.length]))

  console.log(categoryCount)

}

export default useViewedProducts