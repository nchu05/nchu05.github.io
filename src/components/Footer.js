import FooterIcon from "../components/FooterIcon";

const Footer = () => {
  return (
    <footer>
      <div>
        <p> Thanks for stopping by! </p>
        <div className="row">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/Projects" className="nav-link">
            Projects
          </a>
        </div>
      </div>
      <FooterIcon />
    </footer>
  );
};

export default Footer;
