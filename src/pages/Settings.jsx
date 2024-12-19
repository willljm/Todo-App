import React from 'react'
import { Link } from 'react-router-dom'

export const Settings = () => {
  return (
    <div>
        <header className='flex justify-center items-center'>
        <Link to="/PaginaPrincipal" className="text-white hover:text-[#FF73FA] transition-colors duration-200 absolute top-5 left-5">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </Link>
    <h1 className='text-white text-base font-light text-center mt-5'>Setting</h1>
        </header>
     <main>
        <div className='flex justify-start pl-5 pt-4 items-center gap-4'>
            <h2 className='text-white text-base font-bold text-center mt-5'>General</h2>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center px-5'>
            <div className='flex items-center gap-2 pt-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <h2 className='text-white text-base font-light'>Dark Mode</h2>
            </div>
            <label className="relative inline-flex items-center cursor-pointer py">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FF73FA]"></div>
            </label>
          </div>

          <div className='flex justify-between items-center px-5'>
            <div className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
              <h2 className='text-white text-base font-light'>Language</h2>
            </div>
            <select className="bg-[#121212] text-white rounded-md px-2 py-2 outline-none border-none">
              <option className='text-white text-xs font-light' value="en">English</option>
              <option className='text-white text-xs font-light' value="es">Spanish</option>
            </select>
          </div>

          <div className='flex justify-between items-center px-5 mt-4'>
            <Link to="/" className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
              </svg>
              <h2 className='text-red-500 text-base font-light'>Cerrar Sesión</h2>
            </Link>
          </div>
        </div>
     </main>
    
    </div>
  )
}

