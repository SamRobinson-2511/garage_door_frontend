import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function SignUp() {


    const [show, setShow] = useState(false);   //bootstrap

    const handleClose = () => setShow(false);   //bootstrap
    const handleShow = () => setShow(true);   //bootstrap  

    /////////////////

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        user_name: "",
        email: "",
        password:""
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {first_name, last_name, user_name, email, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            first_name,
            last_name,
            user_name,
            email,
            password
        }

        fetch(`/users`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    history.push(`/users/${user.id}`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    
    }

    const handleChange = (e) => {
        const { user_name, value } = e.target
        setFormData({ ...formData, [user_name]: value })
    }
    return (
        <> 


        
    <Button variant="primary" onClick={handleShow}>Signup</Button>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Please fill out all fields below</Modal.Title>
    </Modal.Header>
    <Modal.Body>XXXXX

    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First name:</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
            <Form.Text className="text-muted">
                This is signup.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Last name:</Form.Label>
            <Form.Control type="text" placeholder="Enter last name"  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Choose a username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>


        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>



    </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
    </Modal>



        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default SignUp

// value={password} onChange={handleChange} 