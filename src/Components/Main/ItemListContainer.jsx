import { useEffect, useState } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import Spinner from "./Spinner";

const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    async function getItems() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
        setPantallacarga(false)        
      }
      
    useEffect(() => {
        setTimeout(() => {
            getItems()

        }, 2000);

    }, [])
        
    const [pantallacarga, setPantallacarga] = useState(true)

    

    return(
        <div className="pb-32">
            <div className="flex pl-12 pt-5">
                <h1 className=" text-3xl font-bold text-gray-700
                 lg:text-6xl lg:pb-32 lg:pt-12">{props.greeting}</h1>
            </div>
            {pantallacarga ? <div className="flex justify-center pb-52"><Spinner /></div> : <></> }
            <div className="flex flex-wrap justify-center box-border
            sm:pl-12 sm:pr-12 sm:gap-24">
                {items.map((item) => <ItemList image={item.image} price={item.price} title={item.title} key={item.id}/>)}
            </div>
        </div>
    );
};

export default ItemListContainer;