import "./language/i18next"
import { useTranslation } from "react-i18next"
import { dinero } from "dinero.js"
import { SEK, USD, EUR } from "dinero.js/currencies"

const toggleLanguage = () => {
  // const { t, i18n } = useTranslation()

  const [language, setLanguage] = useState(i18n.language)
  const [currency, setCurrency] = useState(SEK)

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "sv" : "en"
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage)
  }

  useEffect(() => {
    setCurrency()
  },[language])
}
