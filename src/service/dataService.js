import axios from "axios";

var catalog = [

    {   
        id: "dfh351hd",
        title: "Cheetos Puffs",
        img: "./images/p3.jpg",
        price: 5.00,
        category: "salty"
    },

    {
        id: "ds4gsg4r5",
        title: "Cheetos Torciditos",
        img: "./images/p3.png",
        price: 5.00,
        category: "salty"
    },

    {
        id: "sdg45ss5g6",
        title: "Cheetos Crunchy",
        img: "./images/p5.jpg",
        price: 5.00,
        category: "salty"
    },

    {
        id: "gw5rwr5",
        title: "Cheetos Flamin-Hot",
        img: "./images/p7.jpg",
        price: 10.00,
        category: "special edition"
    },

    {
        id: "4hd5h54eh",
        title: "Cheetos Nacho",
        img: "./images/p10.jpg",
        price: 10.00,
        category: "special edition"
    },

    {
        id: "02ggww556",
        title: "Cheetos Maxi",
        img: "./images/p12.jpg",
        price:10.00,
        category: "special edition"
    },

    
    {
        id: "d5gs65g",
        title: "Cheetos Baked",
        img: "./images/p13.jpg",
        price: 20.00,
        category: "sweet"
    },

    {
        id: "df47df",
        title: "Cheetos Szktelor",
        img: "./images/p14.jpg",
        price: 20.00,
        category: "sweet"
    },
    
    {
        id: "sdg46r48",
        title: "Cheetos Baked's",
        img: "./images/p16.png",
        price: 20.00,
        category: "sweet"
    }

]

class DataService{
    async getCatalog(){
        let response = await axios.get("http://127.0.0.1:5000/api/catalog")
        console.log("test",response.data);
        return response.data;
        //return catalog;
    };

    registerProduct(){

    };
}
/*class DataService{
    getCatalog(){
        return catalog;
    };
    registerProduct(){

    };
}*/
export default DataService;