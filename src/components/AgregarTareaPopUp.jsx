import React, { useState } from 'react';

export const AgregarTareaPopup = ({ isOpen, onClose, onAgregarTarea }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: Date.now(),
      titulo,
      descripcion,
      fecha,
      hora,
      completada: false,
      isFavorite: false
    };
    onAgregarTarea(nuevaTarea);
    setTitulo('');
    setDescripcion('');
    setFecha('');
    setHora('');
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-[#121212] p-6 rounded-xl w-[500px] border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-gray-900 dark:text-white text-2xl font-bold">Agregar Tarea</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Título */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Título</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Título de la tarea"
                className="w-full bg-gray-50 dark:bg-[#1E1E1E] text-gray-900 dark:text-white rounded-lg p-3 border border-gray-200 dark:border-gray-800"
                required
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Descripción</label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripción de la tarea"
                className="w-full bg-gray-50 dark:bg-[#1E1E1E] text-gray-900 dark:text-white rounded-lg p-3 border border-gray-200 dark:border-gray-800 min-h-[100px]"
                required
              />
            </div>

            {/* Fecha y Hora */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Fecha</label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-[#1E1E1E] text-gray-900 dark:text-white rounded-lg p-3 border border-gray-200 dark:border-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2">Hora</label>
                <input
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-[#1E1E1E] text-gray-900 dark:text-white rounded-lg p-3 border border-gray-200 dark:border-gray-800"
                  required
                />
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#FF73FA] text-white rounded-lg hover:bg-[#FF73FA]/90 transition-colors"
              >
                Agregar Tarea
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};