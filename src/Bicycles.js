import React, {useEffect, useState} from "react";
import "./Bicycles.css";

import BikePartsForm from './BikePartsForm';
import NewBikeForm from './NewBikeForm';
import BikeCard from "./BikeCard";

// import BikeCard from "./BikeCard";
//need to fetch complete bicycles and map over to display all complete bicycles
// here user should see all bikes. user should see new bike form. user should click on bike => see bike card with components/parts and maint log. maint log form on bike card. 


const baseUrl = "http://localhost:3000/"
const bikesUrl = baseUrl + "bicycles/"



function Bicycles () {
    const [bikeData, setBikeData] = useState([])

    useEffect (() => {
        fetch(bikesUrl)  // 
        .then(resp => resp.json())
        .then(setBikeData)
    }, [])

    function handleDelete(x){
        fetch(`${bikesUrl}${x.id}`, {method: 'DELETE'})
        const updatedArray = bikeData.filter((bike) => bike.id !== x.id)
            setBikeData(updatedArray)
    }
       
    return (

        <div>
            
            <ul></ul>

            <div>
                <BikePartsForm />
                <NewBikeForm />
                <BikeCard bikes={bikeData} handleDelete={handleDelete} />
            </div>         
        </div>
    )
};

export default Bicycles;