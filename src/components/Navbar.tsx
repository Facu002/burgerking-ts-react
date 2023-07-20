import { NavLink } from "react-router-dom";
import image  from "../assets/images/Burger-King-Logo-CMS.png";
export function NavBar() {
    return (
        <div className="Navbar-container">
            <NavLink to="./">
                <img className="Navbar-container__logo" src={image} alt="burger-king-logo" />
            </NavLink>
            <ul className="Navbar-container__navegation">
                <a href="https://order.burgerking.com.ar/">Pedi tu combo</a>
                <NavLink to="./Menu">Menu</NavLink>
                <NavLink to="./Menu">Cupones</NavLink>
                <NavLink to="./Menu">Restaurantes</NavLink>
                <NavLink to="./Menu">Novedades</NavLink>
                <NavLink to="./Menu">Delivery</NavLink>
            </ul>
        </div>
    )
}