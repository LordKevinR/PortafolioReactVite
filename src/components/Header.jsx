import { FlechaAbajo } from "./logos/FlechaAbajo"

const Header = () => {


  return (
    <div className="bg-teal-300 h-screen">

      <nav className="md:flex 2xl:max-w-[100rem] mx-auto md:justify-around 2xl:justify-between text-center md:items-center px-2 py-1">

        <div>
          <a href="#">
          <p className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-200 hover:p-2 p-2 text-2xl cursor-pointer mt-5 text-indigo-700">&lt;<span className="text-gray-700">KS</span>/&gt;</p>

          </a>
        </div>

        <div className="md:flex mt-10 md:mt-5 grid gap-3 md:gap-6 ">

          <a href="#proyectos" className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-gray-700">Proyectos</a>

            <a href="#tecnologias" className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-indigo-700">Tecnologías</a>

            <a href="#sobremi" className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-gray-700">Sobre Mi</a>

            <a href="#contacto" className="font-bold hover:scale-105 duration-200 hover:bg-slate-100/50 hover:rounded-lg hover:transition-all hover:duration-100 hover:p-2 p-2 text-2xl text-indigo-700">Contacto</a>

        </div>

      </nav>
      <div className="h-screen mt-20 md:mt-0 ">
        <h1 className="font-black text-5xl text-gray-700  pt-10 md:pt-[20rem] xl:pt-[20rem] 2xl:pt-[25rem] text-center"
          >Kevin Sánchez <span className="text-indigo-700">-</span> Portafolio
          </h1>
          <p className="text-center mt-5 font-black text-2xl pb-10 text-gray-700">
            Junior <span className="text-indigo-700">Fullstack</span> Developer  
          </p>
          <p className="grid md:mt-24 lg:mt-10 animate-bounce place-items-center text-5xl ">
          <FlechaAbajo/>
          </p>
      </div>  

    </div>
  )
}

export default Header