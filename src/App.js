import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home  from './componentes/Home/Home';
import  DetailsProduct  from './componentes/DetailsProduct/DetailsProduct';
import { Cesta } from './componentes/Cesta';
import  AddProduct  from './componentes/AddProduct/AddProduct';
import {Login} from './componentes/Login';
import {Context} from  './context/Context.jsx'

function App() {
  return (
    <div className="App"> 

    <Context>
  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/producto/:id'element={<DetailsProduct></DetailsProduct>}></Route>
          <Route path='/cesta' element={<Cesta></Cesta>}></Route>
          <Route path='/agregarProducto' element={<AddProduct></AddProduct>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>


      </Context>


    </div>
  );
}

export default App;
