import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <div className="nav-w">
                <a href="/">
                    <h3>Nathan Chu</h3>
                </a>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                    <Link to="/projects" className="nav-link">
                        Projects
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav