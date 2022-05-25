import React, { useState } from 'react'
import { Alert } from 'bootstrap';
import {Login} from './Login'

export default function Register() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e){
        e.preventDefault();

        if(!name || !id || !email || !password ){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Guardado en el local storage");
            setLogin(!login);
        }

    }


    function handleClick(){
        setLogin(!login);
    }

  return (
    <div className="p-4">
        {login ? (
        <form onSubmit={handleSubmit}>
            <h1 className='App'>Registro</h1>
            <div className='form-group'>
                <label>Nombre</label>
                <input
                style={{margin: "0px 0px 18px"}}
                type='text'
                className='form-control'
                placeholder='Ingrese nombre completo' 
                onChange={(event)=> setName(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Identificacion</label>
                <input
                style={{margin: "0px 0px 18px"}}
                type='text'
                className='form-control'
                placeholder='Ingrese documento de identidad'
                onChange={(event)=> setId(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Correo electronico</label>
                <input
                style={{margin: "0px 0px 18px"}}
                type='email'
                className='form-control'
                placeholder='Ingrese correo electronico'
                onChange={(event)=> setEmail(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Contraseña</label>
                <input
                style={{margin: "0px 0px 18px"}}
                type='password'
                className='form-control'
                placeholder='Ingrese contraseña'
                onChange={(event)=> setPassword(event.target.value)}
                />
            </div>
            <button type='sumbit' className='btn btn-dark btn-lg btn-block' style={{margin: "0px 95px"}}>Registrarse</button>
            <p className="forgot-password text-right" onClick={handleClick}>¿Ya tienes una cuenta? {" "} Inicia sesion</p>

            {flag &&(
                <Alert color="primary" variant='danger'>Por favor llenar todos los campos</Alert>
            )}

        </form>
):(
        <Login/>
        )}
    </div>
  )
}
