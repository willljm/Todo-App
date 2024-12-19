import { Avatar } from '@mui/material'
import React, { useState, useMemo } from 'react'
import { Clock } from '../components/Clock'

import { Link } from 'react-router-dom'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AgregarTareaPopup } from '../components/AgregarTareaPopup'
import { ConfiguracionPopup } from '../components/ConfiguracionPopup'
import { Calendario } from '../components/Calendario'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { useTheme } from '../context/ThemeContext';

export const PaginaPrincipal = () => {
  const { isDarkMode } = useTheme();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [tareas, setTareas] = useState([]);
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTarea, setSelectedTarea] = useState(null);
  const [showTaskMenu, setShowTaskMenu] = useState({ show: false, x: 0, y: 0, tareaId: null });
  const [showCalendar, setShowCalendar] = useState(false);
  const [filtroActual, setFiltroActual] = useState('todas');

  const filteredTareas = tareas.filter(tarea => 
    tarea.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tareasFiltered = useMemo(() => {
    switch(filtroActual) {
      case 'completadas':
        return tareas.filter(t => t.completada);
      case 'pendientes':
        return tareas.filter(t => !t.completada);
      case 'favoritas':
        return tareas.filter(t => t.isFavorite);
      default:
        return tareas;
    }
  }, [tareas, filtroActual]);

  const handleTaskMenuClick = (e, tareaId) => {
    e.preventDefault();
    setShowTaskMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      tareaId
    });
  };

  const handleDeleteTask = (tareaId) => {
    setTareas(tareas.filter(tarea => tarea.id !== tareaId));
    setShowTaskMenu({ show: false, x: 0, y: 0, tareaId: null });
  };

  const handleToggleFavorite = (tareaId) => {
    setTareas(tareas.map(tarea => 
      tarea.id === tareaId ? { ...tarea, isFavorite: !tarea.isFavorite } : tarea
    ));
    setShowTaskMenu({ show: false, x: 0, y: 0, tareaId: null });
  };

  const handleEditTask = (tarea) => {
    setSelectedTarea(tarea);
    setIsPopupOpen(true);
    setShowTaskMenu({ show: false, x: 0, y: 0, tareaId: null });
  };

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    setIsPopupOpen(false);
  };

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  const getProximaTarea = () => {
    if (!tareas.length) return null;
    
    const ahora = new Date();
    const tareasConFecha = tareas.map(tarea => ({
      ...tarea,
      fechaCompleta: new Date(`${tarea.fecha}T${tarea.hora}`)
    }));
  
    const tareasFuturas = tareasConFecha.filter(tarea => tarea.fechaCompleta > ahora);
    
    if (!tareasFuturas.length) return null;
    
    return tareasFuturas.reduce((prev, curr) => 
      prev.fechaCompleta < curr.fechaCompleta ? prev : curr
    );
  };

  const completarTarea = (tareaId) => {
    setTareas(tareas.map(tarea => 
      tarea.id === tareaId 
        ? { ...tarea, completada: true }
        : tarea
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0A0A0A] transition-colors duration-300">

      <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#121212] p-6 shadow-lg transition-colors duration-300">
 
        <div className="mb-8 space-y-6">
          <h1 className="text-gray-900 dark:text-white text-2xl font-bold">TODO</h1>
   
          <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-[#1E1E1E] hover:bg-[#FF73FA]/10 transition-all duration-300">
            <Avatar
              alt="Wildeiner"
              src="/will.png"  
              className="w-12 h-12 border-2 border-[#FF73FA]"
            />
            <div>
              <h2 className="text-gray-900 dark:text-white font-medium">Wildeiner</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Usuario Premium</p>
            </div>
          </div>
        </div>
        
        {/* Menú */}
        <div className="space-y-4">
          <button className="w-full flex items-center gap-3 text-gray-900 dark:text-white hover:bg-[#FF73FA] p-3 rounded-lg transition-all duration-300 hover:scale-105 group">
            <DashboardIcon className="group-hover:text-white" />
            <span>Dashboard</span>
          </button>

          
          <button 
            onClick={() => setShowCalendar(true)}
            className="w-full flex items-center gap-3 text-gray-900 dark:text-white hover:bg-[#FF73FA] p-3 rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <CalendarMonthIcon className="group-hover:text-white" />
            <span>Calendario</span>
          </button>
          
          <button 
            onClick={() => setIsConfigOpen(true)}
            className="w-full flex items-center gap-3 text-gray-900 dark:text-white hover:bg-[#FF73FA] p-3 rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <SettingsIcon className="group-hover:text-white" />
            <span>Configuración</span>
          </button>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#FF73FA] to-purple-600">
            <h3 className="text-white font-medium mb-2">¿Necesitas ayuda?</h3>
            <p className="text-white/80 text-sm mb-3">Consulta nuestra guía de usuario</p>
            <button className="w-full bg-white text-[#FF73FA] py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300">
              Ver guía
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header simplificado */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Buscar tareas..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white dark:bg-[#121212] text-gray-900 dark:text-white rounded-lg py-2 px-4 w-96 transition-colors duration-300"
            />
            <NotificationsNoneIcon className="text-gray-900 dark:text-white cursor-pointer" />
          </div>
          <Clock />
        </header>

        {/* Welcome Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 p-6 rounded-xl">
            <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">Bienvenido, Wildeiner</h2>
            <p className="text-gray-600 dark:text-gray-400">Tienes {tareas.length} tareas pendientes hoy</p>
          </div>
          <div className="bg-[#FF73FA] p-6 rounded-xl">
            <h3 className="text-white text-xl font-bold mb-2">Próxima tarea</h3>
            {getProximaTarea() ? (
              <>
                <p className="text-white font-medium">{getProximaTarea().titulo}</p>
                <p className="text-white/80">{getProximaTarea().hora}</p>
              </>
            ) : (
              <p className="text-white">No hay tareas próximas</p>
            )}
          </div>
        </div>

        {/* Task Categories */}
        <div className="flex space-x-4 mb-8">
          {['todas', 'pendientes', 'completadas', 'favoritas'].map(filtro => (
            <button 
              key={filtro}
              onClick={() => setFiltroActual(filtro)}
              className={`
                px-6 py-2 rounded-lg transition-all transform hover:scale-105
                ${filtroActual === filtro 
                  ? 'bg-[#FF73FA] text-white' 
                  : 'bg-white dark:bg-[#121212] text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 hover:bg-[#FF73FA]/50'}
              `}
            >
              {filtro.charAt(0).toUpperCase() + filtro.slice(1)}
            </button>
          ))}
        </div>

        {/* Tasks Grid */}
        <div className="grid grid-cols-2 gap-6">
          {tareasFiltered.map((tarea) => (
            <div 
              key={tarea.id} 
              className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-102 hover:shadow-lg hover:shadow-[#FF73FA]/20"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <h3 className={`text-gray-900 dark:text-white font-semibold text-lg ${tarea.completada ? 'line-through text-gray-500' : ''}`}>
                    {tarea.titulo}
                  </h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleToggleFavorite(tarea.id)}
                      className={`p-2 rounded-full transition-all duration-300 hover:bg-[#FF73FA]/20
                        ${tarea.isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
                    >
                      <StarIcon className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => completarTarea(tarea.id)}
                      className={`p-2 rounded-full transition-all duration-300
                        ${tarea.completada 
                          ? 'bg-green-500 text-white' 
                          : 'text-gray-400 hover:bg-[#FF73FA]/20'}`}
                    >
                      <CheckIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">{tarea.descripcion}</p>
                
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {tarea.fecha} - {tarea.hora}
                  </p>
                  <button 
                    onClick={(e) => handleTaskMenuClick(e, tarea.id)} 
                    className="text-gray-400 hover:text-[#FF73FA] transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <button 
          onClick={() => setIsPopupOpen(true)}
          className="fixed bottom-8 right-8 bg-[#FF73FA] hover:bg-[#FF73FA]/90 text-white p-4 rounded-full shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
          </svg>
        </button>

        <AgregarTareaPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)}
          onAgregarTarea={agregarTarea} 
        />

        {showCalendar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-[#121212] p-6 rounded-xl w-[800px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white text-2xl">Calendario de Tareas</h2>
                <button 
                  onClick={() => setShowCalendar(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <Calendario tareas={tareas} />
            </div>
          </div>
        )}

        {/* Task Menu Popup */}
        {showTaskMenu.show && (
          <div 
            className="fixed bg-[#1E1E1E] rounded-lg shadow-lg py-2 w-48"
            style={{ 
              top: showTaskMenu.y, 
              left: showTaskMenu.x,
              zIndex: 1000 
            }}
          >
            <button 
              onClick={() => handleEditTask(tareas.find(t => t.id === showTaskMenu.tareaId))}
              className="w-full text-left px-4 py-2 text-white hover:bg-[#FF73FA] hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Editar</span>
            </button>
            <button 
              onClick={() => handleToggleFavorite(showTaskMenu.tareaId)}
              className="w-full text-left px-4 py-2 text-white hover:bg-[#FF73FA] hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                {tareas.find(t => t.id === showTaskMenu.tareaId)?.isFavorite ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="group-hover:text-white">Quitar de favoritos</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="group-hover:text-white">Añadir a favoritos</span>
                  </>
                )}
              </div>
            </button>
            <button 
              onClick={() => handleDeleteTask(showTaskMenu.tareaId)}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Eliminar</span>
            </button>
          </div>
        )}

        {/* Configuración Popup */}
        <ConfiguracionPopup 
          isOpen={isConfigOpen}
          onClose={() => setIsConfigOpen(false)}
          onLogout={() => {
            navigate('/');
          }}
        />
      </div>
    </div>
  )
}