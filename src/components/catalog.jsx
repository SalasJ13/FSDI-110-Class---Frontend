import Product from "./product";
import { useEffect,useState } from "react";
import DataService from "../service/dataService";
import "./catalog.css"
import ToDo from "./todo";

const Catalog = () => {
    const [products,setProducts]=useState([]);
    
    const loadData = async () => {
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);
    };
    
    useEffect(()=>{
        loadData();
    },[]);

    return(

        <div className="catalog">
            <h1>Welcome</h1>
            <h4>There are {products.length} products</h4>
            <h2>Our best-selling products</h2>
            {products.map((p)=>(
                <Product key={p.id} data={p}/>
            ))}
            <ToDo/>
        </div>

    );
};

export default Catalog;