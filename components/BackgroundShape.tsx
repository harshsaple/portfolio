import React from 'react'
import { motion } from "framer-motion"

function BackgroundShape() {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{scale:[1,1.5,2.5,3,1] , opacity:[0.2,0.4,0.6,0.8,,1],borderRadius:["20%","20%","50%","80%","20%"]}}
    transition={{duration:2.5}}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-amber-500 rounded-full h-[300px] w-[300px] mt-80 animate-ping'/>
        <div className='absolute border border-amber-200 opacity-5 rounded-full h-[500px] w-[500px] mt-80'/> 
        <div className='absolute border border-amber-200 opacity-5 rounded-full h-[600px] w-[600px] mt-80 animate-pulse hidden md:inline-flex'/> 
    </motion.div>
  )
}

export default BackgroundShape