import { useNavigate } from "react-router-dom";

const ReturnButton = () => {
  const navigate = useNavigate()
  return (
    <span onClick={() => navigate(-1)}>Back</span>
  )
}

export default ReturnButton