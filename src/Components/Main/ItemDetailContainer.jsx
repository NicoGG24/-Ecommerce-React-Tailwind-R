import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([]);
    const { itemId } = useParams()
    
    // function getItem() {
    //     fetch(`https://fakestoreapi.com/products/${itemId}`)
    //     .then(res=>res.json())
    //     .then(data=>setDetail(data))
    // }

    useEffect(() => {
        const productCollection = collection(db, "products");
        const refDoc = doc(productCollection, itemId);
        getDoc(refDoc)
        .then(result => {
            const producto = {
                id: result.id,
                ...result.data()
            }
            setDetail(producto)
        })

        // getItem()
    }, [itemId])


    return(
        <ItemDetail product={detail}/>
    );
};

export default ItemDetailContainer;