import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Registro from './components/Registro'

const App= () => {

  return (
    <>
      <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <h1 className='text-body mb-4'>Crea una Cuenta</h1>
      <Registro/>
      </div>
    </>
  )
}

export default App
