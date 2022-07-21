import { useContext } from "react";
import { contexto } from "./Context/CartContext";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Cart = () =>{

    const { clear, removeItem, products, totalPrice } = useContext(contexto);


    return(

        <div className="flex flex-col pl-12 pr-12 pt-5 min-h-[50vh]">


            <h2 className=" text-5xl font-bold text-gray-600 pt-12">CART</h2>
            {products.map( (item) => {
                return(
                    <div className=" flex gap-8 font-bold justify-between mt-5">
                        <span className="w-[300px]">{item.title}</span>
                        <span className="text-red-600 min-w-[100px] text-start">{item.quantity} x ${item.price}</span>
                        <span> {item.quantity * item.price}</span>
                        <RiDeleteBack2Fill className=" hover:cursor-pointer" onClick={() => removeItem(item.id)} />
                    </div>
                )
            })}

            {products.length < 1 ?  <Link className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                 w-fit self-center hover:bg-black select-none"  to="/">GO TO STORE</Link> : <>
                 <button onClick={clear} className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                 w-fit self-end hover:bg-black select-none">CLEAR CART</button>
                 <span className="font-bold text-xl text-red-600 self-center">TOTAL: ${totalPrice}</span>
                 </> }




        </div>
    );
};

export default Cart