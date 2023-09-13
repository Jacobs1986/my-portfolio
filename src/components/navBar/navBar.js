import React from "react";

// CSS File
import "./navBar.css";

export default function NavBar() {
    return (
        <div>
            <div>
                <button className="navigationToggle">Menu</button>
            </div>
            <div className="navigationBar">
                <a href="/">Home</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};