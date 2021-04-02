import React, { useContext, useEffect, useState } from 'react';
import Order from './Order';
import { UserContext } from '../../App';

const Orders = () => {

    const [orders, setOrders] = useState([]);

    const [totalOrders, setTotalOrders] = useState(orders.length);

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
    }, [totalOrders])

    const handleDeleteOrder = (id) => {
        
        fetch(`http://localhost:5000/deleteOrder/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json()) // or res.json()
            .then(data => {
                if(data){
                    setTotalOrders(totalOrders - 1);                  
                }
                else{
                    alert('Unable to delete Order');
                }
            })
        console.log('deleted ', id);
        
    }


    return (
        <div className="container">
            <h3>Your total orders are {orders.length}</h3>
            <h4 className="text-danger">You can delete your Order if you wish</h4>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <Order order={order} key={order._id} count={++count} handleDeleteOrder={handleDeleteOrder}></Order>)
                }
            </table>
        </div>
    );
};

export default Orders;