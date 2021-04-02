import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {

    const { productId } = useParams(); //get the product id from "/product/:productId">

    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();

    useEffect(() => {
        fetch(`https://radiant-hamlet-99889.herokuapp.com/product/${productId}`)
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
        fetch('https://radiant-hamlet-99889.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push("/orders");
                    alert('Your order placed successfully');
                }

            })

        // console.log('order data', orderDetails);

    }

    return (
        <div>
            <h1 className="text-center">Checkout</h1>
            <div className="d-flex justify-content-center">
                
                <div className="col-md-6">

                    <h3>Description</h3>

                    <table className="table table-hover bg-light rounded">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Product price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td>1</td>
                                <td>$ {product.price}</td>
                            </tr>

                            <tr>
                                <th scope="col">Total</th>
                                <th scope="col"></th>
                                <th scope="col">$ {product.price}</th>
                            </tr>

                        </tbody>
                    </table>
                    <button className="btn btn-success float-right" onClick={handleCheckout}>Checkout</button>
                </div>

            </div>
        </div>
    );
};

export default Checkout;