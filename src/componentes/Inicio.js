import { Button } from "bootstrap";
import {Fragment, React, useEffect, useState} from "react";
import { agregarProducto, fetchAllProducts, eliminarProducto, login } from "../funciones/data.js";
import { Nav } from "./Nav.js";
import {Login} from "./Login.jsx";
import { useContext } from "react";
import { ProviderContext } from "../context/Context.jsx";

function Inicio() {

    const [productos, setProductos] = useState(null)
    const [skip, setSkip] = useState(0)
    console.log(skip)

    const nextPage = () => {
        setSkip(skip + 1)
    }

    const previousPage = () => {
        setSkip(skip - 1)
    }


    const test = useContext(ProviderContext)

    console.log(' inicio', test.saludo)

    useEffect( () => {
        fetchAllProducts(setProductos, skip)
    }, [skip])
    
    return(
        <Fragment>
            
        <Nav></Nav>

        <div>
            <button disabled={skip <= 0 ? true : false} onClick={previousPage} type="button" class={skip > 0 ? "btn btn-outline-primary" : "btn btn-outline-secondary" }>Anterior</button>
            <button onClick={nextPage}  type="button" class="btn btn-outline-primary">Siguiente</button>
        </div>  
        
        <h1>{test.saludo}</h1>

        {productos != null ? (
            productos.map(producto => (
                
                <div key={producto.id} className="product">
                    <div className="container">
                    <div className="card" style={{maxWidth: '35rem'}}>
                    <img src={producto.images[0]} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <a href={`/producto/${producto.id}`} className="btn btn-primary">Más información</a>
                        <button onClick={() => eliminarProducto(producto.id)}>eliminar</button>
                        <button onClick={() => agregarProducto(producto.id)}>agregar</button>
                    </div>
                    </div>
                </div>
                </div>
            ))
        ) : ('Cargando....')}

        </Fragment>
    )
}

export default Inicio