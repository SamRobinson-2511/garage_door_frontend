import React, {useState} from "react";




///this is to add parts to inventory

const bikePartsUrl = "xxx"

function BikePartsForm () {

    const [bikeParts, setBikeParts] = useState([])

    const [species, setSpecies] = useState("")
    const [component, setComponent] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [material, setMaterial] = useState("")
    const [metric, setMetric] = useState("") 
    const [size, setSize] = useState("")
    const [weight, setWeight] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let newBikeParts = {
            species: species,
            component: component,
            make: make,
            model: model,
            material: material,
            metric: metric,
            size: size,
            weight: weight, 
            quantity: quantity, 
            price: price
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


//add IDs below where necessary (main div and/or form)
    return (
        <div>
            <h2>Add your parts here:</h2>
            <form onSubmit={handleSubmit} >

                <fieldset id="fieldsetSpecies" value={species}>
                    <legend>Select your species:</legend>
                    <div id="radioButtonSpecies">

                        <input onChange={(e) => setSpecies(e.target.value)} type="radio" name="species" id="road" value="road" />
                        <label for="road">Road</label>

                        <input onChange={(e) => setSpecies(e.target.value)} type="radio" name="species" id="track" value="tack" />
                        <label for="track">Track</label>

                        <input onChange={(e) => setSpecies(e.target.value)} type="radio" name="species" id="mountain" value="mountain" />
                        <label for="mountain">Mountain</label>

                        <input onChange={(e) => setSpecies(e.target.value)} type="radio" name="species" id="gravel" value="gravel" />
                        <label for="gravel">Gravel</label>

                        <input onChange={(e) => setSpecies(e.target.value)} type="radio" name="species" id="bmx" value="BMX" />
                        <label for="bmx">BMX</label>
                    </div>
                </fieldset>


                <input onChange={(e) => setComponent(e.target.value)} list="componentDrop" type="text" name="component" placeholder="component" value={component} required />
                <datalist id="componentDrop">
                    <option value="frame" />
                    <option value="fork" />
                    <option value="handlebars" />
                    <option value="wheels" />
                    <option value="tires" />
                    <option value="headset" />
                    <option value="stem" />
                    <option value="cranks" />
                    <option value="pedals" />
                    <option value="seatpost" />
                    <option value="saddle" />
                    <option value="brakes" />
                    <option value="shifters" />
                    <option value="front derailleur" />
                    <option value="rear derailleur" />
                    <option value="chain" />
                </datalist>


                <input onChange={(e) => setMake(e.target.value)} type="text" name="make" placeholder="make" value={make} required />

                <input onChange={(e) => setModel(e.target.value)} type="text" name="model" placeholder="model" value={model} required />

                <input onChange={(e) => setMaterial(e.target.value)} type="text" name="material" placeholder="material" value={material} required />

                <fieldset id="fieldsetMetric" value={metric} >
                <legend>Metric?</legend>
                <div id="radioButtonMetric">
                    <input onChange={(e) => setMetric(e.target.value)} type="radio" name="metric" id="true" value="true"/>
                    <label for="true">True</label>

                    <input onChange={(e) => setMetric(e.target.value)} type="radio" name="metric" id="false" value="false"/>
                    <label for="false">False</label>
                </div>
                </fieldset>


                <input onChange={(e) => setSize(e.target.value)} type="number" step="0.01" name="size" placeholder="size" value={size} required min="0" />

                <input onChange={(e) => setWeight(e.target.value)} type="number" step="0.01" name="weight" placeholder="weight (in ounces)" value={weight} required min="0" />

                <input onChange={(e) => setQuantity(e.target.value)} type="number" step="1" name="quantity" placeholder="quantity" value={quantity} required min="0" />

                <input onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" name="price" placeholder="price (in $USD)" value={price} required min="0" />

                
                <button type="submit" className="submitButton">Submit your part</button>
            </form>
        </div>
    )
};

export default BikePartsForm;