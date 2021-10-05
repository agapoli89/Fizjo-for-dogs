import { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { IoMenuOutline } from "react-icons/io5";
import './Navigation.scss';

//function from: https://codesandbox.io/s/04rsh?file=/src/components/Navbar.jsx:977-1018
export const scrollWithOffset = (el, offset) => {
    window.scroll({
      top: el.offsetTop - offset,
      left: 0,
      behavior: "smooth"
    });
};

const navVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isNotMobileMenu = useMediaQuery({ query: '(min-width:768px)' });
    const offsetNumber = 88;

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    return (  
        <div className="navigation__container">
            <nav className="navigation">
            <motion.div 
                variants={navVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }} 
                className="navigation__name"
            >
                <Link smooth to="/#" className="navigation__name__link">Rehabilitacja psów <span>- Cagnolino</span></Link></motion.div>
            <motion.div 
                variants={navVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                className="navigation__hamburger" onClick={toggleMenu}
            >
                <IoMenuOutline />
            </motion.div>
            {
                (isMenuOpen || isNotMobileMenu) &&
                <ul 
                    className="navigation__menu"
                >
                    <Link to="/#o-mnie" exact scroll={(el) => scrollWithOffset(el, offsetNumber)} onClick={toggleMenu}><li className="navigation__menu--item1">O mnie</li></Link>
                    <Link to="/#co-oferuje" exact scroll={(el) => scrollWithOffset(el, offsetNumber)} onClick={toggleMenu}><li className="navigation__menu--item2">Co oferuję</li></Link>
                    <Link smooth to="/#kontakt" onClick={toggleMenu}><li className="navigation__menu--item3">Kontakt</li></Link>
                </ul>
            }
        </nav>
        </div>
    );
}
 
export default Navigation;