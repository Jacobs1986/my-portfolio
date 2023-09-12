import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// CSS File
import "./navBar.css";

export default function NavBar() {
    // Function for showing navbar links
    const handleShowLinks = () => {
        // set the variable for myTopnav
        let x = document.getElementById("myTopnav");
        // Begin conditional
        if (x.className === "container topNav") {
            x.className += " responsive";
        } else {
            x.className = "container topNav"
        }
    }

    return (
        <div className="container topNav" id="myTopnav">
            <button className="icon" onClick={handleShowLinks}>
                <GiHamburgerMenu />
            </button>
            <a href="/">Home</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
        </div>
    );
};