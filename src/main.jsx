import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FoodcontextProvider } from './context/Foodcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <FoodcontextProvider>
    <App />
    </FoodcontextProvider>
    </BrowserRouter>

)
