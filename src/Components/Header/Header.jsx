import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import Logo from "./Logo"

const Header = () => {
    return(
        <header className=" bg-gray-300 flex flex-col items-center gap-8 pt-4 
        lg:gap-5" >

            <div className="flex flex-col gap-6 justify-around w-full items-center 
            sm:flex-row sm:justify-between sm:pr-12 sm:pl-12
            lg:pt-12">
                <Logo />
                <CartWidget />                
            </div>

            <NavBar />

        </header>

    );
};

export default Header;