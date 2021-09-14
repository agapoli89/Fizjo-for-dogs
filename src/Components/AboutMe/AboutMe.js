import MyPhoto from '../../images/about-me.jpg';
import './AboutMe.scss';

const AboutMe = () => {
    return (  
        <div className="about-me">
            <h2 className="main-content__header">O mnie</h2>
            <p className="main-content__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
            <div className="about-me__image-box"><img src={MyPhoto} alt="Me and my dogs"/></div>
        </div>
    );
}
 
export default AboutMe;
