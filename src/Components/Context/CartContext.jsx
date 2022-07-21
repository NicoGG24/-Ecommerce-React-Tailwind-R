import { createContext, useState } from "react";
import { useEffect } from "react";

export const contexto =  createContext();
const { Provider } = contexto;

const CartContext = ({children}) => {


    const [products, setProducts] = useState([]);
    const [cantidadCart, setCantidadCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const addItem = (newProduct) => {
        if(isInCart(newProduct)){
            const copyP = [...products];
            const found = copyP.find((item) => item.id === newProduct.id);
            found.quantity += newProduct.quantity;
            setProducts(copyP)
            console.log(copyP)

        }else{
            setProducts([...products, newProduct])
            console.log(newProduct.id)

        }
        
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
    
    const isInCart = (id) => {
        return products.some(item => item.id == id.id)
    }

    const totalPriceV = products.reduce((total, item) => total + item.quantity*item.price, 0);

    const totalAmmountV = products.reduce((total, item) => total + item.quantity, 0);


    useEffect(() => {
        
        setCantidadCart(totalAmmountV)
        setTotalPrice(totalPriceV)

    }, [products])

    return(
        <Provider value={{products, addItem, cantidadCart, clear, removeItem, totalPrice}}>
            {children}
        </Provider>
    );
};


export default CartContext;