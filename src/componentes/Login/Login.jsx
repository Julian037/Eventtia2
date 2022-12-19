import React, { Fragment, useState, useContext } from 'react'
import { login } from "../../funciones/API.js";
import {ProviderContext} from '../../context/Context'

const Login = () => {
  const test = useContext(ProviderContext)

  const [inputUserName, setInputUserName] = useState()
  const [inputPassword, setInputPassword] = useState()

  const handleUserNameChanges = (e) => {
    setInputUserName(e.target.value)
    console.log(e.target.value)
}

const handlePassword = (e) => {
  setInputPassword(e.target.value)
  console.log(e.target.value)
}

const cambiarMensaje = () => {
  test.setSaludo('lala')
}
 
    return(
      <Fragment>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input onChange={handleUserNameChanges} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input onChange={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button  onClick={() => login(inputUserName,inputPassword )}>Submit</button>
        <h1>{test.saludo}</h1>
        <button onClick={cambiarMensaje}>Cambiar mensaje desde login</button>
      </Fragment>
    )
}


export default Login