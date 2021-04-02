import React from 'react';

const DeleteProduct = ({product , handleDelete}) => {
    const { name, price, weight, _id} = product;

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{weight}</td>
                <td><button className="btn btn-danger" onClick={() =>handleDelete(_id)}>Delete</button></td>
                
            </tr>
        </tbody>
    );
};

export default DeleteProduct;