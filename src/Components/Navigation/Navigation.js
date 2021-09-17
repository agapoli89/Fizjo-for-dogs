import { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { IoMenuOutline } from "react-icons/io5";
import './Navigation.scss';


export const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
};

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isNotMobileMenu = useMediaQuery({ query: '(min-width:768px)' });

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (  
        <div className="navigation__container">
            <nav className="navigation">
            <motion.div initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 1 }} 
                className="navigation__name"
            >
                <Link smooth to="/#" className="navigation__name__link">Psy - rehabilitacja</Link></motion.div>
            <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ duration: 0.7 }}
                className="navigation__hamburger" onClick={toggleMenu}
            ><IoMenuOutline /></motion.div>
            {
                (isMenuOpen || isNotMobileMenu) &&
                <ul 
                    className="navigation__menu"
                >
                    <li className="navigation__menu--item1"><Link to="/#o-mnie" exact scroll={(el) => scrollWithOffset(el, 85)} onClick={toggleMenu}>O mnie</Link></li>
                    <li className="navigation__menu--item2"><Link to="/#co-oferuje" exact scroll={(el) => scrollWithOffset(el, 85)} onClick={toggleMenu}>Co oferuję</Link></li>
                    <li className="navigation__menu--item3"><Link smooth to="/#kontakt" onClick={toggleMenu}>Kontakt</Link></li>
                </ul>
            }
        </nav>
        </div>
    );
}
 
export default Navigation;