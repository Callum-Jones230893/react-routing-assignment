import { useState, useEffect } from "react"
import supabase from "../utils/supabaseClient"

const useProducts = () => {

  const [miniatures, setMiniatures] = useState([])
  const [paints, setPaints] = useState([])
  const [paintingAccessories, setPaintingAccessories] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {

    const [minis, paint, accessories] = await Promise.all([
      supabase.from('Miniatures').select(``),
      supabase.from('Paints').select(``),
      supabase.from('Painting_accessories').select(``), 
    ])
    
    if (minis.error) setError(minis.error)
    else setMiniatures(minis.data)

    if (paint.error) setError(paint.error)
    else setPaints(paint.data)

    if (accessories.error) setError(accessories.error)
    else setPaintingAccessories(accessories.data)

    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { miniatures, paints, paintingAccessories, error, loading }
}

export default useProducts