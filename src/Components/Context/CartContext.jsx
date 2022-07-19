import { createContext, useState } from "react";
import { useEffect } from "react";

export const contexto =  createContext();
const { Provider } = contexto;

const CartContext = ({children}) => {


    const [products, setProducts] = useState([]);
    const [cantidadCart, setCantidadCart] = useState(0);

    const addItem = (newProduct) => {

        console.log("hola");
        setProducts([...products, newProduct])
    };

    const clear = () => {
        setProducts([])
    }

    const removeItem = (a) => {

        const newCartList = products.filter((item) => {
            return item.id != a
        })
        setProducts(newCartList)

    }


    useEffect(() => {

        setCantidadCart(products.length)

    }, [products])

    return(
        <Provider value={{products, addItem, cantidadCart, clear, removeItem}}>
            {children}
        </Provider>
    );
};


export default CartContext;