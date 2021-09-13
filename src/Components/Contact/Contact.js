import { FaPhoneAlt } from "react-icons/fa";

import './Contact.scss';

const Contact = () => {
    return (  
        <div className="contact">
            <h2 className="main-content__header">Kontakt do mnie</h2>
            <p className="main-content__text">
                Dojeżdżam do pacjentów na terenie Wrocławia i okolic. W celu ustalenia szczegółów proszę o kontakt telefoniczny.
            </p>
            <a href="tel:+48661110622" className="main-content__text contact__link"><FaPhoneAlt /> 661 110 622</a>
        </div>
    );
}
 
export default Contact;