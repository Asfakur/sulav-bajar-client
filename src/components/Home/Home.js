import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import DeleteProduct from '../DeleteProduct/DeleteProduct';
import { Spinner } from 'react-bootstrap';

const Home = () => {

    const [products, setProducts] = useState([]);

    //load data from backend
    useEffect(() => {
        fetch('https://radiant-hamlet-99889.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className="container-fluid">
            {
                products.length !== 0 ?
                    '' : <div className='text-center p-4'>
                            <Spinner animation='border' variant='warning' />
                        </div>
            }
            <div className="row">

                {
                    products.map(product => <Product product={product} key={product._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;