import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div className='flex flex-col justify-center items-center pb-40'>
        <div className='flex flex-row items-center gap-5'>
            <div className='line w-10 h-1 bg-purple-600'></div>
            <h1 className=' text-5xl font-bold'>Contact Us</h1>
            <div className='line w-10 h-1 bg-purple-600'></div>
        </div>
        <div className='flex flex-row justify-between gap-20 pt-10'>
            <div className='flex justify-center items-center gap-5 text-xl'><FaPhoneAlt/>+91 8330859663</div>
            <div className='flex justify-center items-center gap-5 text-xl'><SiGmail/>krishnaprasadr666@gmail.com</div>
        </div>
    </div>
  )
}

export default Contact