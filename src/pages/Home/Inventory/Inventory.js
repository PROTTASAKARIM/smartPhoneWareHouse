import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `https://guarded-badlands-97072.herokuapp.com/inventory`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    const handleManageInventories = () => {
        navigate(`/inventory/manageinventory`);
    }

    return (
        <div className='container mt-5'>
            <h1>Our Inventory</h1>
            <div id='inventory' className='inventory-items mt-5'>
                {
                    inventories.slice(0, 6).map(inventory => <Product
                        key={inventory._id}
                        inventory={inventory}
                    ></Product>)
                }
            </div>
            <button onClick={handleManageInventories} className="btn btn-link text-decoration-none text-success mt-5"> Manage Inventories</button>
        </div>
    );
};

export default Inventory;