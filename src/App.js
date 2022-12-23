import './App.css';
import {BrowserRouter, Routes, Route , redirect} from 'react-router-dom'
import Home  from './componentes/Home/Home';
import  DetailsProduct  from './componentes/DetailsProduct/DetailsProduct';
import  AddProduct  from './componentes/AddProduct/AddProduct';
import Login from './componentes/Login/Login';
import {Context} from  './context/Context.jsx'
import PrivateRoute from './componentes/PrivateRoute/PrivateRoute';

function App() {

  const isLogin =  localStorage.getItem('isLogin');
  return (
    <div className="App"> 
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/producto/:id'element={<DetailsProduct></DetailsProduct>}></Route>
            <Route exact path="/agregarProducto" element={<PrivateRoute component={AddProduct} />} />
            <Route path='/login' element={<Login></Login>}></Route>
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
