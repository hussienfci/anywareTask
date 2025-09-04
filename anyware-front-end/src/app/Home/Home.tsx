"use client"
import React, { useState } from 'react'

function Home() {
     const [isHovered2, setIsHovered2] = useState(false);
     const [isHovered1, setIsHovered1] = useState(false);
  
  return (
    <div>
      

        <div className="grid grid-cols-2 mt-[15rem]">
            <a  href="/dashboard" className=' mx-auto  font-extrabold rounded-sm  hover:w-75 hover:text-center '>
            
               <button
              className="relative px-10 py-8 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 ease-out"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              {/* For background */}
              <div className={`
                absolute inset-0 bg-gradient-to-r from-[#154c79] to-[#2596be] 
                transition-all duration-500 ease-out
                ${isHovered1 ? 'translate-x-0' : '-translate-x-full'}
              `}></div>
              
            
              <div className={`
                absolute inset-0 bg-gradient-to-r from-[#76b5c5] to-teal-600 
                transition-all duration-500 ease-out
                ${isHovered1 ? 'translate-x-full' : 'translate-x-0'}
              `}></div>
              
              <span className="relative z-10"> login</span>
            </button>  
            
            </a>
            <a href="/Home"  className = "mx-auto font-extrabold rounded-sm transition delay-150 duration-150 ease-in-out hover:w-75 hover:text-center " >
                <button
              className="relative px-10 py-8 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 ease-out"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              {/* For background */}
              <div className={`
                absolute inset-0 bg-gradient-to-r from-[#154c79] to-[#2596be] 
                transition-all duration-500 ease-out
                ${isHovered2 ? 'translate-x-0' : '-translate-x-full'}
              `}></div>
              
            
              <div className={`
                absolute inset-0 bg-gradient-to-r from-[#76b5c5] to-teal-600 
                transition-all duration-500 ease-out
                ${isHovered2 ? 'translate-x-full' : 'translate-x-0'}
              `}></div>
              
              <span className="relative z-10"> Stay</span>
            </button>  
        
            
            </a>  
        </div>
  
    </div>
  )
}

export default Home
