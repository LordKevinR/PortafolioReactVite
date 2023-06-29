import './App.css'
import Header from './components/Header'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'
import SobreMi from './components/SobreMi'
import ProyectosEnProceso from './components/ProyectosEnProceso'

function App() {

  return (
    <div className=''>
      <Header />
      <Proyectos />
      <ProyectosEnProceso />
      <Tecnologias />
      <SobreMi />
    </div>
  )
}

export default App
