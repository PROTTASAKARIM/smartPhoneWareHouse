import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventorie, setInventorie] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventorie(data));

    }, [inventoryId])

    const decreaseQuantity = (event) => {
        const quantity = (parseInt(inventorie?.quantity) - 1);
        // console.log(inventorie?.sold);
        // const sold = (parseInt(inventorie?.sold) + 1);
        // console.log(quantity);
        const updatedItem = { quantity };
        // console.log(updatedItem);

        // send data to server
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Item updated successfully');
                setInventorie({ ...inventorie, quantity: updatedItem.quantity });
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <img className='w-20 mt-5' src={inventorie.img} alt="" />
            <div className='container mt-2'>
                <h1>{inventorie.name}</h1>
                <p><small>id : {inventorie._id}</small></p>
                <h4>Price : {inventorie.price}</h4>
                <h4>Quantity : {inventorie.quantity}</h4>
                <h4>Sold  : {inventorie.sold}</h4>
                <p>{inventorie.shortDescription}</p>
                <h4>Supplier Name : {inventorie.supplierName}</h4>
                <button onClick={() => decreaseQuantity(inventoryId)} className='btn btn-success'> Delivered</button>
                <div className='mt-2 justify-content-center'>
                    <input className='rounded' type="number" name="restockQuantity" id="" placeholder='Restock Quantity' />
                    <button className='btn btn-success'>Add New Item</button>
                </div>


            </div>
        </div>
    );
};

export default InventoryDetail;