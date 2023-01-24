import React from "react";
import "./BikeCard.css"



//fetch maint log here - by ID to associate to bike




function BikeCard () {

//"bike" will be passed down as prop from Bicycles




//ul


    return (
        <div>bike card
            <li className="bikeCard" >
                <h2>Name</h2>
                <h3>Species</h3>
                <img src={""} >bike.image</img>
                <h5>rest of parts in other h5 tags</h5>
            </li>
        </div>
    )
};

export default BikeCard