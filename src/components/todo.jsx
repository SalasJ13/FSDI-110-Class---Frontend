import "./todo.css";
import { useState } from "react";

const ToDo =()=>{
    const [text,setText]=useState("");
    const [list,setList]=useState([]);

    const handleAdd=()=>{
        console.log("Clicked!",text);
        let allToDo=[...list];
        allToDo.push(text);
        setList(allToDo);
        };

    const handleText=(e)=>{
        setText(e.target.value);
    };
    
    return(
        <div className="todo-page">
            <h3>Shopping List</h3>

            <input onChange={handleText} type="text" />
            <button onClick={handleAdd} className="btn btn-sm btn-primary" >Add</button>

            <div className="todo-list">
                {list.map((todo) => (<h6 key={todo}>{todo}</h6>))}
            </div>
        </div>
    );
};

export default ToDo;