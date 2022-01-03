import "../page.css";
import Icon from "react-eva-icons";

const Footer = () => {
  //other social icon names: linkedin, twitter, facebook

  return (
    <secion id="footer" className="footer">
      <div className="footer-icon-list">
        <a
          href="https://github.com/krash3125/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="footer-icon">
            <Icon
              name="github"
              size="xlarge" // small, medium, large, xlarge
              fill="#FCDE67"
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
              fill="#FCDE67"
              animation={{
                type: "pulse", // zoom, pulse, shake, flip
                hover: true,
                infinite: false,
              }}
            />
          </div>
        </a>
      </div>
      <br />
      <div>
        <p className="footer-note">
          Made with ReactJS, Reactstrap, and Eva Icons
        </p>
        <p className="footer-note">Kushagr Khanna</p>
      </div>
    </secion>
  );
};

export default Footer;
