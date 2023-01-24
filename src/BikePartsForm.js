import React, {useState} from "react";






const bikePartsUrl = "xxx"

function BikePartsForm () {

    const [species, setSpecies] = useState("")
    const [component, setComponent] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [material, setMaterial] = useState("")
    const [metric, setMetric] = useState("") //make me a dropdown
    const [size, setSize] = useState("")
    const [weight, setWeight] = useState("")
    const [quantity, setQuantity] = useState("")
    const [price, setPrice] = useState("")





//road, track, mountain, gravel

//cost?

    return (
        <div>
            <h2>Add your parts here:</h2>
            <form  >

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

                <input onChange={(e) => setComponent(e.target.value)} type="text" name="component" placeholder="component" value={component} required />

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


                <input onChange={(e) => setSize(e.target.value)} type="number" step="0.01" name="size" placeholder="size" value={size} required />

                <input onChange={(e) => setWeight(e.target.value)} type="number" step="0.01" name="weight" placeholder="weight (in ounces)" value={weight} required />

                <input onChange={(e) => setQuantity(e.target.value)} type="number" step="1" name="quantity" placeholder="quantity" value={quantity} required />

                <input onChange={(e) => setPrice(e.target.value)} type="number" step="0.01" name="price" placeholder="price (in $USD)" value={price} required />


                <button type="submit">Submit your parts</button>
            </form>
        </div>
    )
};

export default BikePartsForm;