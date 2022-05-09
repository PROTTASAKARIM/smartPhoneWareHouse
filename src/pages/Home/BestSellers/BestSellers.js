import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';


const BestSellers = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    const remaining = inventories.filter(inventory => inventory.sold > 40);

    return (
        <div className='container mt-5'>
            <h1>Best sellers </h1>
            <div id='inventory' className='inventory-items mt-5'>
                {
                    remaining.slice(0, 3).map(remain => <Product
                        key={remain._id}
                        inventory={remain}
                    ></Product>)
                }
            </div>

        </div>
    );
};

export default BestSellers;