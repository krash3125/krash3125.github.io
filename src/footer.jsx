import "./page.css";
import Icon from "react-eva-icons";

const Footer = () => {
  return (
    <secion id="footer" className="footer">
      <div className="footer-icon-list">
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
        <div className="footer-icon">
          <Icon
            name="linkedin"
            size="xlarge" // small, medium, large, xlarge
            fill="#FCDE67"
            animation={{
              type: "pulse", // zoom, pulse, shake, flip
              hover: true,
              infinite: false,
            }}
          />
        </div>
        <div className="footer-icon">
          <Icon
            name="twitter"
            size="xlarge" // small, medium, large, xlarge
            fill="#FCDE67"
            animation={{
              type: "pulse", // zoom, pulse, shake, flip
              hover: true,
              infinite: false,
            }}
          />
        </div>
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
        <div className="footer-icon">
          <Icon
            name="facebook"
            size="xlarge" // small, medium, large, xlarge
            fill="#FCDE67"
            animation={{
              type: "pulse", // zoom, pulse, shake, flip
              hover: true,
              infinite: false,
            }}
          />
        </div>
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
