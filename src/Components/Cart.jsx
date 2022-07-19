import { useContext } from "react";
import { contexto } from "./Context/CartContext";


const Cart = () =>{

    const { clear, removeItem } = useContext(contexto);


    return(
        <div className="flex flex-col pl-12 pt-5">
            <h2>CART</h2>
            <button onClick={clear} className=" border-solid border-red-500 bg-red-600 text-white text-xl font-bold p-2 max-w-fit">CLEAR CART</button>
            <button onClick={removeItem}>clear id 1 item</button>
        </div>
    );
};

export default Cart