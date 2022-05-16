import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = data => {
        console.log(user.email)

        console.log(data);
        const url = `https://guarded-badlands-97072.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('new item is added')
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("shortDescription")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Sold' type="number" {...register("sold")} />
                <input className='mb-2' placeholder='SupplierName' type="text" {...register("supplierName")} />
                <input className='mb-2' value={user.email} disabled placeholder='Email' type="text" {...register("email")} />

                <input className='btn btn-success' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddNewItem;