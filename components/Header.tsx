'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"

type Props={};

function Header({}:Props) {
  return (
    <header className='sticky top-4 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
        {/*Two divs next to each other is a block*/}
        <motion.div 
        initial={{x: -500, opacity: 0, scale: 0.5}}
        animate={{x: 0,opacity: 1,scale: 1}}
        transition={{ duration: 1.5 , type: "spring", damping: 17 }}
        className='flex flex-row items-center'>
            {/*Socials*/}
            <motion.div className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <SocialIcon url="https://www.linkedin.com/in/harshsaple/" fgColor='	#0A66C2' bgColor='transparent'/>
            </motion.div>

            <motion.div className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <SocialIcon url="https://github.com/harshsaple" fgColor="black" bgColor='transparent' />
            </motion.div>

            <motion.div className="box"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <SocialIcon url="https://gitlab.com/harshsaple" fgColor="orange" bgColor='transparent' />
            </motion.div>


            <motion.div className="box"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }} >
                <SocialIcon url="https://youtube.com/@harshsaple" fgColor="red" bgColor='transparent' />
            </motion.div>

        </motion.div>

        <motion.div 
        initial={{x: +500, opacity: 0, scale: 0.5}}
        animate={{x: 0,opacity: 1,scale: 1}}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 1.5 , type: "spring", damping: 17 }}
        className='flex flex-row items-center text-gray-600 cursor-pointer'>
            <SocialIcon className="cursor-pointer" network="mailto" fgColor="white" bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-red-600">Get in Touch!</p>
        </motion.div> 
        
    </header>
  )
}

export default Header