import CheckoutContent from "../../components/CheckoutContent"

const Checkout = ({recommendedItems}) => {
  return (
    <CheckoutContent recommendedProducts={recommendedItems} />
  )
}

export default Checkout