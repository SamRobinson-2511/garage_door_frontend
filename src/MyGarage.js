import React from "react";
import "./MyGarage.css";
import {NavLink} from "react-router-dom";
// import Bicycles from "./Bicycles";


// MyGarage essentially acting as a navigation bar. from here, select your hobby. lets populate with other hobbies (computers, autos), and set those {react-router}-routes to an under construction message/404 or whatever... 



function MyGarage () {



    return (
        
        <nav className="myGarage">
            <NavLink className="myGarageText" exact to="/bicycles">Bicycles 🚵‍♂️</NavLink>
            <NavLink className="myGarageText" exact to="/computers">Computers 💻</NavLink>
            <NavLink className="myGarageText" exact to="/automobiles">Automobiles 🚘</NavLink>
            <NavLink className="myGarageText" exact to="/woodworking">Woodworking 🪓</NavLink>
            <NavLink className="myGarageText" exact to="/snowboards">Snowboards 🏂</NavLink>
        </nav>
        
    )
};

export default MyGarage