import React, { Fragment } from 'react'

const Navbar = ({fetchSearchProduct, handleSearchProductChanges, searchedProduct, setProducts}) => {

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/agregarProducto">Agregar Producto</a>
                        </li>
                    </ul>
                     <div className="d-flex" role="search">
                        <input onChange={handleSearchProductChanges} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button onClick={() => fetchSearchProduct( setProducts ,searchedProduct)} className="btn btn-outline-success">Search</button>
                    </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar