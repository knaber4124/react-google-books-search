import React from "react";
import "../NavBar/NavBar.css";

function NavBar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper green lighten-3">
                    <ul id="nav-mobile" className="left hide-on-med-and-down ">
                        <li><a href="/">Search</a></li>
                        <li><a href="/saved">Saved</a></li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default NavBar;
