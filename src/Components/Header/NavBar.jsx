

const NavBar = () => {
    return(
        <>
            <nav className=" list-none flex items-center font-bold gap-3 sm:gap-4 text-lg lg:self-start lg:ml-[20%]">
                <li><a href="#">Women</a></li>
                <span>/</span>
                <li><a href="#">Men</a></li>
                <span>/</span>
                <li><a href="#">Electronics</a></li>
                <span>/</span>
                <li><a href="#">Jewlery</a></li>
            </nav>
            <div className=" w-full bg-black text-white flex justify-center">
                <span className="text-xs">FREE SHIPPING & RETURNS! <strong>DETAILS</strong></span>
            </div>
        </>

    );
};


export default NavBar;