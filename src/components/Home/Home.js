import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import DeleteProduct from '../DeleteProduct/DeleteProduct';

const Home = () => {

    const [products, setProducts] = useState([]);

    //load data from backend
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <div className="row">
            {
                products.map(product => <Product product={product} key ={product._id}></Product>)
            }
        </div>
    );
};

export default Home;