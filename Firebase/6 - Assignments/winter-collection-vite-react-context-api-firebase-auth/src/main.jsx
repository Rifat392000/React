import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './provider/AuthProvider'
import { publicRouter } from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={publicRouter} />
    </AuthProvider>
  </StrictMode>,
)
