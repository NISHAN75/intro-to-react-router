import { NavLink } from "react-router";
const Header = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold">This is Header</h2>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/user">User</NavLink>
                <NavLink to="/user2">User2</NavLink>
            </nav>
        </div>
    );
};

export default Header;