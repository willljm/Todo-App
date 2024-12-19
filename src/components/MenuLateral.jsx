import React from 'react'

export const MenuLateral = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div className="bg-[#1E1E1E] rounded-t-2xl p-6 w-full max-w-md animate-slide-up">
        <div className="w-12 h-1 bg-gray-500 rounded-full mx-auto mb-4" />
        
        <div className="flex flex-col gap-4">
          <button 
            className="text-white hover:text-[#FF73FA] transition-colors duration-200 flex items-center gap-3 text-lg py-3 px-4 rounded-xl bg-[#2C2C2E]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Favoritos
          </button>
          
          <button 
            className="text-red-500 transition-colors duration-200 flex items-center gap-3 text-lg py-3 px-4 rounded-xl bg-[#2C2C2E]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Eliminar
          </button>
          
          <button
            onClick={onClose}
            className="text-[#FF73FA] text-lg font-medium py-3 px-4 rounded-xl bg-[#2C2C2E] mt-2"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}
