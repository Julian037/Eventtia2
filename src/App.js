import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Inicio } from './componentes/Inicio';
import { Producto } from './componentes/Producto';
import { Cesta } from './componentes/Cesta';


function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/producto/:id'element={<Producto></Producto>}></Route>
          <Route path='/cesta' element={<Cesta></Cesta>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
