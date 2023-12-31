import './App.css'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'
import SobreMi from './components/SobreMi'
import ProyectosEnProceso from './components/ProyectosEnProceso'
import Contacto from './components/Contacto'
import Freelancer from './components/Freelancer'

function App() {

  return (
    <div className='bg-gray-900 px-2'>
      <Header />
      <Freelancer/>
      {/* <Proyectos /> */}
      {/* <ProyectosEnProceso /> */}
      <Tecnologias />
      <Contacto />
    </div>
  )
}

export default App
