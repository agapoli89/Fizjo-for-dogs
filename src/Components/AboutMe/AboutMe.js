import { useMediaQuery } from 'react-responsive';
import MyPhotoMobile from '../../images/about-me-mobile.jpg';
import MyPhoto from '../../images/about-me2.jpg';
import './AboutMe.scss';

const AboutMe = () => {
    const isNotMobileMenu = useMediaQuery({ query: '(min-width:768px)' });

    return (  
        <div id="o-mnie" className="about-me">
            <h2 className="main-content__header">O mnie</h2>
            <p className="main-content__text">Rehabilitacją psów zainteresowałam się kiedy moja adoptowana rottweilerka osiągnęła wiek bardzo dojrzały i&nbsp;zaczęły niedomagać jej kolana. Zastosowana fizjoterapia dała świetne rezultaty i&nbsp;Blanka mogła cieszyć się długimi spacerami. Ja tymczasem pogłębiałam wiedzę, czego zwieńczeniem było ukończenie specjalistycznego kursu z&nbsp; wynikiem bardzo dobrym. Wciąż jednak się doszkalam by być na bieżąco z&nbsp;najnowszymi badaniami i&nbsp;wykonywać swoją pracę z&nbsp;pełnym profesjonalizmem. Psy są moją pasją i&nbsp;przede wszystkim liczy się dla mnie ich dobrostan. Z&nbsp;doświadczenia wiem jak wiele zdziałać może prawidłowa rehabilitacja i&nbsp;moim celem jest dać innym czworonogom szansę jaką kiedyś dostała Blanka.</p>
            <div className="about-me__image-box"><img src={isNotMobileMenu ? MyPhoto : MyPhotoMobile} alt="Me and my dogs"/></div>
        </div> 
    );
}
 
export default AboutMe;
