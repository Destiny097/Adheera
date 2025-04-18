import React from 'react'
import art from '../assets/art5.png'
import art2 from '../assets/art2.png'
function Stories() {
  return (
    <div className='w-full h-fit bg-black flex flex-col items-center justify-center '>
        <div className='w-full h-full flex flex-col items-center justify-between'>

            <div className='w-full h-[8%] bg-[#ff3b6d] text-center flex items-center justify-center py-4'>
                <h2 className='font-bold text-4xl'>See how our Volunteers change lives — one story at a time!</h2>
            </div>
            
            <p className='text-white py-5'>*All the children have their names and other identifying features hidden to comply with Child Protection Policy</p>
        
            <div className='w-[90vw] h-[90%] grid grid-cols-3 grid-rows-4'>

                <div className='col-span-3 row-span-1 bg-red-600 rounded-xl m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'>
                    <img src={art} alt="Boy" className='w-[200px]' />
                </div>
                <div className='col-span-1 row-span-1 bg-green-600 rounded-xl m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'>
                <img src={art2} alt="Boy" className='w-[200px]' />
                </div>
                <div className='col-span-2 row-span-1 bg-yellow-600 rounded-xl  m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'>
                <img src={art} alt="Boy" className='w-[200px]' />
                </div> 
                <div className='col-span-2 row-span-1 bg-blue-600 rounded-xl  m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'>
                <img src={art2} alt="Boy" className='w-[200px]' />
                </div>
                <div className='col-span-1 row-span-1 bg-purple-600 rounded-xl  m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'>
                <img src={art2} alt="Boy" className='w-[200px]' />
                </div>
                <div className='col-span-3 row-span-1 bg-red-600 rounded-xl  m-1 transform hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'>
                <img src={art} alt="Boy" className='w-[200px]' />
                </div>

            </div>
        </div>

    </div>
  )
}

export default Stories;