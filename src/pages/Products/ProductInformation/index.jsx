import { useParams } from "react-router-dom"
import FullProductCard from "../../../components/fullProductCard"

const ProductInformation = ({addToCart, allProducts, cart, setCart}) => {
  const { name } = useParams()

  const filteredProductByName = name
  ? allProducts.filter(product => product.name.toLowerCase().replace(/\s+/g, '') === name.toLowerCase().replace(/\s+/g, ''))
  : allProducts
  
  console.log(filteredProductByName)

  return (
    <>
      {filteredProductByName.map((product, index) => 
        <FullProductCard key={index} addItems={addToCart} shoppingCart={cart} updateCart={setCart} product={product} />
      )}
    </>
  )
}

export default ProductInformation