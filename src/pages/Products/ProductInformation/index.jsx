import { useParams } from "react-router-dom"
import ProductCard from "../../../components/ProductCard"

const ProductInformation = ({addToCart, allProducts}) => {
  const { category, id } = useParams()

  return (
    <div>
      <ProductCard addItems={addToCart} shoppingCart={cart} updateCart={setCart} productArray={allProducts} />
    </div>
  )
}

export default ProductInformation