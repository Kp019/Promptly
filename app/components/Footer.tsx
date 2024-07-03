import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className=' flex flex-col justify-center items-center py-20 bg-gray-900 gap-10'>
        <div className='flex flex-row justify-center items-center gap-10'>
            <div className=' text-4xl'><FaLinkedin/></div>
            <div className=' text-4xl'><SiGmail/></div>
            <div className=' text-4xl'><FaGithub/></div>
        </div>
        <div className=' w-[1000px] h-1 bg-gray-100 opacity-25'></div>
        <h1>© 2024 PROMPTLY. All rights reserved.</h1>
    </div>
  )
}

export default Footer