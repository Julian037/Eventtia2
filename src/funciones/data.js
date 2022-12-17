import axios from "axios";

// const fetchAllProducts = async (state) => {
//     const peticion = await axios.get('https://dummyjson.com/products?total0=10&skip=2')
//     state(peticion.data.products)
// }

const fetchAllProducts = async (state , skip) => {
    const peticion = await axios.get(`https://dummyjson.com/products?limit=9&skip=${skip}`)
    state(peticion.data.products)
}


const productoSeleccionado = async (id, state) => {
    const peticion = await axios.get(`https://dummyjson.com/products/${id}`)
    state(peticion.data)
    //console.log(peticion.data)
}

const eliminarProducto = async (id) => {
    try {
        const peticion = await axios.delete(`https://dummyjson.com/products/${id}`)
        .then ( function (response) {
           if(response.status === 200) {
            console.log(`Todo ok ${response.status}`)
           } else {
            console.log("No se recibe respuesta")
           }
        })
    } 
    
    catch (e) {console.log(e)}
}

const login = async (username, password ) => {
        
        await axios.post('https://dummyjson.com/auth/login' , {
            username: username,
            password: password,
        }) 
        .then(function (response) {
            // console.log(response)
        })
        .catch ( function ( error ) {
            console.log(error)
        })
}


const agregarProducto = async (title) => {
    
        await axios.post('https://dummyjson.com/products/add' , {
            title: title,
            
        })
        .then(function (response) {
            console.log(response)
        })
        .catch ( function ( error ) {
            console.log(error)
        })
    } 
    
   



export {
    fetchAllProducts,
    productoSeleccionado,
    eliminarProducto,
    agregarProducto,
    login

}