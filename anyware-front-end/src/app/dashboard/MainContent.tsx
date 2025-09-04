"use client" 

import { useDashboardData } from '@/hooks/useDashboardData';
import React from 'react'

function MainContent() {
  const { data, loading, error, refetch } = useDashboardData();

  console.log(data);
  
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
        <div className='bg-gray-200 p-5 rounded-lg col-span-1 row-span-1 lg:w-305 w-fit mt-5 mx-5 h-fit z-80'>
            <h1 className='inline-block text-6xl font-bold
            bg-gradient-to-r from-[#76b5c5] to-teal-600 
             bg-clip-text text-transparent'>EXAMS TIME</h1>
            <span className='mb-5 block'>Here we are, Are you ready to fight?
                Don't worry, we prepared some tips to 
               <br /> be ready for your exams.
               <br /><br />
                <p className='italic'>"Nothing happens,
                    until something moves"</p>   
            </span>
              <button
              className="relative px-10 py-5 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 ease-out"
                 >
              <div className={`
                absolute inset-0 bg-gradient-to-r from-[#154c79] to-[#2596be] 
                transition-all duration-500 ease-out
                `}></div>
              
            
              <div className={`
                absolute inset-0 bg-gradient-to-r from-[#76b5c5] to-teal-600 
                transition-all duration-500 ease-out
                `}></div>
              
              <span className="relative z-10"> View exams tips</span>
            </button> 
        </div>
        <div className='grid grid-cols-3 col-span-2 row-span-1'>
            <div className='col-span-2 bg-gray-200 p-5 rounded-lg  w-fit mt-5 mx-5 h-fit z-80'>
                <div className='flex gap-10'>
                    <h5 className='flex font-bold place-content-start'>Announcements</h5>
                    <h5 className='flex font-bold text-green-500'>ALL</h5>
                
                
                </div>
                <div className='space-y-4'>
                    {data?.announcements.map((announcement, index) => (
                        <div key={announcement._id || index} className='bg-white p-4 rounded-lg shadow-sm'>
                        <div className='flex items-start gap-3'>
                            <div className='bg-blue-100 p-2 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </div>
                            <div className='flex-1'>
                            <h6 className='font-semibold text-sm'>{announcement.author}</h6>
                            <p className='text-gray-600 text-sm mt-1'>{announcement.message}</p>
                            
                            </div>
                        </div>
                        </div>
                    ))}
                    
                    {data?.announcements.length === 0 && (
                        <p className='text-gray-500 text-center py-4'>No announcements available</p>
                    )}
                    </div>
                </div>
                
            <div className='col-span-1 bg-gray-200 p-5 rounded-lg  w-fit mt-5 mx-5 h-fit z-80'>Quiz</div>
        </div>
      
    </div>
  )
}

export default MainContent
