import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import { Form } from '../styled/Form'
// import "./LoginForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



function LoginForm() { 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //above is from botstrap
    //if something gets screwy here, it is either user_name or name!!!
    //below from Ix

    // still need to build post and onsubmit

    const [formData, setFormData] = useState({  
        user_name:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {user_name, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            user_name,
            password
        }

        fetch(`/login`,{
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
                res.json().then(json => setErrors(json.errors))
            }
        })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <> 


    <Button variant="primary" onClick={handleShow}>Login</Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Enter your login info.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Safe and secure with BCrypt.
        
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <br/>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
    </Modal>


        {errors&&<div>{errors}</div>}
        </>
    )
}

export default LoginForm