import React, { useState } from 'react';
import { createContext } from 'react';
export const ProviderContext =  React.createContext({})

export const Context = ({children}) => {

    const [saludo, setSaludo] = useState('')
    
    return(
        <ProviderContext.Provider value={{saludo, setSaludo}}>
            {children}
        </ProviderContext.Provider>
    )

}




// import React, { useEffect, useState } from 'react';



// const SessionContext = React.createContext({
//   codUsuario: '',
//   nombre: 'julian',
//   correo: '',
//   urlAvatar: ''
// });

// export default SessionContext;

// export const SessionContextProvider = (props) => {
//   const [session, setSession] = useState({
//     codUsuario: '',
//     nombre: '',
//     correo: '',
//     urlAvatar: ''
//   });
  


//   return (
//     <SessionContext.Provider value={{ 
//       codUsuario: session.codUsuario, 
//       nombre: session.nombre, 
//       correo: session.correo, 
//       urlAvatar: session.urlAvatar }}>
//       {props.children}
//     </SessionContext.Provider>
//   );
// };
  