import axios from "axios";

const allProductos = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/products?limit=100')
    state(peticion.data.products)
    //console.log(peticion.data.products)
}

const productoSeleccionado = async (id, state) => {
    const peticion = await axios.get(`https://dummyjson.com/products/${id}`)
    state(peticion.data)
    //console.log(peticion.data)
}

const EliminarProducto = async (id, state) => {
    const peticion = await axios.delete(`https://dummyjson.com/products/${id}`)
    state(peticion.data.products)
    console.log(`peticion eliminar ${peticion.data.products}`)
}


export {
    allProductos,
    productoSeleccionado,
    EliminarProducto
}