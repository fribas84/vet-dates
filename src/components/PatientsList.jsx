import React from 'react'
import Patient from './Patient'


const PatientsList = ({patients}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll'>
        <h2 className='font-black text-3xl text-center mb-5'>Patients</h2>
        {
          patients.map((px)=>{
             return(
            <Patient
              petName={px.petName}
              owner={px.owner}
              email={px.email}
              date={px.date}
              symptoms={px.symptoms}/>
          )})
        }
        
    
    </div>
    
  )
}

export default PatientsList