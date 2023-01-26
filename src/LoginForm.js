import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import { Form } from '../styled/Form'
// import "./LoginForm.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function LoginForm() { 

    //if something gets screwy here, it is either user_name or name!!!

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
            }else {
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
        {/* <LoginForm onSubmit={onSubmit}>
            <label>
            Username
            </label>
            <input type='text' name='name' value={name} onChange={handleChange} />
        
            <label>
            Password
            </label>
            <input type='text' name='password' value={password} onChange={handleChange} />

        
            <input type='submit' value='Log in!' />
        </LoginForm>
         */}


    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>




        {errors&&<div>{errors}</div>}
        </>
    )
}

export default LoginForm