import React, {useState} from "react";
import "./NewBikeForm.css";




///add a new bike to your garage.
const postBikeUrl = "XXX"


function NewBikeForm () {


//if all form inputs are required, we can instruct user to enter "nil" for brakes, etc (shit that isnt on track or bmx bikes)   
// no bar tape
    const [newBike, setNewBike] = useState([])

    const [frame, setFrame] = useState("")
    const [fork, setFork] = useState("")
    const [handlebars, setHandlebars] = useState("")
    const [wheels, setWheels] = useState("")
    const [tires, setTires] = useState("")
    const [headset, setHeadset] = useState("")
    const [stem, setStem] = useState("")
    const [cranks, setCranks] = useState("")
    const [pedals, setPedals] = useState("")
    const [seatpost, setSeatpost] = useState("")
    const [saddle, setSaddle] = useState("")
    const [brakes, setBrakes] = useState("")
    const [shifters, setShifters] = useState("")
    const [frontD, setFrontD] = useState("")
    const [rearD, setRearD] = useState("")
    const [chain, setChain] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let newBikeParts = {
            species: species,


        }

        setSpecies("")
        setComponent("")
        setMake("")
        setModel("")
        setMaterial("")
        setMetric("")
        setSize("")
        setQuantity("")
        setPrice("")


        let postRequest = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: JSON.stringify(newBikeParts),
        }
        fetch(bikePartsUrl, postRequest)
        .then(r => r.json())
        .then(newBikeParts => setBikeParts([...bikeParts, newBikeParts]))
    }




    return (
        <div>
            <h2>Add a bike to your garage here:</h2>
            <form>
                
                <input onChange={(e) => setFrame(e.target.value)} type="text" name="frame" placeholder="frame" value={frame} required />
                <input onChange={(e) => setFork(e.target.value)} type="text" name="fork" placeholder="fork" value={fork} required />
                <input onChange={(e) => setHandlebars(e.target.value)} type="text" name="handlebars" placeholder="handlebars" value={handlebars} required />
                <input onChange={(e) => setWheels(e.target.value)} type="text" name="wheels" placeholder="wheels" value={wheels} required />
                <input onChange={(e) => setTires(e.target.value)} type="text" name="tires" placeholder="tires" value={tires} required />
                <input onChange={(e) => setHeadset(e.target.value)} type="text" name="headset" placeholder="headset" value={headset} required />
                <input onChange={(e) => setStem(e.target.value)} type="text" name="stem" placeholder="stem" value={stem} required />
                <input onChange={(e) => setCranks(e.target.value)} type="text" name="cranks" placeholder="cranks" value={cranks} required />
                <input onChange={(e) => setPedals(e.target.value)} type="text" name="pedals" placeholder="pedals" value={pedals} required />
                <input onChange={(e) => setSeatpost(e.target.value)} type="text" name="seatpost" placeholder="seatpost" value={seatpost} required />
                <input onChange={(e) => setSaddle(e.target.value)} type="text" name="saddle" placeholder="saddle" value={saddle} required />
                <input onChange={(e) => setBrakes(e.target.value)} type="text" name="brakes" placeholder="brakes" value={brakes} required />
                <input onChange={(e) => setShifters(e.target.value)} type="text" name="shifters" placeholder="shifters" value={shifters} required />
                <input onChange={(e) => setFrontD(e.target.value)} type="text" name="frontD" placeholder="front derailleur" value={frontD} required />
                <input onChange={(e) => setRearD(e.target.value)} type="text" name="rearD" placeholder="rear derailleur" value={rearD} required />
                <input onChange={(e) => setChain(e.target.value)} type="text" name="chain" placeholder="chain" value={chain} required />
                <button type="submit" >Add this sweet ride to my garage</button>

            </form>
        </div>
    )
};

export default NewBikeForm