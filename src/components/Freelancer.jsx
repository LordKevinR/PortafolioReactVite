const Freelancer = () => {
  return (
    <div id="proyectos" className="max-w-[100rem] lg:w-[80%] items-center mt-36 mx-auto">

        <h1 className="text-4xl text-slate-300 font-black pb-5 text-center">Free<span className="text-indigo-600">Lancer</span></h1>
        <p className="text-2xl text-slate-300 font-black pb-20 text-center">"No se incluyen proyectos de cursos"</p>

        <div className="lg:border lg:rounded-2xl px-1 lg:px-10 py-5 gap-3">
            <p className="text-3xl text-center text-slate-300 font-bold">Manejo de Incidencias</p>

            <div className="lg:grid lg:grid-cols-2 gap-5 mt-10 grid-rows-2 ">
                <img className="col-start-1 col-end-1 row-start-1 row-end-1 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/indicencias1.png" alt="imagen app 1" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-2 row-end-2 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/incidencias2.png" alt="imagen app 2" />

                <div className="col-start-2 col-end-2 row-start-1 row-span-2">
                    <p className="text-3xl mt-10 lg:mt-0 text-justify text-slate-300 font-semibold">Este es un proyecto freelancer realizado en <span className="text-indigo-400">.NET MAUI.</span> El backend está desarrollado con <span className="text-indigo-400">.NET, utilizando Entity Framework Core y SQL Server.</span>  Le tengo especial cariño porque es mi primer proyecto en .NET MAUI. Está hecho completamente por mí, desde cero, y tiene como objetivo administrar las incidencias del día a día en el departamento de mantenimiento del hospital donde trabajo. La aplicación no busca sustituir el sistema interno de incidencias del hospital, sino complementarse con el personal y reemplazar los mensajes de WhatsApp, ya que a menudo se pierden en la comunicación diaria.</p>

                    <div className="flex flex-wrap gap-5 mt-5">
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/maui.svg" alt="maui" />
                            <p className="text-white text-xl font-bold">.Net Maui</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/net.png" alt="net" />
                            <p className="text-white text-xl font-bold">ASP.NET</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[50px]" src="/src/img/sqlserver.svg" alt="sql server" />
                            <p className="text-white flex-wrap text-xl font-bold">Sql Server</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[50px]" src="/src/img/android.png" alt="android" />
                            <p className="text-white flex-wrap text-xl font-bold">Android</p>
                        </div>
                    </div>
        
                </div>
            </div>

        </div>

        <div className="lg:border mt-20 lg:rounded-2xl px-1 lg:px-10 py-5 gap-3">
            <p className="text-3xl text-center text-slate-300 font-bold">Manejo de Turnos de Resonancia Magnética</p>

            <div className="lg:grid lg:grid-cols-2 gap-5 mt-10 grid-rows-3 ">
                <img className="col-start-1 col-end-1 row-start-1 row-end-1 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/resonancia1.png" alt="imagen app 1" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-2 row-end-2 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/resonancia2.png" alt="imagen app 2" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-3 row-end-3 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/resonancia3.png" alt="imagen app 2" />

                    <div className="col-start-2 col-end-2 row-start-1 row-span-3">
                    <p className="text-3xl mt-10 lg:mt-0 text-justify text-slate-300 font-semibold">Este proyecto fue un trabajo como freelancer, realizado para un grupo de estudiantes que me contrataron para desarrollar un software de gestión de turnos para el área de resonancia magnética de un hospital. El propósito es que sean dos proyectos separados: uno para el personal administrativo y otro para los pacientes. En el segundo, los pacientes pueden ver su turno en tiempo real, así como el tiempo que les falta para ser atendidos. Este proyecto está desarrollado en <span className="text-indigo-400">React con Tailwind,</span> mientras que el backend está hecho en <span className="text-indigo-400">.NET con Entity Framework Core y SQL Server.</span> Ha sido uno de mis favoritos porque tuve que aprender muchas cosas para poder desarrollarlo.</p>

                    <div className="flex flex-wrap gap-5 mt-5">
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/react.png" alt="react" />
                            <p className="text-white text-xl font-bold">React</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/tailwind.png" alt="tailwind" />
                            <p className="text-white text-xl font-bold">Tailwind</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/net.png" alt="no" />
                            <p className="text-white text-xl font-bold">ASP.NET</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[50px]" src="/src/img/sqlserver.svg" alt="no" />
                            <p className="text-white flex-wrap text-xl font-bold">Sql Server</p>
                        </div>
                    </div>
        
                </div>

            </div>

        </div>

        <div className="lg:border mt-20 lg:rounded-2xl px-1 lg:px-10 py-5 gap-3">
            <p className="text-3xl text-center text-slate-300 font-bold">Control de Acceso a Parqueos</p>

            <div className="lg:grid lg:grid-cols-2 gap-5 mt-10 grid-rows-3 ">
                <img className="col-start-1 col-end-1 row-start-1 row-end-1 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/parqueos1.jpeg" alt="imagen app 1" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-2 row-end-2 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/parqueos2.jpeg" alt="imagen app 2" />
                <img className="col-start-1 col-end-1 mt-5 lg:mt-0 row-start-3 row-end-3 rounded-xl hover:scale-110 transition-all duration-300" src="src/img/parqueos4.jpeg" alt="imagen app 2" />

                    <div className="col-start-2 col-end-2 row-start-1 row-span-3">
                    <p className="text-3xl mt-10 lg:mt-0 text-justify text-slate-300 font-semibold">Este es un proyecto muy sencillo que realicé para un grupo de estudiantes universitarios que necesitaban un sistema que simulara la entrada y salida de un estacionamiento, restando los espacios disponibles por cada vehículo que entra y aumentando por cada vehículo que sale. El sistema debe mostrar en tiempo real los espacios de estacionamiento disponibles, actualizando la cantidad por cada entrada y salida de vehículos. Este proyecto está desarrollado en <span className="text-indigo-400">React con Tailwind,</span> mientras que el backend está hecho en <span className="text-indigo-400">.NET con Entity Framework Core y SQL Server.</span> Aunque es un proyecto sencillo, siempre se aprenden cosas nuevas.</p>

                    <div className="flex flex-wrap gap-5 mt-5">
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/react.png" alt="react" />
                            <p className="text-white text-xl font-bold">React</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/tailwind.png" alt="tailwind" />
                            <p className="text-white text-xl font-bold">Tailwind</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[40px]" src="/src/img/net.png" alt="no" />
                            <p className="text-white text-xl font-bold">ASP.NET</p>
                        </div>
                        <div className="flex gap-2 px-5 py-1 max-w-[200px] bg-white/40 border rounded-2xl animate-pulse  items-center">
                            <img className="w-[50px]" src="/src/img/sqlserver.svg" alt="no" />
                            <p className="text-white flex-wrap text-xl font-bold">Sql Server</p>
                        </div>
                    </div>
        
                </div>

            </div>

        </div>
    </div>
  )
}

export default Freelancer