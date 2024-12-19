import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export const ConfiguracionPopup = ({ isOpen, onClose }) => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const [language, setLanguage] = useState('es'); // español por defecto
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes agregar cualquier lógica de cierre de sesión necesaria
    navigate('/');
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-[#121212] p-6 rounded-xl w-[400px] border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-gray-900 dark:text-white text-2xl font-bold">Configuración</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            {/* Modo Oscuro */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1E1E1E] transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-gray-900 dark:text-white">Modo Oscuro</span>
              </div>
              <Switch 
                checked={isDarkMode}
                onChange={() => setIsDarkMode(!isDarkMode)}
                sx={{
                  '& .MuiSwitch-switchBase.Mui-checked': {
                    color: '#FF73FA',
                  },
                  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                    backgroundColor: '#FF73FA',
                  },
                }}
              />
            </div>

            {/* Idioma */}
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1E1E1E] transition-colors">
              <div className="flex items-center gap-3">
                <LanguageIcon className="text-gray-900 dark:text-white" />
                <span className="text-gray-900 dark:text-white">Idioma</span>
              </div>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-50 dark:bg-[#1E1E1E] text-gray-900 dark:text-white rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#FF73FA] border border-gray-200 dark:border-gray-800"
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>

            {/* Cerrar Sesión */}
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
            >
              <div className="flex items-center gap-3">
                <LogoutIcon />
                <span>Cerrar Sesión</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  );
};