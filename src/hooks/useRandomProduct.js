import { useState, useEffect } from "react"
import useProducts from "./fetch"
import randomProduct from "../utils/randomProduct"

 const useRandomProduct = () => {
  const [heroProduct, setHeroProduct] = useState([])
  const [previewProducts, setPreviewProducts] = useState([])
  
  const { miniatures, paints, paintingAccessories } = useProducts()
  const allProductsArray = [...miniatures, ...paints, ...paintingAccessories]
  
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
  }, [miniatures, paints, paintingAccessories])

  return {heroProduct, previewProducts}
}

export default useRandomProduct
 