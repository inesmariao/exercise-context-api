import React, { useContext } from 'react'
import { Context } from '../context/Context';

export const Contact = () => {

  const nameContext = useContext(Context);

  return (
    <div>
      <h1>Página de Contacto</h1>
      <p className='text-primary'>Nombre: {nameContext.name}</p>
      <p className='text-primary'>Ciudad: {nameContext.city}</p>
      <p className='text-primary'>Teléfono: {nameContext.phone}</p>
  </div>
  )
}
