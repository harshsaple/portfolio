'use client'
import React from 'react'
import { motion } from "framer-motion"
import { Cursor , useTypewriter } from 'react-simple-typewriter'
import BackgroundShape from './BackgroundShape'
import Link from 'next/link'

function Hero() {

    const [text, count] = useTypewriter({
        words: ["Hello! My Name is Harsh Saple!","ILoveToTravel.java","<codeMoreDebugLess />"],
        loop: true,
        deleteSpeed: 60,
        delaySpeed: 2500,
      })

  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-4'>
        
        <BackgroundShape/>

        <motion.div 
        initial={{y: -500, opacity: 0, scale: 0.5}}
        animate={{y: 0,opacity: 1,scale: 1}}
        transition={{duration: 1.5}}
        className='flex flex-row items-center'>
            {/*Socials*/}
            <img src={'/Harsh_Saple.jpg'} alt="Harsh's image" className='relative rounded-full h-40 w-40 mx-auto object-cover m-4'/>
        </motion.div>

        <div className='z-20'>
            <h2 className='uppercase text-sm font-extralight tracking-[15px] pb-4'>Software Engineer</h2>
            
            <h1 className='text-3xl lg:text-5xl font-semi-bold text-white px-10'>
                <span className='mr-3'>
                    {text}
                    <Cursor cursorColor='blue' cursorBlinking />
                </span>
            </h1>

            <div>
                <Link href="#about">
                    <button className='heroButton'>About Me</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>

            </div>
        </div>
        
    </div>
  )
}

export default Hero