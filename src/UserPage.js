import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'


function UserPage(){

    //will have to modify return statement

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    
    const params = useParams()
    const {id} = params
    useEffect(()=>{
        fetch(`/users/${id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    // console.log(user)  may come in handy
                    setUser(user)
                    setLoading(false)
                })
            }else {
                res.json().then(data => 
                    {
                    // console.log(data.error)  also may come in handy
                    setErrors(data.error)
                })
            }
        })
    
    },[])

    if(loading) return <h1>Loading</h1>
    if(errors) return <h1>{errors}</h1>
    return (
        <div>
            <h1>{user.user_name}</h1>
            <h3>Tickets</h3>
            <ul>
                {user.tickets.map(ticket => (
                <li>
                    <h2>{ticket.production.title}</h2>
                    <p>Price: {ticket.price}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage