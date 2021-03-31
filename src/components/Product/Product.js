import React from 'react';

const Product = ({ product }) => {
    return (
        <div className="col-md-4 bg-success">
            <div className="rounded m-5 bg-light rounded p-3">
                <img style={{ height: '300px' }} src={product.img} alt="" />
                <h3>{product.name}</h3>
                <h3>$ {product.price}</h3>
                <button className="btn btn-info" >Bye Now</button>
            </div>
        </div>
    );
};

export default Product;