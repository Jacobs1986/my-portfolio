import React from "react";
// Fa icon
import { FaCaretDown } from "react-icons/fa";

// CSS File
import "./navBar.css";

export default function NavBar() {
    return (
        <div>
            {/* Navigation bar */}
            <div className="topNav" id="myTopNav">
                {/* Home page Link */}
                <a href="/">Home</a>
                {/* Portfolio Dropdown */}
                <div className="dropdown">
                    <button className="dropbtn">Portfolio
                        <FaCaretDown />
                    </button>
                    {/* Dropdown content */}
                    <div className="dropdown-content">
                        {/* Featured link */}
                        <a href="/featured">Featured</a>
                        {/* Portfolio */}
                        <a href="/portfolio">All Projects</a>
                    </div>
                </div>
                {/* Contact */}
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};