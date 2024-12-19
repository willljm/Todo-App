import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../data/firebase'
import "./Inicio.css"
import { toast, Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'

export const HomeWorkOutlineRounded = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M17 9h2V7h-2v2Zm0 4h2v-2h-2v2Zm0 4h2v-2h-2v2Zm0 4v-2h4V5h-9v1.4l-2-1.45q0-.8.588-1.375T12 3h9q.825 0 1.413.588T23 5v14q0 .825-.588 1.413T21 21h-4Zm0-9.975ZM1 20v-7.975q0-.5.225-.925t.625-.7l5-3.575Q7.375 6.45 8 6.45t1.15.375l5 3.575q.4.275.625.7t.225.925V20q0 .425-.288.713T14 21H9v-5H7v5H2q-.425 0-.713-.288T1 20Zm2-1h2v-5h6v5h2v-7L8 8.45L3 12v7Zm8 0v-5H5v5v-5h6v5Z"></path>
  </svg>
)

export const Inicio = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("")
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      const user = userCredential.user;
      setTimeout(() => {
        navigate('/PaginaPrincipal');
      }, 3000);
      toast.success('Login Exitoso');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("Error al iniciar sesion");
    })
  }

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setTimeout(() => {
        navigate('/PaginaPrincipal');  
      }, 2000);
      toast.success('Login Exitoso');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      toast.error("No se pudo iniciar sesión");
      console.log(errorCode);
      console.log(errorMessage);
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            
            <motion.h1 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold text-white mb-4"
            >
              TODO
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg max-w-md mx-auto"
            >
              Organiza tus tareas de manera eficiente y mantén el control de tu día
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
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Simple</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF73FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-[#FF73FA]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Rápido</span>
            </div>
          </motion.div>
        </div>

        {/* Lado Derecho - Formulario */}
        <div className="p-12 flex flex-col justify-center bg-[#1E1E1E]">
          <Toaster position="top-center" />
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-gray-400">
              Bienvenido de nuevo
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <label className="block text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input 
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-[#2D2D2D] border border-gray-700 focus:border-[#FF73FA] focus:ring-2 focus:ring-[#FF73FA] text-white"
                placeholder="email@example.com"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-[46px] h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
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
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-lg bg-[#2D2D2D] border border-gray-700 focus:border-[#FF73FA] focus:ring-2 focus:ring-[#FF73FA] text-white"
                placeholder="Contraseña"
                required
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-[45px] h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF73FA] text-white py-3 rounded-lg font-medium hover:bg-[#FF73FA]/90 transition-all hover:scale-105 duration-300"
            >
              Iniciar Sesión
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1E1E1E] text-gray-400">
                  O continúa con
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogle}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-700 rounded-lg hover:bg-[#2D2D2D] transition-all hover:scale-105 duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-white">Continuar con Google</span>
            </button>

            <p className="text-center text-gray-400">
              ¿No tienes una cuenta? {' '}
              <Link to="/Register" className="text-[#FF73FA] hover:underline font-medium">
                Regístrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}











