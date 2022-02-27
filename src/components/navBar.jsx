import "./navBar.css";
import {Link} from "react-router-dom";
import { useContext } from "react";
import storeContext from "../store/storeContext";


const NavBar = ()=>{
    const {cart,user}=useContext(storeContext);

    return(

            <div>
            <nav>
                <Link className="a-item"  to="/">Home</Link>
                <Link className="a-item"  to="/catalog">Catalog</Link>
                <Link className="a-item"  to="/about">About</Link>
                <Link className="a-item"  to="/cart">View Cart: <span className="badge bg-secondary">{cart.length}</span></Link>
            </nav>
            </div>

    );
};

export default NavBar;