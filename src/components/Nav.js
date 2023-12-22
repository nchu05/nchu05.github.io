import React from 'react';

const Nav = () => {
    return (
        <nav>
            <div className="nav-w">
                <a href="/">
                    <h3>Nathan Chu</h3>
                </a>
                <div className="nav-links">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                    <a href="/projects" className="nav-link">
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav