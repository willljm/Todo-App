import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'react-hot-toast'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../data/firebase'
import { motion } from 'framer-motion'

export const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success("Registro exitoso")
      setTimeout(() => {
        navigate("/")
      }, 2000)
    } catch (error) {
      toast.error("Error al registrar")
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-2 bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-xl border border-[#FF73FA]/20">
        {/* Lado Izquierdo - Banner */}
        <div className="relative p-8 bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 mb-8"
          >
            <div className="w-24 h-24 bg-[#FF73FA] rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              Únete a TODO
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-md mx-auto"
            >
              Comienza a organizar tus tareas de manera eficiente y mejora tu productividad
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-8"
          >
            <div className="flex items-center gap-2 text-[#FF73FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Gratis</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF73FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Rápido</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF73FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-gray-300">Colaborativo</span>
            </div>
          </motion.div>
        </div>

        {/* Lado Derecho - Formulario */}
        <div className="p-12 flex flex-col justify-center bg-[#1E1E1E]">
          <Toaster position="top-center" />
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Crear Cuenta
            </h2>
            <p className="text-gray-400">
              ¿Ya tienes una cuenta? {' '}
              <Link to="/" className="text-[#FF73FA] hover:underline font-medium">
                Inicia sesión
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-[#2D2D2D] border border-gray-700 focus:border-[#FF73FA] focus:ring-2 focus:ring-[#FF73FA] text-white"
                placeholder="email@example.com"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-[47px] h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>

            <div className="relative">
              <label className="block text-gray-300 mb-2">
                Contraseña
              </label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-[#2D2D2D] border border-gray-700 focus:border-[#FF73FA] focus:ring-2 focus:ring-[#FF73FA] text-white"
                placeholder="Ingrese su contraseña"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-[47px] h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF73FA] text-white py-3 rounded-lg font-medium hover:bg-[#FF73FA]/90 transition-all hover:scale-105 duration-300"
            >
              Crear Cuenta
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1E1E1E] text-gray-400">
                  Al registrarte, aceptas nuestros
                </span>
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm">
              <Link to="#" className="text-[#FF73FA] hover:underline">Términos y Condiciones</Link>
              {' '}&{' '}
              <Link to="#" className="text-[#FF73FA] hover:underline">Política de Privacidad</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
