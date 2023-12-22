import {FiLinkedin, FiGithub, FiInstagram} from "react-icons/fi";
import { VscMail } from "react-icons/vsc";

const FooterIcon = () => {
  return (
    <p className="footer-icons">
      <FiLinkedin
        onClick={() => window.open("https://www.linkedin.com/in/nchu05/")}
        size={40}
      />
      <VscMail
        onClick={() => window.open("mailto:nwc35@cornell.edu")}
        size={40}
      />
      <FiGithub
        onClick={() => window.open("https://github.com/nchu05")}
        size={40}
      />
      <FiInstagram
        onClick={() => window.open("https://www.instagram.com/nnathan.chu/")}
        size={40}
      />
    </p>
  );
};

export default FooterIcon;
