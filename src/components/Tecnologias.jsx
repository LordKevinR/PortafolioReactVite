const Tecnologias = () => {
  return (
    <div id="tecnologias" className="bg-gray-900 pb-36">
        <h1 className="text-slate-100 font-bold text-center text-5xl pt-16">Tecnologias</h1>

        <div className="md:grid max-w-[70rem] text-gray-700 md:grid-cols-2 w-[80%] rounded-lg mx-auto mt-16 text-center bg-gray-800 gap-4 p-4">
            <article className="md:mt-10">
                <h2 className="text-2xl text-slate-300 font-bold mb-4">
                    Front<span className="text-indigo-400">-End</span>
                </h2>
                <ul className="leading-10 text-slate-300 font-semibold">
                    <li>React</li>
                    <li>Angular</li>
                    <li>NET MAUI</li>
                    <li>Flutter</li>
                    <li>TailWindCss</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </article>

            <article className="mt-10">
            <h2 className="text-2xl text-slate-300 font-bold mb-4">
                    Back<span className="text-indigo-400">-End</span>
                </h2>

                <ul className="leading-10 text-slate-300 font-semibold">
                    <li>C#</li>
                    <li>.NET</li>
                    <li>Entity Framework Core</li>
                    <li>SQL Server</li>                    
                    <li>ASP.NET</li>
                    <li>Dart</li>
                    <li>php</li>
                    <li>MySQL</li>
                </ul>
            </article>
        </div>
     
    </div>
  )
}

export default Tecnologias