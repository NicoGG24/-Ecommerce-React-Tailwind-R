import { NavLink } from "react-router-dom";

const NavBar = () => {

    const categories = [
        {name: "Women", id: 0, route: "/category/women's clothing"},
        {name: "Men", id: 1, route: "/category/men's clothing"},
        {name: "Electronics", id: 2, route: "/category/electronics"},
        {name: "Jewlery", id: 3, route: "/category/jewelery"}
    ]
    

    return(
        <>
            <nav className=" list-none flex items-center font-bold gap-3 sm:gap-4 text-lg lg:self-start lg:ml-[20%]">
            <ul className="flex gap-4 flex-wrap justify-center">	

                <li><NavLink key={categories[0].id} to={categories[0].route}>{categories[0].name}</NavLink></li>
                <span>/</span>
                <li><NavLink key={categories[1].id} to={categories[1].route}>{categories[1].name}</NavLink></li>
                <span>/</span>
                <li><NavLink key={categories[2].id} to={categories[2].route}>{categories[2].name}</NavLink></li>
                <span>/</span>
                <li><NavLink key={categories[3].id} to={categories[3].route}>{categories[3].name}</NavLink></li>

                {/* {categories.map((category) => {
                    return (
                        <>
                            <li><NavLink key={category.id} to={category.route}>{category.name}</NavLink></li>
                            <span>/</span>
                        </>              
                    );
                })}  */}
            </ul>
            </nav>
            <div className=" w-full bg-black text-white flex justify-center">
                <span className="text-xs">FREE SHIPPING & RETURNS! <strong>DETAILS</strong></span>
            </div>
        </>

    );
};


export default NavBar;