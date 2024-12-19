import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF73FA] to-purple-600 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-2 bg-white dark:bg-[#121212] rounded-2xl overflow-hidden shadow-xl">
        {/* Lado Izquierdo - Imagen/Banner */}
        <div className="relative p-8 bg-[#FF73FA] flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Bienvenido de nuevo
            </h1>
            <p className="text-white/80 text-lg">
              Organiza tus tareas de manera eficiente y mantén el control de tu día
            </p>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <img 
              src="/task-management.svg" 
              alt="Task Management" 
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Lado Derecho - Formulario */}
        <div className="p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              ¿No tienes una cuenta? {' '}
              <Link to="/register" className="text-[#FF73FA] hover:underline">
                Regístrate
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-[#FF73FA] text-gray-900 dark:text-white"
                placeholder="tu@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#1E1E1E] border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-[#FF73FA] text-gray-900 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-[#FF73FA]" />
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  Recordarme
                </span>
              </label>
              <a href="#" className="text-[#FF73FA] hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF73FA] text-white py-3 rounded-lg font-medium hover:bg-[#FF73FA]/90 transition-colors"
            >
              Iniciar Sesión
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-[#121212] text-gray-500">
                  O continúa con
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1E1E1E] transition-colors"
              >
                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                <span className="text-gray-700 dark:text-gray-300">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1E1E1E] transition-colors"
              >
                <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                <span className="text-gray-700 dark:text-gray-300">GitHub</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}; 