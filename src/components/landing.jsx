import "../page.css";
import Icon from "react-eva-icons";

const Landing = () => {
  return (
    <secion id="landing" className="landing position-relative">
      <div className="landing-div-cover">
        <h1>Kushagr Khanna</h1>
        <div class="d-inline-block mx-auto">
          <div class="footer-icon-list">
            <a
              href="https://github.com/krash3125/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-icon">
                <Icon
                  name="github"
                  size="xlarge" // small, medium, large, xlarge
                  fill="#FFF"
                  animation={{
                    type: "pulse", // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false,
                  }}
                />
              </div>
            </a>
            <a
              href="mailto:khannakushagr@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer-icon">
                <Icon
                  name="email"
                  size="xlarge" // small, medium, large, xlarge
                  fill="#FFF"
                  animation={{
                    type: "pulse", // zoom, pulse, shake, flip
                    hover: true,
                    infinite: false,
                  }}
                />
              </div>
            </a>
          </div>
        </div>

        <a
          className="down-button position-absolute bottom-0 start-50 translate-middle-x"
          href="#projects"
        >
          <div className="landing-icon">
            <Icon
              name="arrow-downward-outline"
              size="xlarge" // small, medium, large, xlarge
              animation={{
                type: "pulse", // zoom, pulse, shake, flip
                hover: true,
                infinite: false,
              }}
            />
          </div>
        </a>
      </div>
    </secion>
  );
};

export default Landing;
