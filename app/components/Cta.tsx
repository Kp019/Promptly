import React from 'react'
import Link from 'next/link'

function Cta() {
  return (
    <div className=' relative flex flex-col justify-center items-center h-[70vh]'>
        <div className=' absolute z-10'>
            <div className=' flex justify-center items-center flex-col text-center mx-32'>
                <div className='flex flex-row items-center gap-5'>
                    <div className='line w-20 h-1 bg-purple-600'></div>
                    <h1 className=' text-2xl'>Discover the Power of Instant Inspiration with</h1>
                    <div className='line w-20 h-1 bg-purple-600'></div>
                </div>
                <h1 className=' text-9xl font-bold'>Promptly</h1>
                <div className=' pt-8 text-xl'>Unleash your creativity and explore endless possibilities with just a click. Promptly’s AI-driven technology is here to provide you with unique, tailored prompts that will fuel your next big idea.</div>
                <Link href='/app'><div className='flex justify-center items-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 px-4 py-2 mt-10 text-lg font-semibold'>Get Started</div></Link>
            </div>
        </div>
        <div className=' relative w-full overflow-hidden opacity-50'>
            <img className='w-full bg-cover' src='/bg2.png' alt='bg2'/>
        </div>
    </div>

  )
}

export default Cta