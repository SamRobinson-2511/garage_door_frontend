import React from "react";
import "./BikeCard.css"



//fetch maint log here - by ID to associate to bike




function BikeCard () {

//"bike" will be passed down as prop from Bicycles







    return (
        
        <div> hello
            <div>bike card
                <li className="bikeCard" >
                    <h2>Name</h2>
                    <h3>Species</h3>
                    <img src={""} alt="" >bike.image</img>
                    <h5>rest of parts in other h5 tags</h5>
                </li>
            </div>

            <form>
                Maintenance Log
                <label for="dateLog">Date of log:</label>
                <input type="date" id="dateLog" name="dateLog" value={""} />

            </form>
        </div>
    )
};

export default BikeCard;