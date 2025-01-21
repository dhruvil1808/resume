import { Container } from "./styles";
import DhruvilPatel from "../../assets/DhruvilImage.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import pyIcon from "../../assets/pyImage.svg";
import javaIcon from "../../assets/javaImage.svg";
import cppIcon from "../../assets/cppImage.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I'm a passionate Software Development Engineer specializing in automation and backend development. Currently, as a Valuations Developer/Controller at UBS (Union Bank of Switzerland), I design and implement Python-based solutions to streamline financial operations. My work directly contributes to improving process efficiency and accuracy, saving the Valuations Department over 50 hours per month. I focus on building scalable and high-performance systems that meet evolving business needs. Prior to UBS, I worked at CollabNation, where I contributed to backend architecture and development, enhancing user experience through the integration of robust features, APIs, and data analytics. My expertise in Python, software development, and automation drives me to build optimized, reliable, and maintainable systems that solve complex challenges.          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          My personal projects showcase my software development skills and problem-solving abilities. I’ve developed applications like Ping, Atendo, and Farmer Marketplace, each highlighting my expertise in building scalable systems and solving real-world challenges. I’m proficient in various programming languages and frameworks, with a focus on full-stack development, automation, and data-driven solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I thrive in collaborative environments where clear communication and teamwork drive success. My experience with supervisory platforms and data acquisition has strengthened my ability to work effectively with cross-functional teams, ensuring seamless integration and problem-solving. I am confident that my technical skills, combined with my collaborative mindset, make me a valuable asset to any development team or organization.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jsIcon} alt="Javascript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={pyIcon} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={javaIcon} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cppIcon} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={DhruvilPatel} alt="Dhruvil Patel" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
