import Product from "./product";
import { useEffect,useState } from "react";
import DataService from "../service/dataService";

const Catalog = () => {
    const [products,setProducts]=useState([]);
    
    const loadData=()=>{
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };
    
    useEffect(()=>{
        loadData();
    });

    return(

        <div className="catalog">

            <h3>Productos</h3>
            <h4>There are {products.length} products</h4>
            {products.map((p)=>(
                <Product key={p.id} data={p}/>
            ))}
            
        </div>

    );
};

export default Catalog;