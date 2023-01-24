import React from "react";
import "./MyGarage.css";
import {NavLink} from "react-router-dom";
import Bicycles from "./Bicycles";


// MyGarage essentially acting as a navigation bar. from here, select your hobby. lets populate with other hobbies (computers, autos), and set those {react-router}-routes to an under construction message/404 or whatever... 



function MyGarage () {










    return (
        <nav id="myGarageNav">
            <NavLink className="myGarageNavText" exact to="/bicycles">Bicycles</NavLink>
            <NavLink className="myGarageNavText" exact to="/computers">Computers</NavLink>
            <NavLink className="myGarageNavText" exact to="/automobiles">Automobiles</NavLink>
        </nav>
    )
};

export default MyGarage