import React from 'react'


const Patient = ({petName,owner,email,date,symptoms}) => {
  return (
    <div className='bg-white shadow-md m-3 rounded-lg py-5 px-5'>
        <p className='font-bold mb-1 text-gray-700 upercase'>Pet Name: {' '}
        <span className='font-normal normal-case'> {petName} </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Owner's Name: {' '}
        <span className='font-normal normal-case'> {owner} </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Email: {' '}
        <span className='font-normal normal-case'> {email} </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Date: {' '}
        <span className='font-normal normal-case'>{date}</span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Symptoms: {' '}
        <span className='font-normal normal-case'>{symptoms}</span>
        </p>
    </div>
  )
}

export default Patient;