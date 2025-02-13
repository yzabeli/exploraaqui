import React from 'react'
import Rotas from './Router'
import AuthProvider from './Contexts/authContext'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </AuthProvider>

  )
}

