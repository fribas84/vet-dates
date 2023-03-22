import React from 'react'
import Patient from './Patient'


const Patients = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
        <h2 className='font-black text-3xl text-center mb-5'>Patients</h2>
        <Patient />
        <Patient />
        <Patient />
        <Patient />
    
    </div>
    
  )
}

export default Patients