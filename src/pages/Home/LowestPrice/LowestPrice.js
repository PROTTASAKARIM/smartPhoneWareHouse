import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './LowestPrice.css'

const LowestPrice = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://guarded-badlands-97072.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    const remaining = inventories.filter(inventory => inventory.price < 20000);
    return (
        <div className='container mt-5'>
            <h1>Exclusive Phones under your budget</h1>
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

export default LowestPrice;