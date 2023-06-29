import React from 'react'
import { Linkedin } from './logos/Linkedin'
import { Instagram } from './logos/Instagram'
import { GitHub } from './logos/Github'
import { Email } from './logos/Email'

const Contacto = () => {

  return (
    <div id='contacto' className=' bg-teal-300 pt-16 pb-36'>
        <h1 className="text-5xl text-gray-700 font-black pb-20 text-center">Contacto</h1>
        <section className='grid grid-cols-3 m-auto max-w-xs gap-y-12'>
                <a target='_blank' className='text-5xl pl-12 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.linkedin.com/in/kevin-adonis-s%C3%A1nchez-rodr%C3%ADguez-7097b71a6/"><Linkedin/></a>
                <a target='_blank' className='text-2xl font-bold mt-1.5 col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.linkedin.com/in/kevin-adonis-s%C3%A1nchez-rodr%C3%ADguez-7097b71a6/">Mi LinkedIn</a>

                <a target='_blank' className='text-5xl pl-12 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.instagram.com/lordkevin.r/"><Instagram/></a>
                <a target='_blank' className='text-2xl font-bold mt-1.5 col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.instagram.com/lordkevin.r/">lordkevin.r</a>

                <a target='_blank' className='text-5xl pl-12 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://github.com/LordKevinR"><GitHub/></a>
                <a target='_blank' className='text-2xl font-bold mt-1.5 col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://github.com/LordKevinR">LordKevinR</a>

                <p className='text-5xl pl-12'><Email/></p>
                <p className='text-2xl font-bold mt-1.5 col-span-2'>kevinadonis0123@gmail.com</p>
        </section>
    </div>
  )
}

export default Contacto