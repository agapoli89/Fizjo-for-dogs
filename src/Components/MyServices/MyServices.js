import './MyServices.scss';

const MyServices = () => {
    return (
        <div className="my-services">
            <h2 className="main-content__header">Co oferuję?</h2>
            <p className="main-content__text">Prowadzę fizjoterapię po zabiegach ortopedycznych, neurologicznych, w&nbsp;przewlekłych chorobach stawów, dysplazjach, zanikach mięśni, zapaleniach ścięgien.</p>
            <div className="my-services__container">
                <div className="my-services__item">LASEROTERAPIA</div>
                <div className="my-services__item">ULTRADŹWIĘKI</div>
                <div className="my-services__item">ELEKTROTERAPIA</div>
                <div className="my-services__item">MASAŻ LECZNICZY</div>
                <div className="my-services__item">ĆWIACZENIA REHABILITACYJNE</div>
            </div>
        </div>
    )
}
 
export default MyServices;