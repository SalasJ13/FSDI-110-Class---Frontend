import "./navBar.css";


function NavBar(){
    return(

            <div>
            <nav>
                <a className="a-item" href="#home">Home</a>
                <a className="a-item"  href="#about">About</a>
                <a className="a-item"  href="#services">Services</a>
                <a className="a-item"  href="#contact">Contact</a>
            </nav>
            </div>

    );
}

export default NavBar;