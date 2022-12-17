import {Fragment, React, useEffect, useState} from "react";
import { agregarProducto, fetchAllProducts, eliminarProducto, login } from "../../funciones/data.js";
import { Nav } from "../Nav.js";
import { useContext } from "react";
import { ProviderContext } from "../../context/Context.jsx";
import './HomeStyle.css'

function Home() {

    const test = useContext(ProviderContext)

    const [products, setProducts] = useState(null)
    const [skip, setSkip] = useState(0)

    console.log()

    const nextPage = () => {
        setSkip(skip + 9)
    }

    const previousPage = () => {
        setSkip(skip - 9)
    }

    useEffect( () => {
        fetchAllProducts(setProducts, skip)
    }, [skip])
    
    return(
        <Fragment>
            
        <Nav></Nav>

        <div className="btnContainer d-flex justify-content-end mt-3">
            <div className="col-1"> <button disabled={skip <= 0 ? true : false} onClick={previousPage} type="button" class={skip > 0 ? "btn btn-outline-primary w-100" : "btn btn-outline-secondary w-100" }>Anterior</button></div>
            <div className="col-1 ms-3 "><button onClick={nextPage}  type="button" class="btn btn-outline-primary w-100">Siguiente</button></div>
        
        </div>  
        
        <h1>{test.saludo}</h1>
            <div className="test" >
            {products != null ? (
            products.map(producto => (
                
                <div key={producto.id} className="product">
                    <div className="container">
                    <div className="card" style={{maxWidth: '35rem'}}>
                    <div className='imgContainer'><img src={producto.images[0]} className="card-img-top" alt="..."/></div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <a href={`/producto/${producto.id}`} className="btn btn-primary">Más información</a>
                        {/* <button onClick={() => eliminarProducto(producto.id)}>eliminar</button>
                        <button onClick={() => agregarProducto(producto.id)}>agregar</button> */}
                    </div>
                    </div>
                </div>
                </div>
            ))
        ) : ('Cargando....')}

            </div>



        </Fragment>
    )
}

export default Home