import React from "react";

// CSS File
import "./navBar.css";

export default function NavBar() {
    // Function that handles showing the menu
    const handleToggleMenu = () => {
        var x = document.getElementById("navigationBar");
        if (x.className === "navigationBar") {
            x.className += " responsive"
        } else {
            x.className = "navigationBar"
        }
    }

    return (
        <div>
            <div>
                <button className="navigationToggle" onClick={handleToggleMenu}>Menu</button>
            </div>
            <div className="navigationBar" id="navigationBar">
                <a href="/">Home</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
};