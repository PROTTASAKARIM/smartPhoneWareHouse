import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import AllProducts from '../AllProducts/AllProducts';
import './MyItem.css'

const MyItem = () => {
    const [items, setItem] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `https://guarded-badlands-97072.herokuapp.com/inventory`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [user])



    const mathched = items.filter(item => item.email === user.email)

    return (
        <div className='container inventory-items'>

            <div className='inventory-items mt-5'>
                {
                    mathched.map(match =>
                        <AllProducts
                            key={match._id}
                            inventory={match}
                        ></AllProducts>

                    )
                }
            </div>
        </div>
    );
};

export default MyItem;