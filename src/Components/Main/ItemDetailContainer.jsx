import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);

    
    function getItem() {
        fetch('https://fakestoreapi.com/products/2')
        .then(res=>res.json())
        .then(data=>setDetail(data))
        .then(console.log(detail))
    }

    useEffect(() => {
        getItem()
    }, [])


    return(
        <ItemDetail product={detail}/>
    );
};

export default ItemDetailContainer;