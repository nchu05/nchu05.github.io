import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const links = [
    { name: "writing", href: "/writing" },
    { name: "publications", href: "/publications" },
    { name: "resume", href: "/resume" },
  ];

  const getPageTitle = () => {
    const link = links.find(({ href }) => location.pathname.includes(href));
    if (link) {
      return link.name.charAt(0).toUpperCase() + link.name.slice(1);
    }
    return null;
  };

  const pageTitle = getPageTitle();

  return (
    <header className="layout-md flex justify-between items-start">
      <h1 className="font-bold text-black header-title mb-6">
        <a href="/">Nathan Chu</a>
        {pageTitle && (
          <span className="page-title">
            <span className="text-neutral-400">—</span>
            {pageTitle}
          </span>
        )}
      </h1>
      <nav className="header-nav">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`hover:text-black transition-colors ${location.pathname === link.href ? 'text-black' : ''
              }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
