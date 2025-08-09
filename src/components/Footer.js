import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="layout-md mt-20 flex flex-col">
      <div className="footer-row">
        email
        <hr />
        <a className="link" href="mailto:nwc35@cornell.edu">nwc35@cornell.edu</a>
      </div>
      <div className="footer-row">
        github
        <hr />
        <a className="link" href="https://github.com/nchu05">@nchu05</a>
      </div>
      <div className="footer-row">
        linkedin
        <hr />
        <a className="link" href="https://www.linkedin.com/in/nchu05/">@nchu05</a>
      </div>
    </footer>
  );
};

export default Footer;
