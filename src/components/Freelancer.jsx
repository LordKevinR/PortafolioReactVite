const Freelancer = () => {
  return (
    <div className="max-w-[100rem] md:w-[80%] items-center mt-36 mx-auto container">
        <h1 className="text-4xl text-slate-300 font-black pb-20 text-center">Free<span className="text-indigo-600">Lancer</span></h1>

        <div className="lg:border lg:rounded-2xl px-10 py-5 gap-3">
            <p className="text-3xl text-center text-slate-300 font-bold">Manejo de Incidencias</p>

            <div className="lg:grid lg:grid-cols-2 gap-5 mt-10 grid-rows-2 ">
                <img className="col-start-1 col-end-1 row-start-1 row-end-1 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/indicencias1.png" alt="imagen app 1" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-2 row-end-2 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/incidencias2.png" alt="imagen app 2" />

                <p className="text-3xl mt-10 lg:mt-0 col-start-2 col-end-2 row-start-1 row-span-2 text-justify text-slate-300 font-semibold">Este es un proyecto freelancer realizado en .NET MAUI. El backend está desarrollado con .NET, utilizando Entity Framework Core y SQL Server. Le tengo especial cariño porque es mi primer proyecto en .NET MAUI. Está hecho completamente por mí, desde cero, y tiene como objetivo administrar las incidencias del día a día en el departamento de mantenimiento del hospital donde trabajo. La aplicación no busca sustituir el sistema interno de incidencias del hospital, sino complementarse con el personal y reemplazar los mensajes de WhatsApp, ya que a menudo se pierden en la comunicación diaria.</p>
            </div>

        </div>

        <div className="lg:border mt-20 lg:rounded-2xl px-10 py-5 gap-3">
            <p className="text-3xl text-center text-slate-300 font-bold">Manejo de Incidencias</p>

            <div className="lg:grid lg:grid-cols-2 gap-5 mt-10 grid-rows-3 ">
                <img className="col-start-1 col-end-1 row-start-1 row-end-1 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/resonancia1.png" alt="imagen app 1" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-2 row-end-2 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/resonancia2.png" alt="imagen app 2" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-3 row-end-3 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/resonancia3.png" alt="imagen app 2" />

                <p className="text-3xl mt-10 lg:mt-0 col-start-2 col-end-2 row-start-1 row-span-3 text-justify text-slate-300 font-semibold">Este proyecto fue un trabajo como freelancer, realizado para un grupo de estudiantes que me contrataron para desarrollar un software de gestión de turnos para el área de resonancia magnética de un hospital. El propósito es que sean dos proyectos separados: uno para el personal administrativo y otro para los pacientes. En el segundo, los pacientes pueden ver su turno en tiempo real, así como el tiempo que les falta para ser atendidos. Este proyecto está desarrollado en React con Tailwind, mientras que el backend está hecho en .NET con Entity Framework Core y SQL Server. Ha sido uno de mis favoritos porque tuve que aprender muchas cosas para poder desarrollarlo.</p>
            </div>

        </div>
    </div>
  )
}

export default Freelancer