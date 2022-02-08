//import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import "./about.css"

const About = () =>{
    const [name, setName] = useState("");
    const [visible,setVisible] =useState(false);

    const handleShowName = () => {
        setName("Pagina React");
        setVisible(true);
    };
    const getInfo=()=>{

        if (visible){
            return (
                <div className="info-personal">
                <h3>Contact:</h3>
                    <ul>
                        <li><b>Name:</b> Jazmin Salas</li>
                        <li><b>Email:</b> salasjazmin15@gmail.com</li>
                    </ul>
                </div>
            );
        } else {return "";}

    };

    return(
        <div className="about-page">
            {getInfo()}
            <button className="btn-about" onClick={handleShowName}>Click To see my name</button>
        </div>
    );

};

export default About;