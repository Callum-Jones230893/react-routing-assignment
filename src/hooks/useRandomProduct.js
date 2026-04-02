import { useState, useEffect } from "react"
import useProducts from "./fetch"
import randomProduct from "../utils/randomProduct"

 const useRandomProduct = () => {
  const [heroProduct, setHeroProduct] = useState([])
  const [previewProducts, setPreviewProducts] = useState([])
  
  const { miniatures, paints, accessories } = useProducts()
  const allProductsArray = [...miniatures, ...paints, ...accessories]
  
  const randomHeroProduct = () => {
    const randomizedProduct = randomProduct(allProductsArray, 1)
    setHeroProduct(randomizedProduct)
  }

  const randomPreviewProducts = () => {
    const randomizedProduct = randomProduct(allProductsArray, 4)
    setPreviewProducts(randomizedProduct)
  }
  
  useEffect(() => {
    randomHeroProduct()
    randomPreviewProducts()
  }, [miniatures, paints, accessories])

  return {heroProduct, previewProducts}
}

export default useRandomProduct
 