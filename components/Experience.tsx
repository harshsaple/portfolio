import React from 'react'

type Props = {}

function Experience({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left 
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] test-gray-500 text-2xl '>
           Experience
        </h3>

        <h3 className='absolute top-50 uppercase tracking-[20px] test-gray-500 text-2xl '>
           RELEASING SOON! STAY TUNED!
        </h3>


    </div>
  )
}

export default Experience