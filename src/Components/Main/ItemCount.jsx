import { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircle } from "react-icons/md"
import { Link } from "react-router-dom";

const ItemCount = (props) => {
    const [ammount, setAmmount] = useState(1);
    const [selection, setSelection] = useState(true)

    const addBtn = () =>{
        (ammount <= props.stock - 1) ? setAmmount(prevCount => prevCount + 1) : alert("No hay mas Stock.")
    }

    const removeBtn = () =>{
        (ammount>0) ? setAmmount(prevCount => prevCount - 1 ) : alert("Cantidad Invalida.")
    }

    const onAdd = () => {
        setSelection(!selection)
    }

    return(
        selection ? <div className="flex flex-col items-center">
                <div className="flex items-center pl-10 pr-10 pt-5 pb-5 gap-3">
                    <MdRemoveCircle className="cursor-pointer" onClick={removeBtn} />
                    <div>{ammount}</div>
                    <MdAddCircleOutline className="cursor-pointer" onClick={addBtn} />
                </div>
                <span className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                hover:bg-black" onClick={onAdd}>ADD TO CART</span>         
            </div> : <Link to="/Cart" className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 hover:cursor-pointer
                hover:bg-black" >FINISH </Link>  
    );
};

export default ItemCount;