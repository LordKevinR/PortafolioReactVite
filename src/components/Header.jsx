import { FlechaAbajo } from "./logos/FlechaAbajo"
import { Linkedin } from './logos/Linkedin'
import { Instagram } from './logos/Instagram'
import { GitHub } from './logos/Github'
import { Email } from './logos/Email'
import { Link } from "react-scroll"

const Header = () => {


  return (
    <div className="bg-gray-900">

      <nav className="md:flex 2xl:max-w-[100rem] mx-auto md:justify-around 2xl:justify-between text-center md:items-center px-2 py-1">

        <div>
          <a href="#">
          <p className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-200 hover:p-2 p-2 text-2xl cursor-pointer mt-5 text-indigo-400">&lt;<span className="text-slate-300">KS</span>/&gt;</p>

          </a>
        </div>

        <div className="md:flex mt-5 md:mt-5 grid gap-3 md:gap-6 ">

          <Link to="proyectos" spy={true} smooth={true} offset={50} duration={500} className="font-bold hover:scale-105 duration-200 cursor-pointer hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-slate-300">Proyectos</Link>

            <Link to="tecnologias" spy={true} smooth={true} offset={50} duration={500} className="font-bold hover:scale-105 cursor-pointer duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-indigo-400">Tecnologías</Link>

            {/* <a href="#sobremi" className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-slate-300">Sobre Mi</a> */}

            <Link to="contacto" spy={true} smooth={true} offset={50} duration={500} className="font-bold hover:scale-105 cursor-pointerduration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-slate-300">Contacto</Link>

        </div>

      </nav>
      <div className="mt-10 md:mt-0 ">

        <div className="flex justify-center pt-10 md:pt-[10rem] xl:pt-[10rem] 2xl:pt-[15rem]">
          <img className="w-32" src="src/img/yo.png" alt="imagen mia" />
        </div>
        <h1 className="font-black -mt-7 text-5xl text-slate-300 text-center"
          >Kevin Sánchez <span className="text-indigo-400">-</span> Portafolio
          </h1>

          <p className="text-center animate-pulse mt-5 font-black text-2xl pb-10 text-slate-300">
            Junior <span className="text-indigo-400">.NET / Fullstack</span> Developer  
          </p>

          <div className="w-full place-items-center">
            <p className="text-white text-center font-bold text-xl">
                Estudiante Universitario, <span className="text-indigo-400">Programador Freelancer,</span>
            </p>
            <p className="text-white text-center font-bold text-xl">
                Obsesionado con el estudio y con el aprendizaje continuo
            </p>
          </div>


          <section className='flex flex-wrap gap-5 text-white mt-10 justify-center'>

            <div className="flex gap-2 px-5 py-1  bg-blue-700/40 border rounded-2xl animate-pulse  items-center">
                <a target='_blank' className='text-2xl hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.linkedin.com/in/kevin-adonis-s%C3%A1nchez-rodr%C3%ADguez-7097b71a6/"><Linkedin/></a>
                <a target='_blank' className='text-lg font-bold col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.linkedin.com/in/kevin-adonis-s%C3%A1nchez-rodr%C3%ADguez-7097b71a6/">Mi LinkedIn</a>
            </div>


            {/* <div className="flex gap-2 px-5 py-1 border rounded-lg items-center">
                <a target='_blank' className='text-sm hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.instagram.com/lordkevin.r/"><Instagram/></a>
                <a target='_blank' className='text-sm font-bold col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://www.instagram.com/lordkevin.r/">lordkevin.r</a>

            </div> */}

            <div className="flex gap-2 px-5 bg-black py-1 border rounded-2xl animate-pulse items-center">
                <a target='_blank' className='text-2xl hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://github.com/LordKevinR"><GitHub/></a>
                <a target='_blank' className='text-lg font-bold col-span-2 hover:scale-105 duration-200 hover:transition-all hover:duration-200' href="https://github.com/LordKevinR">LordKevinR</a>
            </div>

            <div className="flex gap-2 bg-red-500/60 px-5 py-1 border rounded-2xl animate-pulse  items-center">
                <p className='text-2xl'><Email/></p>
                <p className='text-lg font-bold col-span-2 break-words md:break-normal'>kevinadonis0123@gmail.com</p>
            </div>


        </section>




          {/* <p className="grid md:mt-[25rem] mt-28 lg:mt-20 animate-bounce place-items-center text-5xl ">
          <FlechaAbajo/>
          </p> */}
      </div>  

    </div>
  )
}

export default Header