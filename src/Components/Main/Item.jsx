const Item = (props) => {
    return(
        <div className=" box-border max-w-[192px] border-2 border-solid border-transparent m-4 hover:border-2 hover:border-solid hover:border-black  
        lg:max-w-[320px]">
            <div className="relative flex flex-col items-center ">   
                <img src={props.image} alt={props.title} className=" w-48 h-48
                lg:w-80 lg:h-80" />
                <a href="#" className="bg-red-600 text-white pt-1 pb-1 pr-3 pl-3 
                hover:bg-black">MORE DETAILS</a>
            </div>
            <div className="flex flex-col items-center">
                <span className=" text-center font-bold">{props.title}</span>
                <span className=" text-red-600 font-extrabold text-lg">$ {props.price}</span>
            </div>

        </div>
    );
};

export default Item;