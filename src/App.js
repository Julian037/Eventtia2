import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio  from './componentes/Inicio';
import { Producto } from './componentes/Producto';
import { Cesta } from './componentes/Cesta';
import { AgregarProducto } from './componentes/AgregarProducto';
import {Login} from './componentes/Login';
import {Context} from  './context/Context.jsx'

function App() {
  return (
    <div className="App"> 

    <Context>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/home' element={<Inicio></Inicio>}></Route>
          <Route path='/producto/:id'element={<Producto></Producto>}></Route>
          <Route path='/cesta' element={<Cesta></Cesta>}></Route>
          <Route path='/agregarProducto' element={<AgregarProducto></AgregarProducto>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>


      </Context>


    </div>
  );
}

export default App;
