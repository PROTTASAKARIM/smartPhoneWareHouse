import React, { useEffect, useState } from 'react';

const ManageInventory = () => {
    const [inventories, setInventories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])
    return (
        <div>


        </div>
    );
};

export default ManageInventory;