import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';

const AllProducts = ({ inventory }) => {
    const { _id } = inventory;
    const [inventories, setInventories] = useState([]);



    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://guarded-badlands-97072.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }


    return (
        <div>
            <div className='container'>
                {/* <h1>product : {inventory.name}</h1> */}
                <Card style={{ width: '20rem' }}>
                    <Card.Img className='m-2' variant="top" src={inventory.img} />
                    <Card.Body>
                        <Card.Title>{inventory.name}</Card.Title>
                        <Card.Text>
                            <ReadMoreReact text={inventory.shortDescription}
                                min={0}
                                ideal={500}
                                max={500}
                                readMoreText={"click here to read more......."} />
                            {/* {inventory.shortDescription} */}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price : {inventory.price}</ListGroupItem>
                        <ListGroupItem>Quantity : {inventory.quantity}</ListGroupItem>
                        <ListGroupItem>Supplier Name :{inventory.supplierName} </ListGroupItem>
                    </ListGroup>
                    <button onClick={() => handleDelete(_id)} className='btn btn-success'>Delete</button>
                </Card>

            </div>

        </div>

    );
};

export default AllProducts;