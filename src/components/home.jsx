import "./home.css";
import {Link} from "react-router-dom";

const Home=()=>{
    return(
        <div className="home-page">
            <h1>Home</h1>
            <h2>Welcome to the Cheetos store</h2>
            <Link className="btn btn-dark" to="/catalog">
                Go to the catalog
            </Link>
        </div>
    );
};

export default Home;