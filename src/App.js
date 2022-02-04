import './App.css';
import NavBar from "./components/navBar";
import Footer from './components/footer';
import Catalog from './components/catalog';
import Product from './components/product';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <h1 className='h1-app'>Welcome</h1>

      <Catalog></Catalog>
     
      <Footer></Footer>
      

    </div>
  );
}

export default App;
