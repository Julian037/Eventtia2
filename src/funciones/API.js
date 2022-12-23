import axios from "axios";

// const fetchAllProducts = async (state) => {
//     const peticion = await axios.get('https://dummyjson.com/products?total0=10&skip=2')
//     state(peticion.data.products)
// }

const fetchAllProducts = async (state , skip) => {
    const peticion = await axios.get(`https://dummyjson.com/products?limit=9&skip=${skip}`)
    state(peticion.data.products)
}

const fetchAddProduct = async (title) => {
    await axios.post('https://dummyjson.com/products/add' , {
        title: title,
    })
    .then(function (response) {
        if(response.status === 200) {
            console.log(`Respuesta ${response.status}. Adición exitosa`)
            } else {
            console.log("Ha ocurrido algo inesperado. Intente nuevamente")
            }
    })
    .catch ( function ( error ) {
        console.log(error)
    })
} 

const fetchSearchProduct = async (state , searchItem) =>{
    const peticion =  await axios.get(`https://dummyjson.com/products/search?q=${searchItem}`)
    state(peticion.data.products)
    .then(function (response) {
        console.log(response.status)
    })
    .catch ( function ( error ) {
        console.log(error)
    })
}

const fetDeleteProduct = async (id) => {
    try {
        await axios.delete(`https://dummyjson.com/products/${id}`)
        .then ( function (response) {
            if(response.status === 200) {
            console.log(`Respuesta ${response.status}. Eliminación exitosa`)
            } else {
            console.log("Ha ocurrido algo inesperado. Intente nuevamente")
            }
        })
    }  
    catch (e) {console.log(e)}
}


const fetchSingleProduct = async (id, state) => {
    const peticion = await axios.get(`https://dummyjson.com/products/${id}`)
    state(peticion.data)
}

const fetchUpdateProduct = async (id , state , title) => {
    const peticion = await axios.put(`https://dummyjson.com/products/${id}` , {
        title: title,
    })
    state(peticion.data)
    .then(function (response) {
        if(response.status === 200) {
            console.log(response)
            console.log(`Respuesta ${response.status}. Actualización exitosa `)
            } else {
            console.log("Ha ocurrido algo inesperado. Intente nuevamente")
            }
    })
    .catch ( function ( error ) {
        console.log(error)
    })
} 

const fetchLogin = async (username, password ) => {
        await axios.post('https://dummyjson.com/auth/login' , {
            username: username,
            password: password,
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
    fetchAddProduct,
    fetchSearchProduct,
    fetchLogin,
    fetDeleteProduct,
    fetchSingleProduct,
    fetchUpdateProduct
}