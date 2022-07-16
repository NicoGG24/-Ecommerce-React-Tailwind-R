import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);
    const { itemId } = useParams()
    
    function getItem() {
        fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(res=>res.json())
        .then(data=>setDetail(data))
    }

    useEffect(() => {
        getItem()
    }, [itemId])


    return(
        <ItemDetail product={detail}/>
    );
};

export default ItemDetailContainer;