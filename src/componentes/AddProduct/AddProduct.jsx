import React, { Fragment, useEffect, useState } from 'react'
import { fetchAllProducts } from '../../funciones/data'
import Nav from '../Nav'
import { fetchAddProduct, fetDeleteProduct } from '../../funciones/data'
import './AddProductStyle.css'


function AddProduct() {

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
        // if(additionalData.category !== null && additionalData.price !== null && additionalData.stock !== null){
        //     setTestBoton(true)
        // }
    }

    useEffect( () => {
        fetchAllProducts(setProducts, 0)
    }, [])

    const addAdditionalData = () => {
        setProducts(products => [ ...products, additionalData]);
    }
    
    function deleteSimulatorData (i) {
        const newProduct = products.filter(producto => producto.id !== i)
        setProducts(newProduct) 
    }

    function dispatcherDeleteFetch (i) {
        deleteSimulatorData(i);
        fetDeleteProduct(i)
    }

    function dispatcherAddFetchAndAdditionalData (i) {
        fetchAddProduct(i)
        addAdditionalData()
    }

    return(
            <Fragment>
                <Nav></Nav>
                <div className='d-flex justify-content-around mt-3'>
                    <div class="form-floating mb-3">
                        <input onChange={(e) => handleChangesInput( e, 'title')} class="form-control" id="floatingInput" placeholder="Producto"/>
                        <label for="floatingInput">Producto</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input  onChange={(e) => handleChangesInput( e, 'category')} class="form-control" id="floatingInput" placeholder="Categoría"/>
                        <label for="floatingInput">Categoría</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input  onChange={(e) => handleChangesInput( e, 'price')} class="form-control" id="floatingInput" placeholder="Precio"/>
                        <label for="floatingInput">Precio</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input  onChange={(e) => handleChangesInput( e, 'stock')} class="form-control" id="floatingInput" placeholder="Cantidad"/>
                        <label for="floatingInput">Cantidad</label>
                    </div>
                    <div className='d-flex align-items-center'>   
                        <button onClick={() => dispatcherAddFetchAndAdditionalData(titleForFetch)} type="button" class="btn btn-success">Agregar</button>
                    </div>
                </div>  
                <table class="table table-striped ">
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