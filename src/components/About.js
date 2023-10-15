import "../css/About.css";
import design from "../images/design.svg";
import html from "../images/html.svg";
import react from "../images/react.svg";
import photo from "../images/image1.avif";
const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <h2>About me</h2>

        <div className="line"></div>
      </div>

      <div className="main">
        {/* section1 */}
        <div className="about-me">
          <img src={photo} />
          <div className="about-right">
            <h1>Sampath Kumar</h1>
            <p>
              Hola!👋 I'm Sampath, a software developer and can also work aiml 
              building and working with models and also have  a good knowledge 
              in web developement also .
            </p>{" "}
            <br></br>
            <p>
              {" "}
              Java is the main programming language which i am perfect .
              I can also adapt to any programming language .
            </p>{" "}
            <br></br>
            <p>
            Enthusiastic and dedicated individual with a deep-rooted passion for coding and software
development. A curious and inquisitive mind has driven me to explore the world of programming,
leading to a strong foundation in various programming languages and development frameworks.
            </p>
          </div>
        </div>
{/* section2 */}
        <div className="cards">
          <div className="card ">
            <img src={design} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Software developement</h6>
              <p>Playing with the java code </p>
            </div>
          </div>
          <div className="card ">
            <img src={html} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Model building</h6>
              <p>Bulding models for prediction</p>
            </div>
          </div>
          <div className="card ">
            <img src={react} />
            <div className="line"></div>
            <div className="card-content">
              <h6>Web developement</h6>
              <p>building useful websites</p>
            </div>
          </div>
        </div>
{/* section3 */}
        <div className="boxes">
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I work and study about</h6>
              <p>Coding java</p>
              <p>Coding Javascript</p>
              <p>Coding python</p>
              <p>Frontend developement</p>
              <p>Coding PHP</p>
              <p>MySQL Database</p>
            </div>
          </div>
          <div className="box">
            <div className="line2"></div>
            <div className="study-text">
              <h6>I've had experiences with</h6>
              <p>Coding matlab</p>
              <p>Coding c</p>
              <p>GIT, GitHub</p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
