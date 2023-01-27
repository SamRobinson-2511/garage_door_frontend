import React from "react";
// import "./BikeCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



//fetch maint log here - by ID to associate to bike




function BikeCard ({bikes, handleDelete}) {

//"bike" will be passed down as prop from Bicycles


    return (
        
        <div>
            {bikes.map(bike => 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={bike.image_url} />
                        <Card.Body>
                            <Card.Title>{bike.name}</Card.Title>
                            <Card.Text>
                                Lets click on view full to open a new modal that lists all components - use a modal with list
                            </Card.Text>
                            <Button variant="primary">View full components</Button>
                            <br/>
                            <br/>
                            <Button variant="primary" onClick={()=>handleDelete(bike)}>Remove from Garage</Button>
                        </Card.Body>
                    </Card>
                )}
        </div>

    )
};

export default BikeCard;