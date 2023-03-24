import React from 'react'


const Patient = ({patient,setPatient, deletePatient}) => {

  return (
    <div className='bg-white shadow-md m-3 rounded-lg py-5 px-5'>
        <p className='font-bold mb-1 text-gray-700 upercase'>Pet Name: {' '}
        <span className='font-normal normal-case'> {patient.petName} </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Owner's Name: {' '}
        <span className='font-normal normal-case'> {patient.owner} </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Email: {' '}
        <span className='font-normal normal-case'> {patient.email} </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Date: {' '}
        <span className='font-normal normal-case'>{patient.date}</span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Symptoms: {' '}
        <span className='font-normal normal-case'>{patient.symptoms}</span>
        </p>

        <div className='flex justify-between mt-5'>
          <button
            type='button'
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
            onClick={()=> setPatient(patient)}
            >Edit</button>

          <button
            type='button'
            className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
            onClick={()=>deletePatient(patient.key)}
            >Delete</button>
        </div>
    </div>
  )
}

export default Patient;