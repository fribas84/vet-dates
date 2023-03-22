import React from 'react'

const Patient = () => {
  return (
    <div className='bg-white shadow-md m-3 rounded-lg py-5 px-5'>
        <p className='font-bold mb-1 text-gray-700 upercase'>Pet Name: {' '}
        <span className='font-normal normal-case'> Mara </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Owner's Name: {' '}
        <span className='font-normal normal-case'> Fernando </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Email: {' '}
        <span className='font-normal normal-case'> mail@mail.com </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Date: {' '}
        <span className='font-normal normal-case'> December 20 2022 </span>
        </p>
        
        <p className='font-bold mb-1 text-gray-700 upercase'>Symptoms: {' '}
        <span className='font-normal normal-case'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, harum odit temporibus quia fugit ex veniam incidunt nobis cumque rerum atque quasi aliquam provident, sed iste. Saepe dolore mollitia totam! </span>
        </p>
    </div>
  )
}

export default Patient;