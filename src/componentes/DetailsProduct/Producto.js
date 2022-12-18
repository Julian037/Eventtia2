import {Fragment, React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { productoSeleccionado } from "../../funciones/data";
import  Nav from "../Nav";
import './DetailsProduct.css'

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
                                    <button onClick={() => changeSlide(i)} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`}></button>
                                ))}
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
        
                        <h1 className="title">{producto.title}</h1>  
                       
                        <table class="table table-striped">
                
                        <tbody>
                            <tr>
                                <td>Identificación del producto</td>
                                <td> {params.id}</td>
                            </tr>
                            <tr>
                                <td>Marca:</td>
                                <td> {producto.brand}</td>
                            </tr>
                            <tr>
                                <td>Categoria:</td>
                                <td>{producto.category}</td>
                            </tr>
                            <tr> 
                                <td>Descripción: </td>
                                <td>{producto.description}</td>
                            </tr>
                            <tr>
                                <td>Descuento:</td>
                                <td> {producto.discountPercentage}</td> 
                            </tr>
                            <tr> 
                                <td>Precio:</td>
                                <td>{producto.price}</td>
                            </tr>
                            <tr>
                                <td>Calificación:</td>
                                <td>{producto.rating}</td>  
                            </tr>
                            <tr> 
                                <td>Stock:</td>
                                <td>{producto.stock}</td>
                            </tr>
  </tbody>
</table>

        
                            
                        {/* <h1>Producto con el id {params.id}</h1>
                        <h1>{producto.title}</h1>  
                        <p>Marca: {producto.brand}</p> 
                        <p>Categoria: {producto.category}</p> 
                        <p>Descripción: {producto.description}</p> 
                        <p>Descuento: {producto.discountPercentage}</p> 
                        <p>Precio: {producto.price}</p> 
                        <p>Calificación: {producto.rating}</p> 
                        <p>Stock: {producto.stock}</p> */}
                        

                    </div>

                </Fragment>
            ) : ('cargando....')}
       
        </>

    )
}

export {Producto}