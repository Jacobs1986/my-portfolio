import React from "react";

// CSS File
import "./navBar.css";

export default function NavBar() {
    return (
        <div className="topNav">
            <a href="/">Home</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
        </div>
    );
};