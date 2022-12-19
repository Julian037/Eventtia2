import React, { Fragment, useEffect, useState } from 'react'
import { fetchAllProducts } from '../../funciones/API'
import Navbar from '../Navbar/Navbar'
import { fetchAddProduct, fetDeleteProduct } from '../../funciones/API'
import './AddProductStyle.css'

const AddProduct = () => {

    const initialValue = {
            category: null,
            price: null,
            stock: null,
    }

    const [products, setProducts] = useState([])
    const [titleForFetch, setTitleForFetch] = useState()
    const [additionalData, setAdditionalData] = useState(initialValue)

    function handleChangesInput (e, key) {
        setTitleForFetch(e.target.value)
        setAdditionalData({
            ...additionalData,
            [key]: e.target.value
        });
    }

    useEffect( () => {
        fetchAllProducts(setProducts, 0)
    }, [])

    const addAdditionalData = () => {
        setProducts(products => [ ...products, additionalData]);
    }
    
    const deleteSimulatorData = (id) => {
        const newProduct = products.filter(producto => producto.id !== id)
        setProducts(newProduct) 
    }

    const dispatcherDeleteFetch = (id) => {
        deleteSimulatorData(id);
        fetDeleteProduct(id)
    }

    const dispatcherAddFetchAndAdditionalData = (id) => {
        fetchAddProduct(id)
        addAdditionalData()
    }

    return(
            <Fragment>
                <Navbar></Navbar>
                <div className='d-flex justify-content-around mt-3'>
                    <div className="form-floating mb-3">
                        <input onChange={(e) => handleChangesInput( e, 'title')} className="form-control" id="floatingInput" placeholder="Producto"/>
                        <label for="floatingInput">Producto</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input  onChange={(e) => handleChangesInput( e, 'category')} className="form-control" id="floatingInput" placeholder="Categoría"/>
                        <label for="floatingInput">Categoría</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input  onChange={(e) => handleChangesInput( e, 'price')} className="form-control" id="floatingInput" placeholder="Precio"/>
                        <label for="floatingInput">Precio</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input  onChange={(e) => handleChangesInput( e, 'stock')} className="form-control" id="floatingInput" placeholder="Cantidad"/>
                        <label for="floatingInput">Cantidad</label>
                    </div>
                    <div className='d-flex align-items-center'>   
                        <button onClick={() => dispatcherAddFetchAndAdditionalData(titleForFetch)} type="button" className="btn btn-success">Agregar</button>
                    </div>
                </div>  
                <table className="table table-striped ">
                    <tbody className=''> 
                    {products !== undefined ? 
                        (products.map(producto => (
                            <tr>
                                <td>Producto: </td>
                                <td>{producto.title}</td>
                                <td>Categoria: </td>
                                <td>{producto.category}</td>
                                <td>Precio: </td>
                                <td>{producto.price}</td>
                                <td>Cantidad: </td>
                                <td>{producto.stock}</td>
                                <button onClick={() => dispatcherDeleteFetch(producto.id)}>X</button> 
                            </tr>
                        ))) : ('Cargando....')}
                    </tbody>
                </table>
            </Fragment>
    )
}

export default AddProduct