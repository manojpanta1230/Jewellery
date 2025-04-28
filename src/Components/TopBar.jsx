import React from 'react'
import { FaBars } from 'react-icons/fa6'

const TopBar = () => {
  return (
   <>
   <div className="w-full bg-white h-16 shadow-2xl text-2xl  shadow-amber-50 flex items-center justify-between px-4"> 
    <FaBars/>
   </div>
   </>
  )
}


export default TopBar