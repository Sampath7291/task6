import "../css/Contact.css"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import github from "../images/github.svg"

const Contact = () => {
    return ( 
        <div className="main contact" id="contact">
            <h2>Contact me</h2>
            <div className="underline"></div>
            <div className="social-media">
                <a href="https://www.instagram.com/sampathallu_7020/" target="_blank"><img src={instagram}/></a>
                <a href="https://www.linkedin.com/in/sampath-kumar-857678286/" target="_blank"><img src={linkedin}/></a>
                <a href="https://github.com/Sampath7291" target="_blank"><img src={github}/></a>

            </div>
        </div>
     );
}
 
export default Contact;