import Brand from "./Brand";
import CartContainer from "./CartContainer";
import CategoryItem from "./CategoryItem";
import MenuButton from "./MenuButton";


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Brand />
            <MenuButton />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <CategoryItem isActive={true} name="New Arrivals" />
                    </li>
                    <li className="nav-item">
                        <CategoryItem isActive={false} name="Clothing" />
                    </li>
                    <li className="nav-item">
                        <CategoryItem isActive={false} name="Goods" />
                    </li>
                    <li className="nav-item">
                        <CategoryItem isActive={false} name="Accessories" />
                    </li>
                </ul> 
            </div>
            <CartContainer />
        </div>
    </nav>
    );
};

export default Navbar;