import useProducts from "../hooks/fetch"


const heroProduct = (number) => {
  const { miniatures, paints, paintingAccessories } = useProducts()
  const allProducts = [...miniatures, ...paints, ...paintingAccessories]
  
  const randomizedProduct = [...allProducts].sort(() => 0.5 - Math.random())
  return number ? randomizedProduct.slice(0, number) 
                : heroProduct
}

export default heroProduct