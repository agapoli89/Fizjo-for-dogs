import { IoMenuOutline } from "react-icons/io5";
import './Navigation.scss';

const Navigation = () => {
    return (  
        <nav className="navigation">
            <div className="navigation__name">Rehabilitacja psów<span>- Jolanta Mielnik-Kuriata</span></div>
            <div className="navigation__hamburger"><IoMenuOutline /></div>
            <ul className="navigation__menu">
                <li>O mnie</li>
                <li>Co oferuję</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    );
}
 
export default Navigation;