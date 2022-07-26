import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where, getDoc } from "firebase/firestore"


const ItemListContainer = (props) => {

    const { categoryName } = useParams();

    const [items, setItems] = useState([])

    const [pantallacarga, setPantallacarga] = useState(false)

    const [categoryDisplay, setCategoryDisplay] = useState("GENERAL")

    async function getItems(URL) {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data);
        setPantallacarga(false)        
      }
      
    useEffect(() => {
        const productCollection = collection(db, "products");
        getDocs(productCollection)
        .then(result => {
            const lista = result.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            setItems(lista)
        })
        .catch(err => console.log(err))
        setCategoryDisplay(categoryName? categoryName : "GENERAL")


        console.log(db)

        // const URL = categoryName ? 
        // `https://fakestoreapi.com/products/category/${categoryName}` :
        // 'https://fakestoreapi.com/products';        
        // setPantallacarga(!pantallacarga)
        // setCategoryDisplay(categoryName? categoryName : "GENERAL")

        // setTimeout(() => {

        //     getItems(URL)
        //     setPantallacarga(!pantallacarga)
        // }, 2000);


    }, [categoryName])
        


    return(
        <div className="pb-32">
            <div className="flex pl-12 pt-5">
                <h1 className=" text-3xl font-bold text-gray-700
                 lg:text-6xl lg:pb-32 lg:pt-12 uppercase">{categoryDisplay}</h1>
            </div>
            {pantallacarga ? <div className="flex justify-center pb-52"><Spinner /></div> :<div className="flex flex-wrap justify-center box-border
                sm:pl-12 sm:pr-12 sm:gap-24">
                    {items.map((item) => <ItemList image={item.image} price={item.price} title={item.title} key={item.id} id={item.id}/>)}
                </div> 
            };
        </div>
    );
};

export default ItemListContainer;