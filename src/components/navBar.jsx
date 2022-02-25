import "./navBar.css";
//import {Link} from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storeContext";


`function NavBar(){`
const NavBar = ()=>{
    const [cart,user]=useContext(storeContext);

    return(

            <div>
            <nav>
                <a className="a-item"  href="/">Home</a>
                <a className="a-item"  href="/catalog">Catalog</a>
                <a className="a-item"  href="/about">About</a>
                <a className="a-item"  href="/cart"><span className="badge bg-primary">{cart.length}</span> View Cart</a>
            </nav>
            </div>

    );
};

export default NavBar;