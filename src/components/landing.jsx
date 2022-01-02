import "../page.css";
import Icon from "react-eva-icons";

const Landing = () => {
  return (
    <secion id="landing" className="landing position-relative">
      <div className="landing-div-cover">
        <h1>Kushagr Khanna</h1>
        <a
          className="down-button position-absolute bottom-0 start-50 translate-middle-x"
          href="#projects"
        >
          <Icon
            name="arrow-downward-outline"
            size="xlarge" // small, medium, large, xlarge
            fill="#fff"
            animation={{
              type: "pulse", // zoom, pulse, shake, flip
              hover: true,
              infinite: false,
            }}
          />
        </a>
      </div>
    </secion>
  );
};

export default Landing;
