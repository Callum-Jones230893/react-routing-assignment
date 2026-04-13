import { useContext } from "react"
import { useParams } from "react-router-dom"
import FullProductCard from "../../../components/fullProductCard"
import { AllProductContext } from "../../../context/AllProductContext"

const ProductInformation = () => {
  const {name} = useParams()
  const {allProductsArray} = useContext(AllProductContext)
  

  const filteredProductByName = name
  ? allProductsArray.filter(product => product.name.toLowerCase().replace(/\s+/g, '') === name.toLowerCase().replace(/\s+/g, ''))
  : allProductsArray

  return (
    <>
      {filteredProductByName.map((product, index) => 
        <FullProductCard key={index} product={product} />
      )}
    </>
  )
}

export default ProductInformation