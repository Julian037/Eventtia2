import React, { useState } from 'react';
import { createContext } from 'react';
import { useHref } from 'react-router-dom';
export const ProviderContext =  React.createContext({})

export const Context = ({children}) => {

    const [saludo, setSaludo] = useState('Información desde context')
    
    const isLogin = localStorage.getItem('isLogin')


    return(
        <ProviderContext.Provider value={{saludo, setSaludo, isLogin}}>
            {children}
        </ProviderContext.Provider>
    )

}
