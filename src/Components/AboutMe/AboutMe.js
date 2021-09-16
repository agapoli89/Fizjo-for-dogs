import MyPhoto from '../../images/about-me2.jpg';
import './AboutMe.scss';

const AboutMe = () => {
    return (  
        <div id="o-mnie" className="about-me">
            <h2 className="main-content__header">O mnie</h2>
            <p className="main-content__text">Rehabilitacją psów zainteresowałam się kiedy moja adoptowana rottweilerka osiągnęła wiek bardzo dojrzały i&nbsp;zaczęły niedomagać jej kolana. Zastosowana fizjoterapia dała świetne rezultaty i&nbsp;Blanka mogła cieszyć się długimi spacerami. Ja tymczasem zdobywałam wiedzę i&nbsp;zdałam bardzo dobrze egzamin uprawniający mnie do wykonywania zabiegów. Psy i&nbsp;ich dobrostan są moją pasją.</p>
            <div className="about-me__image-box"><img src={MyPhoto} alt="Me and my dogs"/></div>
        </div>
    );
}
 
export default AboutMe;
