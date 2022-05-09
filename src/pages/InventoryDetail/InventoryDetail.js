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

    }, [])

    const decreaseQuantity = () => {
        const proceed = window.confirm('Are you sure?');
    }

    return (
        <div>
            <img className='w-20 mt-5' src={inventorie.img} alt="" />
            <div className='container mt-2'>
                <h1>{inventorie.name}</h1>
                <p><small>id : {inventorie._id}</small></p>
                <h4>Price : {inventorie.price}</h4>
                <h4>Quantity : {inventorie.Quantity}</h4>
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