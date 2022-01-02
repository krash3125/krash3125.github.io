import "../page.css";
import chessboard from "../img/chess.png";

const About = () => {
  return (
    <secion id="about" className="about">
      <img className="about-pfp" src={chessboard} />
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
