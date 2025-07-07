import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import { UserProvider } from './context/userContext'
import { ThemeProvider } from './context/themeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
    <App />
    </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
