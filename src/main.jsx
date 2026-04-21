import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { CartFunctionProvider } from './context/CartFunctionContext'
import { ViewedProductProvider } from './context/ViewedProductContext'
import { AllProductProvider } from './context/AllProductContext'
import { FilteringProvider } from './context/FilteringContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AllProductProvider>
        <ViewedProductProvider>
          <FilteringProvider>
            <CartFunctionProvider>
              <StrictMode>
                <App />
              </StrictMode>
          </CartFunctionProvider>
        </FilteringProvider>
      </ViewedProductProvider>
    </AllProductProvider>
  </BrowserRouter>
)
