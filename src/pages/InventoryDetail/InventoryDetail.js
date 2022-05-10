import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [inventorie, setInventorie] = useState({});
    const navigate = useNavigate();

    const restockRef = useRef('');

    useEffect(() => {
        const url = `https://guarded-badlands-97072.herokuapp.com/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventorie(data));

    }, [inventoryId])


    const handleManageInventories = () => {
        navigate(`/inventory/manageinventory`);
    }

    const decreaseQuantity = () => {
        const quantity = (parseInt(inventorie?.quantity) - 1);
        const sold = (parseInt(inventorie?.sold) + 1);
        const updatedItem = { quantity, sold };

        // send data to server
        const url = `https://guarded-badlands-97072.herokuapp.com/inventory/${inventoryId}`;
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
                setInventorie({ ...inventorie, quantity: updatedItem.quantity, sold: updatedItem.sold });
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    const restockQuantity = (event) => {
        event?.preventDefault();

        const restock = restockRef.current.value ? restockRef.current.value : 0;

        const quantity = (parseInt(inventorie?.quantity) + parseInt(restock));


        console.log(restock)
        const updatedItem = { quantity };

        // send data to server
        const url = `https://guarded-badlands-97072.herokuapp.com/inventory/${inventoryId}`;
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
                    <input ref={restockRef} className='rounded' type="number" name="restockQuantity" id="" placeholder='Restock Quantity' />
                    <button onClick={() => restockQuantity()} className='btn btn-success'>Restock</button>
                </div>
                <button onClick={handleManageInventories} className="btn btn-link text-decoration-none text-success mt-5"> Manage Inventories</button>


            </div>
        </div>
    );
};

export default InventoryDetail;