import { useParams } from "react-router-dom"
import ProductCard from "../../../components/ProductCard"

const ProductInformation = ({addToCart}) => {
  const { category, id } = useParams()

  return (
    <div>
      <ProductCard addItems={addToCart} shoppingCart={cart} updateCart={setCart} />
    </div>
  )
}

export default ProductInformation