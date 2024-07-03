import React from 'react'

function About() {
  return (
    <div className=' mx-20 py-56'>
        <div className=''>
            <div className='flex flex-row items-center gap-5'>
                <h1 className=' text-2xl'>ABOUT</h1>
                <div className='line w-20 h-1 bg-purple-600'></div>
            </div>
            <h1 className=' text-9xl font-bold'>PROMPTLY</h1>
        </div>
        <div className=' text-xl pt-5'>
            Welcome to Prompt Generator! Our platform harnesses the power of advanced AI to provide you with unique and engaging prompts. Whether you are a writer seeking inspiration, a student working on a project, or simply someone looking to spark their creativity, Prompt Generator is here to help.
            Our easy-to-use interface and powerful AI engine make it simple to generate prompts tailored to your specific needs. Dive into a world of endless possibilities and let your imagination run wild with Prompt Generator.
        </div>
    </div>
  )
}

export default About