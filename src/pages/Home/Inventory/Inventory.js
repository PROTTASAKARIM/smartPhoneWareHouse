import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div className='container'>
            <h1>Our Inventory</h1>
            <div className='inventory-items'>
                {
                    inventories.map(inventory => <Product
                        key={inventory._id}
                        inventory={inventory}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;