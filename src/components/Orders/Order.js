import React from 'react';

const Order = ({order, count , handleDeleteOrder}) => {
    const {productName, price, orderDate, _id} = order;
    // const date = new Date(orderDate);
    // let date = (new Date()).toUTCString();
    // const date = orderDate;
    return (
                <tbody>
                    <tr>
                        <th scope="row">{count}</th>
                        <td>{productName}</td>
                        <td>{price}</td>
                        <td>{orderDate}</td>
                        <td><button className="btn btn-danger" onClick={ () => handleDeleteOrder(_id)}>Delete</button></td>
                    </tr>
                </tbody>
    );
};

export default Order;