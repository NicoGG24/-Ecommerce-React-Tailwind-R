import { useContext, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { contexto } from "../Context/CartContext";

const CartWidget = () => {
    
    const { cantidadCart } = useContext(contexto);


    return(
        <div className="flex flex-col items-center">
            <Link to="/Cart"><BsBag size={20} /></Link>
            <span className="text-red-600 font-bold">{cantidadCart}</span>
        </div>
    );

};

export default CartWidget;