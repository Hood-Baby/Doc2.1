import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      

      <div className='my-10 flex flex-col justify-center md:flex-row gap-1 mb-28 text-sm '>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 '>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'> 6115B Diepkloof zone5 soweto <br /> Mabele street,1864 </p>
          <p className='text-gray-500'>Tel: (+27)788 287-193 <br />Email: Joshua9825@outlook.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS at HOOD BABY</p>
          <p className='text-gray-500'>Learn more about our teams and Job openings</p>
          <button className='border border-black px-8 py-4 text-sm cursor-pointer hover:bg-primary hover:text-white '>Explore jobs</button>
        </div>

      </div>

    </div>
  )
}

export default Contact