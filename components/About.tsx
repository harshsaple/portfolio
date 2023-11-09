'use client'
import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity : 1}}
        className='flex flex-col relative h-screen text-center md:text-left 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] test-gray-500 text-2xl '>
                About Me
            </h3>


    <motion.img
    initial={{
        x:-200,
    }}
    transition={{
        duration:1.2,
        opacity: 0
    }}
    whileInView={{opacity : 1 , x:0}}
    viewport={{once: true}}
    src='/Harsh_Saple.jpg'
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
    object-cover md:rounded-lg md: w-56 md: h-56 xl:w-[500px] xl:h-[480px] xl:rounded-3xl'
    />

    <div className="space-y-10 px-0 md:px-10">
    <h4 className="text-4xl font-semibold"> 
            Here is my background
        </h4>
        <p className='text-base'>
        Experienced Software Engineer with a strong background in developing and managing large-scale backend systems. 
        My expertise lies in creating robust microservices solutions. 
        Proficient in Java, Spring Boot, AWS, Kafka, and MongoDB, I specialize in crafting scalable and reliable architectures. 
        My skill set extends beyond coding, encompassing exceptional communication and adept management abilities. 
        Passionate about driving innovation and solving complex challenges, I thrive in dynamic tech environments.
        </p>
    </div>
        
    </motion.div>
  )
}

export default About