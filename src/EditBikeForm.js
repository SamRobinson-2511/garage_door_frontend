// import { useState, useEffect } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';

// function EditBikeForm({ bikes, completeEditing, handleUpdate, handleShow }){
//     const initialState = {
//         name: '',
//         species:'',
//         frame:'',
//         fork:'',
//         handlebars:'',
//         bar_tape:'',
//         wheel:'',
//         tire:'',
//         headset:'',
//         stem:'',
//         cranks:'',
//         pedals:'',
//         seatpost:'',
//         saddle:'',
//         brake:'',
//         shifter:'',
//         front_d:'',
//         back_d:'',
//         chain:'',
//         image_url:''
//     }

//     const [formData, setFormData] = useState(initialState)

//     const {
//         name,
//         species,
//         frame,
//         fork,
//         handlebars,
//         bar_tape,
//         wheel,
//         tire,
//         headset,
//         stem,
//         cranks,
//         pedals,
//         seatpost,
//         saddle,
//         brake,
//         shifter,
//         front_d,
//         back_d,
//         chain,
//         image_url
//     } = formData

//     // const singularBike = bikes.map((bike) => bike.id)
//     // console.log(singularBike)

//     useEffect(() => {
//         fetch(`/bicycles/${bikes.id}`)
//             .then((resp)=>resp.json())
//             .then((bike) => setFormData(bike))
//     }, [bike])

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({...formData, [name]:value });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();

//         const configObject = {
//             method: 'PATCH',
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json"
//             },
//             body: JSON.stringify(formData)
//         }
//         fetch(`/bicycles/${id}`, configObject)
//             .then((resp) => resp.json())
//             .then((updatedBike) =>{
//                 handleUpdate(updatedBike)
//                 completeEditing()
//             })
//     }

//     function handleShow(){
//         console.log('here')
//     }

    
//     {/*  */}
//     // (e) => setComponent(e.target.value)

//     return (
//         <div>
//             <Form.Group onSubmit={handleSubmit}>
//             <DropdownButton id="patch-button" title="Component to Edit">
//                 <Dropdown.ItemText>Components</Dropdown.ItemText>
//                     <Dropdown.Item as="button" value="frame">Frame</Dropdown.Item>
//                     <Dropdown.Item as="button" value="fork">Fork</Dropdown.Item>
//                     <Dropdown.Item as="button" value="handlebars">Handlebars</Dropdown.Item>
//                     <Dropdown.Item as="button" value="wheels">Wheels</Dropdown.Item>
//                     <Dropdown.Item as="button" value="tires">Tires</Dropdown.Item>
//                     <Dropdown.Item as="button" value="headset">Headset</Dropdown.Item>
//                     <Dropdown.Item as="button" value="stem">Stem</Dropdown.Item>
//                     <Dropdown.Item as="button" value="cranks">Cranks</Dropdown.Item>
//                     <Dropdown.Item as="button" value="pedals">Pedals</Dropdown.Item>
//                     <Dropdown.Item as="button" value="seatpost">Seatpost</Dropdown.Item>
//                     <Dropdown.Item as="button" value="saddle">Saddle</Dropdown.Item>
//                     <Dropdown.Item as="button" value="brakes">Brakes</Dropdown.Item>
//                     <Dropdown.Item as="button" value="shifters">Shifters</Dropdown.Item>
//                     <Dropdown.Item as="button" value="front derailleur">Front Derailleur</Dropdown.Item>
//                     <Dropdown.Item as="button" value="rear derailleur">Rear Derailleur</Dropdown.Item>
//                     <Dropdown.Item as="button" value="chain">Chain</Dropdown.Item>
//                     <Dropdown.Item as="button" value="chain">Image</Dropdown.Item>
//                     <input onChange={setPatch} 
//                         list="componentDrop" 
//                         type="text" 
//                         name="component" 
//                         placeholder="component" 
//                         value={component} 
//                         required 
//                     />
//                 </DropdownButton>
//             </Form.Group>
//         </div>
//     )
// }


// export default EditBikeForm;