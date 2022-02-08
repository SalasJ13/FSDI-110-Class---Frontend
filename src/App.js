import './App.css';
import NavBar from "./components/navBar";
import Footer from './components/footer';
import Catalog from './components/catalog';
//import Product from './components/product';
import ToDo from './components/todo';
import About from "./components/about";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
    <div className="App">
      <img className='logo' src='./images/portada.gif'/>
      <NavBar></NavBar>
      <img className='portada' src='./images/portada-2.jpg'/>
      <About/>
      <Catalog/>
      <ToDo/>
      <Footer></Footer>
      

    </div>
  );
}

export default App;
