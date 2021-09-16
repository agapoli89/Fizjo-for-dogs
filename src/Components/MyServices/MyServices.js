import './MyServices.scss';

const MyServices = () => {
    return (
        <div id="co-oferuje" className="my-services">
            <h2 className="main-content__header">Co oferuję?</h2>
            <p className="main-content__text">Prowadzę fizjoterapię po&nbsp;zabiegach neurologicznych i&nbsp;ortopedycznych, w&nbsp;chorobach  zwyrodnieniowych stawów, chorobach zwyrodnieniowych kręgosłupa,  po&nbsp;złamaniach, zwichnięciach, przykurczach mięśni, urazach ścięgien.</p>
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