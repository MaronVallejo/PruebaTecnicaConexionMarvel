import React, { useState } from 'react'
import { Alert } from 'bootstrap';
import {App} from '../App'

export function Login() {

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e){
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!emailLog || !passwordLog){
            setFlag(true);
            console.log("Vacio");
        }else if (passwordLog !== pass || emailLog !== mail){
            setFlag(true);
        }else{
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div className='login'>
            {home ? (
            <form onSubmit={handleLogin}>
                <h3>Iniciar sesión</h3>
                <div className='form-group'>
                    <label>Correo electronico</label>
                    <input
                        style={{margin: "0px 0px 20px"}}
                        type='email'
                        className='form-control'
                        placeholder='Ingrese correo electronico'
                        onChange={(event) => setEmailLog(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Contraseña</label>
                    <input
                        style={{margin: "0px 0px 20px"}}
                        type='password'
                        className='form-control'
                        placeholder='Ingrese contraseña'
                        onChange={(event) => setPasswordLog(event.target.value)}
                    />
                </div>
                <button type='sumbit' className='btn btn-dark btn-lg btn-block' style={{margin: "0px 95px"}}>Iniciar Sesión</button>
                {flag &&(
                <Alert color="primary" variant='danger'>Correo o clave incorrectas</Alert>
            )}
            </form>
            ):(
                <App/>
            )}
        </div>
    )
}
