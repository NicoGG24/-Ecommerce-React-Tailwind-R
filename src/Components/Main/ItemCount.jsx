import { useState } from "react";
import { MdAddCircleOutline, MdRemoveCircle } from "react-icons/md"

const ItemCount = (props) => {
    const [ammount, setAmmount] = useState(1);

    const addBtn = () =>{
        (ammount <= props.stock - 1) ? setAmmount(prevCount => prevCount + 1) : alert("No hay mas Stock.")
    }

    const removeBtn = () =>{
        (ammount>0) ? setAmmount(prevCount => prevCount - 1 ) : alert("Cantidad Invalida.")
    }


    return(
        <div className="flex flex-col items-center">
            <div className="flex items-center pl-10 pr-10 pt-5 pb-5 gap-3">
                <MdRemoveCircle className="cursor-pointer" onClick={removeBtn} />
                <div>{ammount}</div>
                <MdAddCircleOutline className="cursor-pointer" onClick={addBtn} />
            </div>
        </div>
    );
};

export default ItemCount;