import React from 'react';

const Order = ({order, count}) => {
    const {productName, price, orderDate} = order;
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
                    </tr>
                </tbody>
    );
};

export default Order;