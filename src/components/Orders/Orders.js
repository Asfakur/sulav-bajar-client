import React, { useContext, useEffect, useState } from 'react';
import Order from './Order';
import { UserContext } from '../../App';

const Orders = () => {

    const [orders, setOrders] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let count = 0;

    //load data from backend
    const userEmail = {
        email: loggedInUser.email
    }
    useEffect(() => {
        fetch('http://localhost:5000/orders',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userEmail)
            }
        )
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    return (
        <div>
            <h1>Total orders {orders.length}</h1>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <Order order={order} key={order._id} count={++count}></Order>)
                }
            </table>
        </div>
    );
};

export default Orders;