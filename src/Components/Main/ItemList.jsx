import Item from "./Item";

const ItemList = (props) => {
    return(
 
        <Item image={props.image} title={props.title} price={props.price} />

    );
};

export default ItemList;