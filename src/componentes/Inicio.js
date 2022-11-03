import {Fragment, React, useEffect, useState} from "react";
import { allProductos, EliminarProducto } from "../funciones/data.js";
import { Nav } from "./Nav.js";

function Inicio() {

    const [productos, setProductos] = useState(null)

    useEffect( () => {
        allProductos(setProductos)
    }, [])
    return(
        <Fragment>
        
        <Nav></Nav>
        

        {productos != null ? (
            productos.map(producto => (
                
                <div className="product">
                    <div claseName="container"key={producto.id}>
                    <div className="card" style={{maxWidth: '35rem'}}>
                    <img src={producto.images[0]} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <a href={`/producto/${producto.id}`} className="btn btn-primary">Más información</a>
                        
                    </div>
                    </div>
                </div>
                </div>

                

            ))
        ) : ('Cargando....')}
        </Fragment>
    )
}

export {Inicio}