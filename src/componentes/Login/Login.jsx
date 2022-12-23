import React, { Fragment, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {ProviderContext} from '../../context/Context'
import  './LoginStyles.css'
import axios from "axios";


// USUARIOS

// USUARIO: 'kminchelle',
//  CLAVE: '0lelplR',

// USUARIO: "atuny0"
// CLAVE: "9uQFF1Lh"


// USUARIO: "hbingley1"
// CLAVE: "CQutx25i8r"

const Login = () => {

  const navigate = useNavigate();

  const contextUser = useContext(ProviderContext)

  const [inputUserName, setInputUserName] = useState()
  const [inputPassword, setInputPassword] = useState()
  const [openMessageError, setOpenMessageError] = useState(false)
  
  const backHome = () => {
    navigate('/');
  }
  
  const handleUserNameChanges = (e) => {
    setInputUserName(e.target.value)
    console.log(e.target.value)
  }

  const handlePassword = (e) => {
    setInputPassword(e.target.value)
    console.log(e.target.value)
  }
 
  const fetchLogin = async (username, password ) => {

  await axios.post('https://dummyjson.com/auth/login' , {
      username: username,
      password: password,
  }) 
  .then(function (response) {
      console.log(response)
      if(response.status === 200){
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem('email', `${response.data.email}`);
        localStorage.setItem('firstName', `${response.data.firstName}`);
        localStorage.setItem('image', `${response.data.image}`);
        localStorage.setItem('lastName', `${response.data.lastName}`);
        localStorage.setItem('username', `${response.data.username}`);
        navigate('/');
      }
  })
  .catch ( function ( error ) {
      console.log(error)
      setOpenMessageError(true)
  })
 
}
    return(
      <Fragment>
        <body class="text-center ">
          <main class="form-signin w-100 m-auto">
            <h1 class="h3 mb-3 fw-normal">Iniciar sesión</h1>
            <div class="form-floating">
              <input  onChange={handleUserNameChanges} type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input  onChange={handlePassword} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
            <button  onClick={() => fetchLogin(inputUserName,inputPassword )} class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2022–2022</p>
          </main>
          {openMessageError === true ?  
            <div>
              <p>Usuario no encontrado... <br></br>¿Desea regresar?</p>
              <button type="button" class="btn btn-danger" onClick={() => backHome()} >Regresar</button> 
            </div> 
            : 
            <></>
          }
        </body>

      </Fragment>
    )
}


export default Login