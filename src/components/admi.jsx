import { useState } from "react";
import "./admi.css"

const Admi = () => {
    const [coupon,setCoupon]=useState({});
    const [allCoupons,setAllCoupons]=useState([]);
    const [product,setProduct]=useState({});

    const saveCoupon=()=>{
        console.log('Guardado', coupon);
        //mostrar en la pagina
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    };
    const codeChange = (e) =>{
        let copy ={...coupon} ;
        copy.code= e.target.value;
        setCoupon(copy);
    };
    const discountChange = (e) =>{
        console.log(e)

        let copy = {...coupon};
        copy.discount= parseFloat(e.target.value);
        setCoupon(copy);
    }
    const prodChange = (e)=>{
        let name= e.target.name;
        let value=e.target.value;

        let copy={...product};
        copy[name]=value;
        setProduct(copy);
    }
    return(
        <div className="admi-page">
            <h1>Management</h1>

            <div className="admi-container">
                <div className="product">
                    <h2 className="h2-t1">Register a New Products</h2>
                    <div className="form">
                        <div>
                            <label className="form-label">Tittle:</label>
                            <input onClick={prodChange} name="title" type="text" className="form-control" ></input>
                        </div>
                        <div>
                            <label className="form-label">Image:</label>
                            <input onClick={prodChange} name="image"  type="text" className="form-control" ></input>
                        </div>
                        <div>
                            <label className="form-label">Price:</label>
                            <input onClick={prodChange} name="price"  type="text" className="form-control" ></input>
                        </div>
                        <div>
                            <label className="form-label">Category:</label>
                            <input onClick={prodChange} name="category"  type="text" className="form-control" ></input>
                        </div>
                            <button  className="btn btn-dark" >Register Product</button>
                        </div>
                </div>
                <div className="coupons">
                    <h2 className="h2-t2">Coupon Codes</h2>
                        <div className="form">
                        <div>
                            <label className="form-label">Code:</label>
                            <input onClick={codeChange} name="code" type="text" className="form-control" ></input>
                        </div>
                        <div>
                            <label className="form-label">Discount:</label>
                            <input onClick={discountChange} name="discount" type="number" className="form-control" ></input>
                        </div>
                        <button onClick={saveCoupon} className="btn btn-dark" >Register Coupon</button>
                    </div>
                <h4>Valid Coupons</h4>
                <ul>
                    {allCoupons.map((c,index)=> (
                    <li key={index}> {c.code}- {c.discount}%{""}</li>))}
                </ul>
                </div>
            </div>
        </div>

    );
};

export default Admi;