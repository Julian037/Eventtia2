import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import './NavbarStyles.css'


const Navbar = ({fetchSearchProduct, handleSearchProductChanges, searchedProduct, setProducts}) => {


    const isLogin =  localStorage.getItem('isLogin');
    const imgProfile =  localStorage.getItem('image');
    const emailProfile =  localStorage.getItem('email');
    const firstNameProfile =  localStorage.getItem('firstName');
    const lastNameProfile =  localStorage.getItem('lastName');
    const usernameProfile =  localStorage.getItem('username');

    const navigate = useNavigate();

    var currentURL = window.location;

    const cerrarsesion = () => {
        localStorage.removeItem('isLogin');
        navigate('/');
    }

    const backHome = () => {
        navigate('/');
    }

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {currentURL.href !== 'http://localhost:3000/' ? 
                            <a className="nav-link active" aria-current="page" href="/"> <FontAwesomeIcon  icon={faCircleChevronLeft} onClick={() => backHome()}/></a>
                            :
                            <></>
                        }
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        {isLogin === 'true' ? 
                            <a className="nav-link active" aria-current="page" href="/agregarProducto">Agregar Producto</a>
                            : 
                            <></>
                        }
                        </ul>
                        {!currentURL.href.includes('/agregarProducto') ? 
                        <div className="d-flex p-2" role="search" >
                            <input onChange={handleSearchProductChanges} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button onClick={() => fetchSearchProduct( setProducts ,searchedProduct)} className="btn btn-outline-success">Search</button>
                        </div> : <></>
                        }
                        <div className='p-2'>
                            {isLogin !== 'true' ? 
                                <button className="btn btn-outline-secondary ">
                                    <a className="nav-link active" aria-current="page" href="/login">login</a>
                                </button>
                                :
                                <button className="btn btn-outline-secondary" onClick={cerrarsesion}>
                                    Cerrar sesión
                                </button>
                            }
                        </div>
                        <div>
                            {isLogin === 'true' ?  
                                <img data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='img' src={imgProfile} alt="" />
                                : 
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Información de Usuario</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body list-group  list-group-flush ">
                    <div className='d-flex list-group-item align-items-center'>
                    <p class="fw-bold p-2">Corre:</p>
                    <p>{emailProfile}</p>
                    </div>
                    <div  className='d-flex list-group-item align-items-center'>
                    <p class="fw-bold p-2">UserName:</p>
                    <p>{usernameProfile}</p>
                    </div>
                    <div  className='d-flex list-group-item align-items-center'>
                    <p class="fw-bold p-2">Nombre: </p>
                    <p>{firstNameProfile} {lastNameProfile}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar