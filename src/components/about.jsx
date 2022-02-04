import { useState } from "react";

const About = () =>{

    const [name, setName] = useState("");

    const handleShowName = () => {

        setName("Jo");
    }

    return(

        <div className="about-page">

            <h1>{name}</h1>
            <button onClick={handleShowName}>Click To see my name</button>

        </div>
    )

}

export default About;