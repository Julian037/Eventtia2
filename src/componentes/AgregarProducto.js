import React, { Fragment, useEffect, useState } from 'react'
import { allProductos } from '../funciones/data'
import { Nav } from './Nav'
import { eliminarProducto } from '../funciones/data'
import { agregarProducto } from '../funciones/data'

function AgregarProducto() {

    const [productos, setProductos] = useState([])

    const [title, setTitle] = useState()

    function cambio (e) {
        setTitle(e.target.value)
        console.log(e.target.value)
    }

    useEffect( () => {
        allProductos(setProductos)
    }, [])

    function test (i) {

        console.log(productos)
        const newProduct = {
            brand: "",
            category: "",
            description: "",
            discountPercentage: 3 ,
            id: 101 ,
            images: null,
            price: 5,
            rating:66 ,
            stock: 55,
            thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
            title: i
        };

        setProductos(productos => [ ...productos, newProduct]);
        console.log(productos)
         
        console.log(newProduct);
    }


    function filtrarProducto (i) {
        
        const newProduct = productos.filter(producto => producto.id !== i)
        console.log(i)
       
        setProductos(newProduct) 

    }

    function eliminar (i) {
        filtrarProducto(i);
        eliminarProducto(i)
    }

    function agregar (i) {
        test(i);
        agregarProducto(i)
    }

    return(
            <Fragment>
                <Nav></Nav>
                <div className="row">
                    <div className="col-md-4">
                        <input onChange={cambio}></input>
                        <button onClick={() => agregar(title)}>agregar</button>
                    </div>
                    <div className="col-md-8">
                        <ul>
                        {productos != undefined ? (
                        productos.map(producto => (
                            
                            <div key={producto.id} className="product">
                                <div className="container">
                                <div className="card" style={{maxWidth: '35rem'}}>
                            
                                <div className="card-body">
                                    <h5 className="card-title">{producto.title}</h5>
                                    <button test>Modificar</button>
                                    <button onClick={() => eliminar(producto.id)}>eliminar</button>
                    </div>
                    </div>
                </div>
                </div>

                

            ))
        ) : ('Cargando....')}
                        </ul>
                    </div>
                </div>
            </Fragment>

    )
}

export {AgregarProducto}