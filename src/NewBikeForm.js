import React, {useState} from "react";

// import "./NewBikeForm.css";


///add a new bike to your garage.
const newBikeUrl = "http://localhost:3000/bicycles"

function NewBikeForm () {


//if all form inputs are , we can instruct user to enter "nil" for brakes, etc (shit that isnt on track or bmx bikes)   
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
    const [name, setName] = useState("")
    const [image_url, setImageURL] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let newBikeObj = {
            frame: frame,
            fork: fork,
            handlebars: handlebars,
            wheels: wheels,
            tires: tires,
            headset: headset,
            stem: stem,
            cranks: cranks,
            pedals: pedals,
            seatpost: seatpost,
            saddle: saddle,
            brakes: brakes,
            shifters: shifters,
            frontD: frontD,
            rearD: rearD,
            chain: chain,
            name: name,
            image_url: image_url
        }

        setFrame("")
        setFork("")
        setHandlebars("")
        setWheels("")
        setTires("")
        setHeadset("")
        setStem("")
        setCranks("")
        setPedals("")
        setSeatpost("")
        setSaddle("")
        setBrakes("")
        setShifters("")
        setFrontD("")
        setRearD("")
        setChain("")
        setName("")
        setImageURL("")

        let postRequest = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // "Content-Type": "multipart/form-data"
            },
            body: JSON.stringify(newBikeObj),
        }
        fetch(newBikeUrl, postRequest)
        .then(r => r.json())
        .then(newBikeObj => setNewBike([...newBike, newBikeObj]))
    } 

    return (
        <div className="formDiv" >
            <h2>Add a bike to your garage here:</h2>
            <h5>Please leave blank any component which is not included on your bike!</h5>
            <form onSubmit={handleSubmit}  >

                <input onChange={(e) => setName(e.target.value)} type="text" name="name"    placeholder="the name of your beast" value={name}  />
                
                <input onChange={(e) => setFrame(e.target.value)} type="text" name="frame" placeholder="frame" value={frame}  />

                <input onChange={(e) => setFork(e.target.value)} type="text" name="fork" placeholder="fork" value={fork}  />

                <input onChange={(e) => setHandlebars(e.target.value)} type="text" name="handlebars" placeholder="handlebars" value={handlebars}  />

                <input onChange={(e) => setWheels(e.target.value)} type="text" name="wheels" placeholder="wheels" value={wheels}  />

                <input onChange={(e) => setTires(e.target.value)} type="text" name="tires" placeholder="tires" value={tires}  />

                <input onChange={(e) => setHeadset(e.target.value)} type="text" name="headset" placeholder="headset" value={headset}  />

                <input onChange={(e) => setStem(e.target.value)} type="text" name="stem" placeholder="stem" value={stem}  />

                <input onChange={(e) => setCranks(e.target.value)} type="text" name="cranks" placeholder="cranks" value={cranks}  />

                <input onChange={(e) => setPedals(e.target.value)} type="text" name="pedals" placeholder="pedals" value={pedals}  />

                <input onChange={(e) => setSeatpost(e.target.value)} type="text" name="seatpost" placeholder="seatpost" value={seatpost}  />

                <input onChange={(e) => setSaddle(e.target.value)} type="text" name="saddle" placeholder="saddle" value={saddle}  />

                <input onChange={(e) => setBrakes(e.target.value)} type="text" name="brakes" placeholder="brakes" value={brakes}  />

                <input onChange={(e) => setShifters(e.target.value)} type="text" name="shifters" placeholder="shifters" value={shifters}  />

                <input onChange={(e) => setFrontD(e.target.value)} type="text" name="frontD" placeholder="front derailleur" value={frontD}  />

                <input onChange={(e) => setRearD(e.target.value)} type="text" name="rearD" placeholder="rear derailleur" value={rearD}  />

                <input onChange={(e) => setChain(e.target.value)} type="text" name="chain" placeholder="chain" value={chain}  />

                <input onChange={(e) => setImageURL(e.target.value)} type="text" name="image_url" placeholder="image URL" value={image_url}  />

                <button type="submit" className="submitButton" >
                    🚲 Add this sweet ride to my garage 🚲
                </button>

            </form>
        </div>
    )
};

export default NewBikeForm;
