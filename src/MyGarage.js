import React from "react";
import "./MyGarage.css";
import {NavLink} from "react-router-dom";
// import Bicycles from "./Bicycles";




// MyGarage essentially acting as a navigation bar. from here, select your hobby. lets populate with other hobbies (computers, autos), and set those {react-router}-routes to an under construction message/404 or whatever... 

import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"



function MyGarage () {



    return (
        
        <nav className="myGarage">

            

            
            <NavLink className="myGarageText" exact to="/bicycles">Bicycles 🚵‍♂️ </NavLink>
            

            <Button>Computers 💻<NavLink className="myGarageText" exact to="/computers"></NavLink></Button>

            <Button>Automobiles 🚘<NavLink className="myGarageText" exact to="/automobiles"></NavLink></Button>

            <Button>Woodworking 🪓<NavLink className="myGarageText" exact to="/woodworking"></NavLink></Button>

            <Button>Snowboards 🏂<NavLink className="myGarageText" exact to="/snowboards"></NavLink></Button>
        </nav>
        
    )
};

export default MyGarage