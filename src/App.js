import './App.css';
import NavBar from "./components/navBar";
import Footer from './components/footer';
import Catalog from './components/catalog';
//import Product from './components/product';
//import ToDo from './components/todo';
import About from "./components/about";
import Home  from './components/home';
import Cart from "./components/cart.jsx"
import Admi from './components/admi';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter,Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <img className='logo' src='./images/portada.gif'/>
        <NavBar/>
        <img className='portada' src='./images/portada-2.jpg'/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/about'  element={<About/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admi' element={<Admi/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
