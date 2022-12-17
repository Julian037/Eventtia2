import {Fragment, React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { productoSeleccionado } from "../funciones/data";
import { Nav } from "./Nav";

function Producto() {

    const [producto,setProducto] = useState(null)

    const [activeSlide , setActiveSlide] = useState(0)

    function changeSlide (index) {
        setActiveSlide(index)
    }

    const params = useParams()

    useEffect(() => {
        productoSeleccionado(params.id, setProducto)
    }, [params.id])

    return(
        <>

    

            {producto != null ? (
                <Fragment>
                    <Nav></Nav>

                    <div className="container-product">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{maxWidth: '35rem'}}>
                            <div className="carousel-indicators">

                                {producto.images.map( (image, i) => (
                                    // <>
                                    // <button key={i} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : ""} aria-label={`Slide ${i}`}></button>
                                    // {console.log(i)}
                                    // </>
                                    
      
                                    <button onClick={() => changeSlide(i)} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`}></button>
                                ))}

                                              

                                {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                            </div>
                            <div className="carousel-inner">

                                {producto.images.map ( (image, i) => (
                                   
                                    <div className={ activeSlide === i ? "carousel-item active" : "carousel-item"}> 
                                    <img src={image} className="d-block w-100" alt="..." style={{width: '18rem'}}></img>
                                    <div  className="carousel-caption d-none d-md-block">
                                    </div>
                                    </div>
                                

                                ))}
{/* 
                                <div className="carousel-item active">
                                <img src={producto.images[0]} className="d-block w-100" alt="..." style={{width: '18rem'}}></img>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={producto.images[1]} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={producto.images[2]} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                                </div> */
                                'carouselActive'
                                }
                            </div>
                        </div>


                        <h1>Producto con el id {params.id}</h1>
                        <h1>{producto.title}</h1>  
                        <p>Marca: {producto.brand}</p> 
                        <p>Categoria: {producto.category}</p> 
                        <p>Descripción: {producto.description}</p> 
                        <p>Descuento: {producto.discountPercentage}</p> 
                        <p>Precio: {producto.price}</p> 
                        <p>Calificación: {producto.rating}</p> 
                        <p>Stock: {producto.stock}</p>
                        

                    </div>

                </Fragment>
            ) : ('cargando....')}
       
        </>

    )
}

export {Producto}