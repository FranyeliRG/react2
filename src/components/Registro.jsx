import React, {useState} from 'react'
import Formulario from './Formulario'
import Alert from './Alert'
import SocialButton from './SocialButton'

const Registro = () => {
    const [alert, setAlert] = useState({message:'', color:''})

    return(
        <>
            <SocialButton/>
            <Formulario setAlert={setAlert}/>
            {alert.message !== '' && <Alert message={alert.message} color={alert.color}/>}
        </>
    )
}

export default Registro;