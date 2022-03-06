import { useEffect, useState } from "react";
import DataService from "../service/dataService";
import "./weather.css"

const Weather = () =>{
    const [data,setData] = useState({});

    const locationSucces = async(pos) =>{
        console.log("Ver locacion",pos);
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;

        let service= new DataService();
        let data= await service.getWeather(lat,lon);
        setData(data);
    };
    const locationError = (err) =>{
        console.log("Error de locacion",err);
    };

    const getLocation=()=>{
        navigator.geolocation.getCurrentPosition(locationSucces,locationError);
    };

    useEffect(()=>{
        getLocation();
    }, []);

    return( 
            <div className="weather-container">
        <img src={`https://openweathermap.org/img/w/${data?.current?.weather[0].icon}.png`}></img>

            <h5>{data?.current?.temp} &deg; </h5>
            <h6>{data?.current?.weather[0].description}</h6>     

        </div>
    );
}
export default Weather;