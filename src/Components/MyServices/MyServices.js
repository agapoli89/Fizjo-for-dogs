import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCloseCircleOutline } from "react-icons/io5";
import './MyServices.scss';

const MyServices = () => {

    const [service, setService] = useState('');
    const setLaserTherapy = () => setService('laserTherapy');
    const setUltraSounds = () => setService('ultraSounds');
    const setElectrotherapy = () => setService('electrotherapy');
    const setMassages = () => setService('massages');
    const setExercises = () => setService('exercises');

    const serviceDescription = () => {
        switch (service) {
            case "laserTherapy":
                return "Laseroterapia - tak jak u ludzi, również u psów, za pomocą promieniowania laserowego stymulujemy procesy lecznicze. Terapia działa przeciwzapalnie, przeciwbólowo, przeciwobrzękowo, przyspiesza regenerację tkanek.";
            case "ultraSounds":
                return "Ultradzwięki - celem terapii ultradzwiękami jest zmniejszenie bólu, poprawa elastyczności tkanek, zmniejszenie napięcia mięśniowego w chorej okolicy, poprawa ukrwienia, zwiększenie rozciągliwości tkanki łącznej w bliznach, przykurczach, zwłóknieniach, przyspieszenie gojenia. Wskazaniami są wszelkie urazy i przewlekłe stany zapalne w obrębie mięśni, więzadeł, ścięgien i torebek stawowych.";
            case "electrotherapy":
                return "Elektroterapia - stosując różne rodzaje prądów można działać przeciwbólowo jak również odbudować mięśnie w zaniku.";
            case "massages": 
                return "Masaż czyni cuda. Poprawia sprężystość i elastyczność tkaneek, przyspiesza regenerację kolagenu, poprawia odżywienie tkanek, ich ukrwienie, a co za tym idzie utlenowanie krwi. Przywraca mięśniom właściwą masę i siłę. Wskazaniami do masażu leczniczego są długotrwałe unieruchomienia, przykurcze mięśni, zaniki mięśni, różnego rodzaju urazy ortopedyczne.";
            case "exercises":
                return "Ćwiczenia mają na celu zwiększenie zakresu ruchu, zwiększenie masy mięśniowej, poprawę kondycji i co za tym idzie, poprawienie komfortu życia psa."
            default:
                return "Mamy jakiś problem...";
        }
    }

    return (
        <div id="co-oferuje" className="my-services">
            <h2 className="main-content__header">Co oferuję?</h2>
            <p className="main-content__text">Prowadzę fizjoterapię po&nbsp;zabiegach neurologicznych i&nbsp;ortopedycznych, w&nbsp;chorobach  zwyrodnieniowych stawów, chorobach zwyrodnieniowych kręgosłupa,  po&nbsp;złamaniach, zwichnięciach, przykurczach mięśni, urazach ścięgien.</p>
            <div className="my-services__container">
                <AnimatePresence exitBeforeEnter>
                    {!service ? 
                        <>
                            <motion.div 
                                key="laserTherapy"
                                whileHover={{ scale: 1.1 }}
                                initial={{x: -1000}}
                                animate={{x: 0}}
                                exit={{opacity: 0}}
                                transition={{ duration: 0.5 }} className="my-services__item" onClick={setLaserTherapy}>LASEROTERAPIA </motion.div>
                            <motion.div 
                                key="ultraSounds"
                                whileHover={{ scale: 1.1 }}
                                initial={{x: -1000}}
                                animate={{x: 0}}
                                exit={{opacity: 0}}
                                transition={{ duration: 0.7 }} className="my-services__item" onClick={setUltraSounds}>ULTRADŹWIĘKI</motion.div>
                            <motion.div 
                                key="electrotherapy"
                                whileHover={{ scale: 1.1 }}
                                initial={{x: -1000}}
                                animate={{x: 0}}
                                exit={{opacity: 0}}
                                transition={{ duration: 0.9 }} className="my-services__item" onClick={setElectrotherapy}>ELEKTROTERAPIA</motion.div>
                            <motion.div 
                                key="massages"
                                whileHover={{ scale: 1.1 }}
                                initial={{x: -1000}}
                                animate={{x: 0}}
                                exit={{opacity: 0}}
                                transition={{ duration: 1.1 }} className="my-services__item" onClick={setMassages}>MASAŻ LECZNICZY</motion.div>
                            <motion.div 
                                key="exercises"
                                whileHover={{ scale: 1.1 }}
                                initial={{x: -1000}}
                                animate={{x: 0}}
                                exit={{opacity: 0}}
                                transition={{ duration: 1.3 }} className="my-services__item" onClick={setExercises}>ĆWIACZENIA REHABILITACYJNE</motion.div>
                        </> :
                            (
                                <motion.div 
                                key="content"
                                initial={{x: -1000}}
                                animate={{x: 0}}
                                exit={{opacity: 0}}
                                transition={{ duration: 0.5 }}
                                className="my-services__item my-services__item__description" 
                                style={{width: "100%"}}
                                >
                                    <i className="my-services__item__description__icon" onClick={()=>setService('')}><IoCloseCircleOutline /></i>
                                    {serviceDescription()}
                                </motion.div>
                            )   
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}
 
export default MyServices;