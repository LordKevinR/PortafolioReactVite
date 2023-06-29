const Tecnologias = () => {
  return (
    <div id="tecnologias" className="bg-sky-500 pb-36">
        <h1 className="text-slate-100 font-bold text-center text-5xl pt-16">Tecnologias</h1>

        <div className="md:grid max-w-[70rem] text-gray-700 md:grid-cols-2 w-[80%] rounded-lg mx-auto mt-16 text-center bg-slate-100 gap-4 p-4">
            <article className="md:mt-10">
                <h2 className="text-2xl font-bold mb-4">
                    Front<span className="text-indigo-600">-End</span>
                </h2>
                <ul className="leading-10 font-semibold">
                    <li>Responsive Design</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TailWindCss</li>
                    <li>JavaScript</li>
                    <li>React</li>

                </ul>
            </article>

            <article className="mt-10">
            <h2 className="text-2xl text-gray-700 font-bold mb-4">
                    Back<span className="text-indigo-600">-End</span>
                </h2>

                <ul className="leading-10 font-semibold">
                    <li>C#</li>
                    <li>.NET</li>
                    <li>ASP.NET</li>
                    <li>Entity Framework Core</li>
                    <li>php</li>
                    <li>MySQL</li>
                    <li>SQL Server</li>                    
                </ul>
            </article>
        </div>
     
    </div>
  )
}

export default Tecnologias