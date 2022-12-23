import {Fragment, React, useEffect, useState} from "react";
import { fetchAllProducts, fetchSearchProduct } from "../../funciones/API.js";
import Navbar from "../Navbar/Navbar.jsx";
import { useContext } from "react";
import { ProviderContext } from "../../context/Context.jsx";
import './HomeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Home() {

    // Probando llamado de context
    const testContext = useContext(ProviderContext)

    const [products, setProducts] = useState(null)
    const [skip, setSkip] = useState(0)

    const [searchedProduct, setSearchedProduct] = useState()

    const nextPage = () => {
        setSkip(skip + 9)
    }

    const previousPage = () => {
        setSkip(skip - 9)
    }

    useEffect( () => {
        fetchAllProducts(setProducts, skip)
    }, [skip, searchedProduct])

    const handleSearchProductChanges = (e) => {
        setSearchedProduct(e.target.value)
    }
    
    return(
        <Fragment>

        <Navbar 
            fetchSearchProduct={fetchSearchProduct}
            handleSearchProductChanges={handleSearchProductChanges}
            searchedProduct={searchedProduct}
            setProducts={setProducts}
        >        
        </Navbar>

        <div className="btnContainer d-flex justify-content-end mt-3">
            <div className="col-1"> <button disabled={skip <= 0 ? true : false} onClick={previousPage} type="button" class={skip > 0 ? "btn btn-outline-primary w-100" : "btn btn-outline-secondary w-100" }><FontAwesomeIcon  icon={faAngleLeft} /></button></div>
            <div className="col-1 ms-3 "><button disabled={skip === 99 ? true : false} onClick={nextPage}  type="button" class="btn btn-outline-primary w-100"><FontAwesomeIcon  icon={faAngleRight} /></button></div>
        </div>  

        {/* <h1>{testContext.saludo}</h1> */}

        <div className="containerProduct" >
            {products != null ? (
            products.map(product => (
                <div key={product.id} className="product">
                    <div className="container">
                    <div className="card" style={{maxWidth: '35rem'}}>
                    <div className='imgContainer'><img src={product.images[0]} className="card-img-top" alt="..."/></div>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <a href={`/producto/${product.id}`} className="btn btn-primary">Más información</a>
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