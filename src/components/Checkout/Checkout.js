import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {

    const { productId } = useParams(); //get the product id from "/product/:productId">

    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])

    const handleCheckout = () => {

        const orderDetails = {
            email: loggedInUser.email,
            productName: product.name,
            orderDate: (new Date()).toUTCString(),            
            price: product.price
        }

        console.log(orderDetails.orderDate);

        //post request for save order to db
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your order placed successfully');
                }

            })

        // console.log('order data', orderDetails);

    }

    return (
        <div>
            <h1>Product Name : {product.name}</h1>
            <h3>Product price : {product.price}</h3>
            <h3>Quantity : 1 </h3>
            <button onClick={handleCheckout}>Checkout</button>

        </div>
    );
};

export default Checkout;