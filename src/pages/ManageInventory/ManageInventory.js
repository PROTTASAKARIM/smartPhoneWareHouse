import React, { useEffect, useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';




const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <div className='container'>
            <div id='inventory' className='inventory-items'>
                {
                    inventories.map(inventory => <AllProducts
                        key={inventory._id}
                        inventory={inventory}
                    ></AllProducts>)
                }
            </div>

        </div>
    );
};

export default ManageInventory;