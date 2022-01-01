import "./page.css";
import imgIcon from "./img/down-arrow.svg";

const Landing = () => {
  return (
    <secion id="landing" className="landing position-relative">
      <h1>Kushagr Khanna</h1>
      <a href="#projects">
        <img
          className="icon position-absolute bottom-0 start-50 translate-middle-x"
          src={imgIcon}
        />
      </a>
    </secion>
  );
};

export default Landing;
