'use client'
import React from 'react'
import { Cursor , useTypewriter } from 'react-simple-typewriter'
import BackgroundShape from './BackgroundShape'

function Hero() {

    const [text, count] = useTypewriter({
        words: ["Hello! My Name is Harsh Saple","ILoveToTravel.java","butLoveToCodeMore(String language)"],
        loop: true,
        deleteSpeed: 60,
        delaySpeed: 2500,
      })

  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
        
        <BackgroundShape />

        <img className='relative rounded-fill h-32 w-32 mx-auto' src='https://drive.google.com/file/d/16zt4y70YDXpNhjXbFw_T9ogpzyEysZet/view?usp=drive_link'/>

        <h1 className='text-4xl font-semi-bold text-white'>
            <span>
                {text}
                <Cursor cursorColor='blue' cursorBlinking />
            </span>
        </h1>
    </div>
  )
}

export default Hero