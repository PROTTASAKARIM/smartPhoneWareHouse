import React from 'react';
import { Table } from 'react-bootstrap';

const Tablebody = ({ inventory }) => {
    const { _id, img, name, price, quantity, supplierName, sold } = inventory;
    return (
        <div>
            <tr>
                <td><img src={img} alt="" /></td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{supplierName}</td>
                <td>{sold}</td>
                <td><button>X</button></td>
            </tr>
        </div>
    );
};

export default Tablebody;