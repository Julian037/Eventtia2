import {Fragment, React, useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import { fetchSingleProduct, fetchUpdateProduct } from "../../funciones/API";
import  Nav from "../Navbar/Navbar";
import './DetailsProductStyle.css'

const DetailsProduct = () => {

    const initialValue = {
        title: null,
        brand : null,
        category: null,
        description: null,
        discountPercentage: null,
        price : null,   
    }

    const [selectedProduct , setSelectedProduct] = useState(null)
    const [newDataToRender , setNewDataToRender] = useState(initialValue)
    const [newDataToRender2 , setNewDataToRender2] = useState(initialValue)
    const [activeSlide , setActiveSlide] = useState(0)
    const [dataInputForFetch, setDataInputForFetch] = useState()
    const [flagControlDataToRender, setFlagControlDataToRender] = useState(0)

    const changeSlide = (index) => {
        setActiveSlide(index)
    }

    const params = useParams()

    useEffect(() => {
        fetchSingleProduct(params.id, setSelectedProduct)
    }, [params.id])

    const dispatcherUpdateFetchAndNewData = () => {
        setNewDataToRender2(newDataToRender)
        fetchUpdateProduct(params.id, setNewDataToRender , dataInputForFetch )
    }

    const sendDataToModal = () => {
        setDataInputForFetch(newDataToRender.title === null ? selectedProduct.title : newDataToRender.title)
        setNewDataToRender({
            ...newDataToRender
        }
        )
    }
    
    const handleChangesInput = (e) => {
        setDataInputForFetch(e.target.value)
    }

    const handleChangesInputOther = (e, key) => {
        setNewDataToRender({
            ...newDataToRender,
            [key]: e.target.value
        });
        setNewDataToRender2({
            ...newDataToRender2,
            [key]: e.target.value
        });
        setFlagControlDataToRender(1)
    }

    return(
        <Fragment>
            <Nav></Nav>
            {selectedProduct != null ? (
            <Fragment>
                <div className="container-product">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" style={{maxWidth: '35rem'}}>
                        <div className="carousel-indicators">
                            {selectedProduct.images.map( (image, i) => (
                            <button onClick={() => changeSlide(i)} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={i} className="active" aria-current="true" aria-label={`Slide ${i}`}></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {selectedProduct.images.map ( (image, i) => (
                            <div className={ activeSlide === i ? "carousel-item active" : "carousel-item"}> 
                                <img src={image} className="d-block w-100" alt="..." style={{width: '18rem'}}></img>
                                <div  className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                    <h1 className="title">{newDataToRender.title === null ? selectedProduct.title : newDataToRender.title}</h1>  
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Identificación del producto</td>
                                <td> {params.id}</td>
                            </tr>
                            <tr>
                                <td>Marca:</td>
                                <td> {newDataToRender2.brand === null ?   selectedProduct.brand : newDataToRender2.brand }</td>
                            </tr>
                            <tr>
                                <td>Categoría:</td>
                                <td>{selectedProduct.category}</td>
                            </tr>
                            <tr> 
                                <td>Descripción: </td>
                                <td>{selectedProduct.description}</td>
                            </tr>
                            <tr>
                                <td>Descuento:</td>
                                <td> {selectedProduct.discountPercentage}</td> 
                            </tr>
                            <tr> 
                                <td>Precio:</td>
                                <td>{selectedProduct.price}</td>
                            </tr>
                            <tr>
                                <td>Calificación:</td>
                                <td>{selectedProduct.rating}</td>  
                            </tr>
                            <tr> 
                                <td>Stock:</td>
                                <td>{selectedProduct.stock}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={sendDataToModal}>
                    Actualizar detalles
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">ACTUALIZAR INFORMACIÓN DE PRODUCTO</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" >Titulo:</span>
                            <input onChange={(e) => handleChangesInput(e)} value={dataInputForFetch} className="form-control" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" >Marca:</span>
                            <input onChange={(e) => handleChangesInputOther(e, 'brand')} value={flagControlDataToRender === 0 ? selectedProduct.brand : newDataToRender2.brand} className="form-control" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text">Categoría:</span>
                            <input onChange={(e) => handleChangesInputOther(e, 'category')} value={flagControlDataToRender === 0 ? selectedProduct.category : newDataToRender2.category} className="form-control" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text">Descripción</span>
                            <input onChange={(e) => handleChangesInputOther(e, 'description')} value={flagControlDataToRender === 0 ? selectedProduct.description : newDataToRender2.description} className="form-control" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text">Descuento:</span>
                            <input onChange={(e) => handleChangesInputOther(e, 'discountPercentage')} value={flagControlDataToRender === 0 ? selectedProduct.discountPercentage : newDataToRender2.discountPercentage} className="form-control" />
                        </div>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" >Precio:</span>
                            <input onChange={(e) => handleChangesInputOther(e, 'price')} value={flagControlDataToRender === 0 ? selectedProduct.price : newDataToRender2.price} className="form-control" />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => dispatcherUpdateFetchAndNewData()}>Guardar Cambios</button>
                    </div>
                    </div>
                </div>
                </div>
            </Fragment>
            ) : ('cargando....')}
        </Fragment>
    )
}

export default DetailsProduct