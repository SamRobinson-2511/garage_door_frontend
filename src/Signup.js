import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import {Form} from '../styled/Form'

function SignUp() {

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
        <Form onSubmit={onSubmit}>

            <label>
            First name
            </label>
            <input type='text' name='first_name' value={first_name} onChange={handleChange} />

            <label>
            Last name
            </label>
            <input type='text' name='last_name' value={last_name} onChange={handleChange} />

            <label>
            Username
            </label>  
            <input type='text' name='user_name' value={user_name} onChange={handleChange} />

            <label>
            Email
            </label>
            <input type='text' name='email' value={email} onChange={handleChange} />

            <label>
            Password
            </label>
            <input type='password' name='password' value={password} onChange={handleChange} />

            <input type='submit' value='Sign up!' />
        </Form>

        {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </>
    )
}

export default SignUp