import "./page.css";
import imgIcon from "./img/down-arrow.svg";

const About = () => {
  return (
    <secion id="about" className="about">
      <img className="aboutPfp" src={imgIcon} />
      <div>
        <h1>About Me</h1>
        <p>
          A Junior at Lynbrook High School who loves to code in his free time! I
          also love to play games, badminton, and chess.
        </p>
      </div>
    </secion>
  );
};

export default About;
