import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";


const CartWidget = () => {
    return(
            <Link to="/Cart"><BsBag size={20} /></Link>
    );

};

export default CartWidget;