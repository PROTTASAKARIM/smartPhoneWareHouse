import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';





const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://guarded-badlands-97072.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    const addNewItem = () => {
        navigate(`/addnewItem`);
    }

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
            <button onClick={() => addNewItem()} className='btn btn-success mt-5'>Add new Item</button>

        </div>
    );
};

export default ManageInventory;