import "./navBar.css";
import {Link} from "react-router-dom";



function NavBar(){
    return(

            <div>
            <nav>
                <a className="a-item"  href="/">Home</a>
                <a className="a-item"  href="/catalog">Catalog</a>
                <a className="a-item"  href="/about">About</a>
            </nav>
            </div>

    );
}

export default NavBar;