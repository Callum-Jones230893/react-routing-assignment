import { useState, useEffect } from "react"
import supabase from "../utils/supabaseClient"

const useProducts = () => {
  const [loading, setLoading] = useState(true)
  const [miniatures, setMiniatures] = useState([])
  const [paints, setPaints] = useState([])
  const [accessories, setAccessories] = useState([])
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    const [minis, paint, accessories] = await Promise.all([
      supabase.from('Miniatures').select(``),
      supabase.from('Paints').select(``),
      supabase.from('Accessories').select(``),
    ])
    if (minis.error) setError("Failed to load miniatures")
      else setMiniatures(minis.data)
    
    if (paint.error) setError("Failed to load paints.")
      else setPaints(paint.data)
    
    if (accessories.error) setError("Failed to load accessories.")
      else setAccessories(accessories.data)
    
    setLoading(false)
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  
return {loading, miniatures, paints, accessories, error}
}

export default useProducts