"use client"
import React, { useState } from 'react';

const Tareas: React.FC = () => {
  const [tareas, setTareas] = useState<string[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState<string>('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  const borrarTarea = (index: number) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div className='flex flex-col items-center p-10 '>
      <h1 className='font-bold text-2xl mt-5 mb-3'>Gestor de tareas</h1>
      <div className='flex items-center mb-4'>
        <input
          type='text'
          className='border-2 text-slate-950 p-2 mr-2'
          placeholder='Agregar tarea'
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button className='bg-blue-950 text-white px-4 py-2 rounded' onClick={agregarTarea}>
          Agregar
        </button>
      </div>
      <ul className="flex flex-col flex-wrap ">
        {tareas.map((tarea: string, index: number) => (
          <li key={index} className='flex justify-between items-center border-b p-2'>
            {tarea}
            <button className='text-red-500 ml-5' onClick={() => borrarTarea(index)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;
